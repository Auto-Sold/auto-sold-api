import { AppError } from '../../errors/appError'
import AppDataSource from '../../data-source'
import { Vehicles } from '../../entities/vehicles.entity'
import { Comments } from '../../entities/comments.entity'
import { User } from '../../entities/user.entity'

const createCommentService = async (
  text: string,
  vehicleId: string,
  userId: string  
) => {

  const vehicleRepository = AppDataSource.getRepository(Vehicles)
  const commentRepository = AppDataSource.getRepository(Comments)
  const userRepository = AppDataSource.getRepository(User)
  const findUser = await userRepository.findOneBy({id: userId})

  const vehicle = await vehicleRepository.findOne({
    where: { id: vehicleId },
    relations: {comments: true},
  })
  if (!findUser) {
    throw new AppError('Login to comment', 404)
  }
  if (!vehicle) {
    throw new AppError('Vehicle not found', 404)
  }
  const comments = new Comments()
  comments.text = text
  comments.vehicles = vehicle
  comments.user = findUser 

  commentRepository.create(comments)
  await commentRepository.save(comments)

  // vehicle.comments = [...vehicle.comments, comment]

  // await vehicleRepository.save(vehicle)

  return comments
}

export default createCommentService