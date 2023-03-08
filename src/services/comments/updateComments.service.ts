import { Comments } from "../../entities/comments.entity";
import { AppError } from "../../errors/appError";
import AppDataSource from "../../data-source";

export const updateCommentById = async (id: string, commentText: string) => {

  if (!id) {
    throw new AppError("Id não informado.");
  }
  const commentRepository = AppDataSource.getRepository(Comments);

  const comment = await commentRepository.findOne({
    where: { id: id },
  });

  if (!comment) {
    throw new AppError(`Comentário com id '${id}' não encontrado.`);
  }
  comment.text = commentText;

  await commentRepository.save(comment);

  return comment;
};
