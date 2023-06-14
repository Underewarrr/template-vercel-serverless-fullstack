import type { NextApiRequest, NextApiResponse } from "next";
import "dotenv/config";
import type { User } from "../../../../interfaces";
import accountModel from "../../../../database/models/Account";

// SDK do Mercado Pago
import mercadopago from "mercadopago";
// Adicione as credenciais
mercadopago.configure({
  access_token: process.env.MP_ACESS_TOKEN
});

export default async function userHandler(
    req: NextApiRequest,
    res: NextApiResponse<User>
  ) {
    switch (req.method) {
      case "POST":
        return await addBalance(req, res);
      default:
        return res.status(400);
    }
  }

const addBalance = async (req: NextApiRequest, res: NextApiResponse) => {
    const preference = {
        items: [
            {
                title: req.body.description,
                unit_price: Number(req.body.price),
                quantity: Number(req.body.quantity),
            }
        ],
        back_urls: {
            "success": "http://localhost:8080/feedback",
            "failure": "http://localhost:8080/feedback",
            "pending": "http://localhost:8080/feedback"
        },
        auto_return: "approved",
        notification_url: "https://your-domain.com/api/payment-notification" // set your domain here
    };

    mercadopago.preferences.create(preference)
        .then(function (response) {
            res.json({
                id: response.body.id
            });
        }).catch(function (error) {
            console.log(error);
        });
};

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "1mb",
        },
    },
};

// Listen for payment notifications
export const paymentNotification = async (req: NextApiRequest, res: NextApiResponse) => {
    const paymentId = req.body.id;

    try {
        // Retrieve payment information from Mercado Pago API
        const payment = await mercadopago.payment.get(paymentId);

        // Get the user ID from the payment's external reference
        const userId = payment.external_reference;

        if (payment.status === 'approved') {
            // Update the user's balance with the payment amount
            const user = await updateUserBalance(userId, payment.transaction_amount);
        }

        // Send a response to Mercado Pago to confirm that the notification was received
        res.status(200).send("Notification received");
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
};


const updateUserBalance = async (userId: string, amount: number) => {
	try {
	  const user = await accountModel.findByPk(userId);
	  if (!user) {
		throw new Error("User not found");
	  }
  
	  const updatedBalance = user.balance + amount;
  
	  await user.update({ balance: updatedBalance });
	  return user;
	} catch (err) {
	  console.error(err);
	  throw err;
	}
  };
