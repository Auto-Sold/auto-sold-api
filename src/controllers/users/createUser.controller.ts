import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IUserRequest } from "../../interfaces/users";
import { createUserService } from "../../services/users/createUser.service";

export const createUserController = async (req: Request, res: Response)=>{
    const {
        completeName,
        email,
        telephone,
        password,
        cpf,
        image,
        bio,
        }:IUserRequest = req.body
        
        const user = await createUserService({completeName, email, telephone, password, cpf, image, bio})
        return res.status(201).json(instanceToPlain(user))
}