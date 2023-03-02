import { userLoginController } from "../../controllers/sessions/userLogin.controller";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Vehicles } from "../../entities/vehicles.entity";
import { AppError } from "../../errors/appError";

export const deleteUserService = async ( id: string ):Promise<void>=>{
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id})

    const vehiclesRepository = AppDataSource.getRepository(Vehicles)
    const vehicles = await vehiclesRepository.find()

    const arrayUsers = user?.vehicles
    const idVheicles =  vehicles.forEach((elem, i, array)=>{

        const vehhicle = elem.id
        arrayUsers?.forEach(async (elem)=>{

           const id = elem.id
           if(vehhicle === id){
                await vehiclesRepository.delete(id)
           }
           
        })
    
    })   

    if(!id){
        throw new AppError("user not Found", 404)
    }
    if(!user){
        throw new AppError("user not found", 404)
    }

    if(!user.isActive){
        throw new AppError("user not found", 404)
    }

    
    await userRepository.delete(id)
}