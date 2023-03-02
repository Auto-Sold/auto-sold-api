import AppDataSource from "../../data-source"
import { Vehicles } from "../../entities/vehicles.entity"
import { User } from "../../entities/user.entity"
// =========================IMPORTS=================================================

const listAnnouncementsService =async (): Promise <Vehicles[]> => {
    const vehiclesRepository = AppDataSource.getRepository(Vehicles)
    const vehicles = await vehiclesRepository.find({relations:{user:true}})

    return vehicles
}
export default listAnnouncementsService