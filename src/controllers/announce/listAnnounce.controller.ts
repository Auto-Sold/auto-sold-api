import { query, Request, Response} from "express";
import listAnnouncementsService from "../../services/announce/listAnnounce.service";


// =========================IMPORTS=================================================

const listAnnounceController =async (req:Request, res: Response) => {
    
    let idSeller: string | undefined = undefined
    if (req.query.user){
    idSeller = req.query.user.toString()
    }
    const listAnnounce = await listAnnouncementsService(idSeller);
    return res.status(200).json(listAnnounce);
}

export default listAnnounceController