import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import updateAnnounce from "../../services/editAnnounce/editAnnounce.service";

const updateAnnounceController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const updatedAnnounce = await updateAnnounce(Number(id), data);
    res.status(200).json(updatedAnnounce);
    console.log(data)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default updateAnnounceController;