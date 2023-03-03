import { Request, Response} from "express";
import listAnnouncementsService from "../../services/announce/listAnnounce.service";


// =========================IMPORTS=================================================

const listAnnounceController =async (req:Request, res: Response) => {
    
    const listAnnounce = await listAnnouncementsService();
    return res.status(200).json(listAnnounce);
}

export default listAnnounceController