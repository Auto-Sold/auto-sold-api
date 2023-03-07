import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IUserRequest } from "../../interfaces/users";
import { createUserService } from "../../services/users/createUser.service";

export const createUserController = async (req: Request, res: Response)=>{
    const data:IUserRequest = req.body
    const address = req.body.address
        
    const user = await createUserService(data,address)
    return res.status(201).json(instanceToPlain(user))
}