import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { listUsersIdService } from "../../services/users/listUsersId.service";

export const listUserIdController = async (req: Request, res: Response)=>{
    const id = req.params.id
    
    const listAnnounceId = await listUsersIdService(id)
    return res.status(200).json(instanceToPlain(listAnnounceId))
}