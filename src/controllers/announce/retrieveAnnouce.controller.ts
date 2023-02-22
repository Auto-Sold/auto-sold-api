import { Request, Response} from "express";
import retrieveAnnouncementsService from "../../services/announce/retrieveAnnounce.service";

const retrieveAnnounceController =async (req:Request, res: Response) => {
    const userId = req.params.id;
    const listAnnounce = await retrieveAnnouncementsService(userId);
    return res.status(201).json(listAnnounce);
}

export default retrieveAnnounceController