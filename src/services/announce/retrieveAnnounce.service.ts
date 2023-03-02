import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { Vehicles } from "../../entities/vehicles.entity"
import { AppError } from "../../errors/appError"
// =========================IMPORTS=================================================

const retrieveAnnouncementsService = async (announceId: string): Promise<Vehicles[] | null> =>{
const vehiclesRepository = AppDataSource.getRepository(Vehicles)

const vehicles = await vehiclesRepository.find(
    {relations:{user:true},
    where:{id:announceId}})
if(!vehicles){
    throw new AppError("Announce not found", 404)
}

return vehicles
}


export default retrieveAnnouncementsService