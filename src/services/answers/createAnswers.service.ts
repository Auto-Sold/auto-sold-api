import { AppError } from '../../errors/appError'
import AppDataSource from '../../data-source'
import { Comments } from '../../entities/comments.entity'
import { User } from '../../entities/user.entity'
import { Answers } from '../../entities/answers.entity'

const createAnswerservice = async (
  text: string,
  commentId: string,
  userId: string  
) => {


  const userRepository = AppDataSource.getRepository(User)
  const answerRepository = AppDataSource.getRepository(Answers)
  const commentsRepository = AppDataSource.getRepository(Comments)

  const findUser = await userRepository.findOneBy({id: userId})

  const findComment = await commentsRepository.findOneBy({ id: commentId })
  
  
  if (!findUser) {
    throw new AppError('Login to answer', 404)
  }
  if (!findComment) {
    throw new AppError('Comment not found', 404)
  }
  const answers = new Answers()
  answers.text = text
  answers.comments = findComment
  answers.user = findUser 

  answerRepository.create(answers)


  await answerRepository.save(answers)

  findComment.answers = [...findComment.answers, answers]

  await commentsRepository.update(findComment, {id:commentId})

  return answers
}

export default createAnswerservice