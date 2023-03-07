import AppDataSource from "../../data-source"
import { Vehicles } from "../../entities/vehicles.entity"
import { User } from "../../entities/user.entity"
// =========================IMPORTS=================================================

const listAnnouncementsService =async (idSeller:string | undefined): Promise <Vehicles[]> => {
    const vehiclesRepository = AppDataSource.getRepository(Vehicles)
    if(idSeller){

        const vehicles = await vehiclesRepository.find({
            where:{userId:idSeller},
            relations:{user:true}
        })
        return vehicles
    }
    
    const vehicles = await vehiclesRepository.find({relations:{user:true}})
    return vehicles
}
export default listAnnouncementsService