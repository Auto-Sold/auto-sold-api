import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import createCommentService from "../../services/comments/comments.service";

const addCommentToVehicleController = async (req: Request, res: Response) => {
  try {
    const { id: vehicleId } = req.params;
    const { text } = req.body;

    const comment = await createCommentService({ text }, vehicleId);

    return res.status(201).send(comment);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};  

export default addCommentToVehicleController;