import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

export const deleteUserService = async ( id: string ):Promise<void>=>{
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id})

    if(!id){
        throw new AppError("user not Found", 404)
    }
    if(!user){
        throw new AppError("user not found", 404)
    }

    if(!user.isActive){
        throw new AppError("user not found", 404)
    }
    
    await userRepository.save({
        id: user.id,
        isActive: user.isActive
    })
}