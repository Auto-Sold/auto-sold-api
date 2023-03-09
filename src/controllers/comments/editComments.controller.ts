import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import  updateCommentById  from "../../services/comments/updateComments.service";

const updateCommentController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    const updatedComment = await updateCommentById(id, text);
    return res.status(200).json(updatedComment);
  } catch (error) {
    console.log(error);

    if (error instanceof AppError) {
      return res.status(400).send({
        error: error.name,
        message: error.message,
      });
    }

    return res.status(500).send({
      error: "Internal Server Error",
      message: "Erro interno no servidor",
    });
  }
};

export default updateCommentController;