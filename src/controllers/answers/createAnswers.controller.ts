import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import createAnswerservice from "../../services/answers/createAnswers.service";

const createAnswerController = async (req: Request, res: Response) => {
  try {
    const   commentId = req.params.id;
    const   text  = req.body.text;
    const   user = req.user.id;

    const answer = await createAnswerservice( text , commentId, user);

    return res.status(201).send(answer);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};  

export default createAnswerController;