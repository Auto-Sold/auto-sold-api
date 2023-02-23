import AppDataSource from "../../data-source"
import { Vehicles } from "../../entities/vehicles.entity"

// =========================IMPORTS=================================================

const listAnnouncementsService =async (): Promise <Vehicles[]> => {
    const vehiclesRepository = AppDataSource.getRepository(Vehicles)
    const vehicles = await vehiclesRepository.find()

    return vehicles
}
export default listAnnouncementsService