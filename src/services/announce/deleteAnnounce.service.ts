import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { Vehicles } from "../../entities/vehicles.entity";

const deleteAnnounceService = async ( id: string)=>{
    const vehicleRepository = AppDataSource.getRepository(Vehicles)
    const vehicle = await vehicleRepository.findOneBy({ id })

    if (!id){
        throw new AppError( " Vehicle not found ",404 )
    }
    if(!vehicle){
        throw new AppError( " Vehicle not found ",404 )
    }
    
    await vehicleRepository.delete(id)
}
export default deleteAnnounceService