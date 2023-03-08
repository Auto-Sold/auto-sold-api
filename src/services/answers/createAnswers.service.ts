import { AppError } from '../../errors/appError'
import AppDataSource from '../../data-source'
import { Vehicles } from '../../entities/vehicles.entity'
import { Comments } from '../../entities/comments.entity'
import { User } from '../../entities/user.entity'
import { Answers } from '../../entities/answers.entity'

const createAnswerservice = async (
  text: string,
  vehicleId: string,
  userId: string  
) => {

  const vehicleRepository = AppDataSource.getRepository(Vehicles)
  const userRepository = AppDataSource.getRepository(User)
  const commentRepository = AppDataSource.getRepository(Answers)

  const findUser = await userRepository.findOneBy({id: userId})

  const vehicle = await vehicleRepository.findOne({
    where: { id: vehicleId },
  })
  if (!findUser) {
    throw new AppError('Login to comment', 404)
  }
  if (!vehicle) {
    throw new AppError('Vehicle not found', 404)
  }
  const answers = new Answers()
  answers.text = text
  answers.comments = vehicle.comments
  answers.user = findUser 

  commentRepository.create(answers)
  await commentRepository.save(answers)

  // vehicle.answers = [...vehicle.answers, comment]

  // await vehicleRepository.save(vehicle)

  return answers
}

export default createAnswerservice