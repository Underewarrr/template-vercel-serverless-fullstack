import type { NextApiRequest, NextApiResponse } from "next";
import playerService from "../../../../services/player";

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      return await getPlayer(req, res);
    default:
      return res.status(400);
  }
}

const getPlayer = async (req: NextApiRequest, res: NextApiResponse) => {
  const {   
    name
    } = req.body;

  const { data, type, message, code } = await playerService.playerGetByName(name);

  try {
    if (type === "FIND_ERROR") {
      return res.status(code).json({ message });
    }
    return res.status(code).json({ data, message });
  } catch (error) {
    return res.status(code).json({ error, message });
  }
};
