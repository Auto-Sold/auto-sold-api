import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

import { IUserUpdate } from "../../interfaces/users";

export const retrieveUserService = async (id:string, data: IUserUpdate) => {
    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOneBy({id})
    
    const key = Object.keys(data)

    if(!findUser){
        throw new AppError("user not found", 404)
    }
    if(key.includes("isActivr") || key.includes("id")){
        throw new AppError("unauthorized",401)
    }

    await userRepository.update(id,{
        completeName: data.completeName? data.completeName : findUser.completeName,
        email: data.email? data.email : findUser.email,
        telephone: data.telephone? data.telephone : findUser.telephone,
        password: data.password? await hash(data.password, 10 ) : findUser.password,
        cpf: data.cpf? data.cpf : findUser.cpf,
        image: data.image? data.image : findUser.image,
        bio: data.bio? data.bio : findUser.bio
    })
    const user = userRepository.findOneBy({id})
    return user!
}