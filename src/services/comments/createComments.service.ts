import { AppError } from '../../errors/appError'
import AppDataSource from '../../data-source'
import { Vehicles } from '../../entities/vehicles.entity'
import { Comments } from '../../entities/comments.entity'

const createCommentService = async (
  text: string,
  vehicleId: string, 
) => {

  const vehicleRepository = AppDataSource.getRepository(Vehicles)
  const commentRepository = AppDataSource.getRepository(Comments)

  const vehicle = await vehicleRepository.findOne({
    where: { id: vehicleId },
    relations: {comments: true},
  })

  if (!vehicle) {
    throw new AppError('Vehicle not found', 404)
  }
  const comments = new Comments()
  comments.text = text
  comments.vehicles = vehicle

  commentRepository.create(comments)
  await commentRepository.save(comments)

  // vehicle.comments = [...vehicle.comments, comment]

  // await vehicleRepository.save(vehicle)

  return comments
}

export default createCommentService