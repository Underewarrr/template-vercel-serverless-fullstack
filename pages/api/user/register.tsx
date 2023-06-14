import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../../interfaces";
import userService from "../../../services/user";

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  switch (req.method) {
    case "POST":
      return await register(req, res);
    default:
      return res.status(400);
  }
}

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, password } = req.body;

  const { data, type, message, code } = await userService.userRegister(
    name,
    email,
    password
  );

  try {
    if (type === "REGISTER_ERROR") {
      return res.status(code).json({ message });
    }
    return res.status(code).json({ message: data });
  } catch (error) {
    return res.status(code).json({ message: error });
  }
};
