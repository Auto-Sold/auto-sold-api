import { Comments } from "../../entities/comments.entity";
import { AppError } from "../../errors/appError";
import AppDataSource from "../../data-source";

const updateCommentById = async (id: string, text: string) => {
  if (!id) {
    throw new AppError("Id não informado.");
  }

  const commentRepository = AppDataSource.getRepository(Comments);

  const comment = await commentRepository.findOne({ where: { id } });

  if (!comment) {
    throw new AppError(`Comentário com id '${id}' não encontrado.`);
  }

  comment.text = text;

  await commentRepository.save(comment);

  return comment;
};

export default updateCommentById
