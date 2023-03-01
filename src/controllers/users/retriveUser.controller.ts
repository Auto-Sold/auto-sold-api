import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/users";
import { instanceToPlain } from "class-transformer";
import { retrieveUserService } from "../../services/users/retriveUser.service";

export const retrieveUserController = async (req: Request, res: Response)=>{
    const id = req.params.id
    const data: IUserUpdate = req.body

    const user = await retrieveUserService(id, data)
    res.status(200).json(instanceToPlain({}))

} 