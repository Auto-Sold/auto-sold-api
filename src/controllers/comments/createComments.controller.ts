import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import createCommentService from "../../services/comments/createComments.service";

const createCommentController = async (req: Request, res: Response) => {
  try {
    const  vehicleId = req.params.id;
    const  text  = req.body.text;

    const comment = await createCommentService( text , vehicleId);

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

export default createCommentController;