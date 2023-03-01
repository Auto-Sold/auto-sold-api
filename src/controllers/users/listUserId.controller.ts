import { Request, Response } from "express";
import { listUsersIdService } from "../../services/users/listUsersId.service";

export const listUserIdController = (req: Request, res: Response)=>{
    const id = req.params.id
    
    const listAnnounceId = listUsersIdService(id)
    return res.status(200).json(listAnnounceId)
}