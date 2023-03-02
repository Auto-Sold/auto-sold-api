import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

import { IUserRequest } from "../../interfaces/users";

export const listUserService = async () :Promise<User[]>=>{
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find({relations:{vehicles:true}}) 

    return users
}

 