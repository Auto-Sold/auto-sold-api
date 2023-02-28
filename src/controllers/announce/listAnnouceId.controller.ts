import { Request, Response } from "express";
import { listAnnounceIdService } from "../../services/announce/listAnnouceId.service";

export const listAnnounceId = (req: Request, res: Response)=>{
    const id = req.params.id
    
    const listAnnounceId = listAnnounceIdService(id)
    return res.status(200).json(listAnnounceId)
}