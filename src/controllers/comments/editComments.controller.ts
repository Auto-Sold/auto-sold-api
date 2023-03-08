import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { updateCommentById } from "../../services/comments/updateComments.service";

const updateCommentController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { commentText } = req.body;

  try {
    const updatedComment = await updateCommentById(id, commentText);
    res.status(200).json(updatedComment);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default updateCommentController;