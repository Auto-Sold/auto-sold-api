import { AppError } from '../../errors/appError'
import AppDataSource from '../../data-source'
import { Vehicles } from '../../entities/vehicles.entity'
import { Comments } from '../../entities/comments.entity'

const createCommentService = async (
  commentRequest: any,
  vehicleId: string
) => {
  const { text } = commentRequest

  const vehicleRepository = AppDataSource.getRepository(Vehicles)
  const commentRepository = AppDataSource.getRepository(Comments)

  const vehicle = await vehicleRepository.findOne({
    where: { id: vehicleId },
    relations: ['comments'],
  })

  if (!vehicle) {
    throw new AppError('Vehicle not found', 404)
  }

  const comment = commentRepository.create({
    text,
    vehicles: vehicle,
  })

  await commentRepository.save(comment)

  vehicle.comments = [...vehicle.comments, comment]

  await vehicleRepository.save(vehicle)

  return comment
}

export default createCommentService