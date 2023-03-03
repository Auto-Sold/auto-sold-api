import { Request, Response} from "express";
import retrieveCommentsAnnounceService from "../../services/comments/retrieveCommentsAnnounce.service";


// =========================IMPORTS=================================================

const retrieveCommentsAnnounceController =async (req:Request, res: Response) => {
    const vehicleId = req.params.id;
    const listComments = await retrieveCommentsAnnounceService(vehicleId);
    return res.status(200).json(listComments);
}

export default retrieveCommentsAnnounceController