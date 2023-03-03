import { Request, Response} from "express";
import listCommentsService from "../../services/comments/listComments.service";


// =========================IMPORTS=================================================

const listCommentsController =async (req:Request, res: Response) => {
    
    const listComments = await listCommentsService();
    return res.status(201).json(listComments);
}

export default listCommentsController