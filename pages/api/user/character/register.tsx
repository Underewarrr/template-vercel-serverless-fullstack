import type { NextApiRequest, NextApiResponse } from "next";
import playerService from "../../../../services/player";

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      return await createPlayer(req, res);
    default:
      return res.status(400);
  }
}

const createPlayer = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, sex, account_id } = req.body;

  try {
    const { data, type, message, code } = await playerService.playerCreate(
      name,
      sex,
      account_id
    );
    
    return res.status(code).json({ message, data });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
