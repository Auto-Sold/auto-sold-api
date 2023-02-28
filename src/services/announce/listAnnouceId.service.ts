import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";


export const listAnnounceIdService = async ( id:string )=>{

    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find({relations:{vehicles:true}})

    const userId = users.find( element => element.id == id )
        
    return userId
}