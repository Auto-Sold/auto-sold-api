import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";


export const listUsersIdService = async ( id:string ) :Promise<User> =>{

    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find({relations:{vehicles:true}})

    const userId = users.find( element => element.id == id )
    if(!userId){
        throw new AppError("User not found", 404)
    }

    return userId
}