import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";

import { AppError } from "../../errors/appError";
import bcrypt from "bcrypt"
import * as crypto from "crypto"

import { IUserRequest } from "../../interfaces/users";

export const createUserService = async ( {completeName, email, telephone, password, cpf, image, bio}: IUserRequest ):Promise<User>=>{
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const emailOrCpfAlreadyExists = users.find((user)=>user.email === email || user.cpf === cpf)
   

    if(emailOrCpfAlreadyExists){
        throw new AppError(" User Already exists ")
    }
    const hashPassword = bcrypt.hashSync(password,10)
    const user = new User()
    user.completeName = completeName
    user.email = email
    user.telephone = telephone
    user.password = hashPassword
    user.cpf = cpf
    user.image = image
    user.bio = bio

    userRepository.create(user)
    await userRepository.save(user)

    return user
    
}
    

