import { Request, Response} from "express";
import retrieveAnnouncementsService from "../../services/announce/retrieveAnnounce.service";

// =========================IMPORTS=================================================

const retrieveAnnounceController =async (req:Request, res: Response) => {
    const announceId = req.params.id;
    const listAnnounce = await retrieveAnnouncementsService(announceId);
    return res.status(201).json(listAnnounce);
}

export default retrieveAnnounceController