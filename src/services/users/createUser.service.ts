import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";

import { AppError } from "../../errors/appError";
import bcrypt from "bcrypt"
import * as crypto from "crypto"

import { IAddressRequest, IUserRequest } from "../../interfaces/users";
import { Address } from "../../entities/address.entity";

export const createUserService = async ( {completeName, email, telephone, password, cpf, image, bio, dateBirth
}: IUserRequest, address: IAddressRequest ):Promise<User>=>{
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find({relations:{address:true}})

    const emailOrCpfAlreadyExists = users.find((user)=>user.email === email || user.cpf === cpf)
   
    

    const addressRepository = AppDataSource.getRepository(Address)
    const addresses = await addressRepository.find()
    const addres = new Address()
    addres.city = address.city
    addres.complement = address.complement
    addres.number = address.number || addres.number
    addres.state = address.state 
    addres.street = address.street
    addres.zipCode =  address.zipCode

    if (addres.zipCode.split("").length > 8) {
        throw new AppError("Zipcode invalid");
      }
    const alreadyAddress = addresses.find(
        (adr) => adr.zipCode === addres.zipCode
      );
    
    if (alreadyAddress) {
        throw new AppError("Address already exists");
      }

    const addresser = addressRepository.create(addres)
    await addressRepository.save(addres)


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
    user.dateBirth = dateBirth
    user.address = addresser



    userRepository.create(user)
    await userRepository.save(user)

    

    return user
    
}
    

