import { Request, Response } from "express";
import updateAnnounce from "../../services/editAnnounce/editAnnounce.service";


const updateAnnounceController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const updatedAnnounce = await updateAnnounce(Number(id), data);
    res.status(200).json(updatedAnnounce);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default updateAnnounceController;