import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { Vehicles } from "../../entities/vehicles.entity"
import { AppError } from "../../errors/appError"
// =========================IMPORTS=================================================

const retrieveAnnouncementsService = async (userId: string): Promise<Vehicles[] | null> =>{
const vehiclesRepository = AppDataSource.getRepository(Vehicles)
const userRepository = AppDataSource.getRepository(User)
const findUser = await userRepository.findOneBy({id: userId})
if (!findUser){
    throw new AppError("Announcer not found", 400)
}
const vehicles = await vehiclesRepository.findBy({user : findUser})

return vehicles
}


export default retrieveAnnouncementsService