import { Request, Response} from "express";
import listAnswersService from "../../services/answers/listAnswers.service";


// =========================IMPORTS=================================================

const listAnswersController =async (req:Request, res: Response) => {
    
    const listAnswers = await listAnswersService();
    return res.status(201).json(listAnswers);
}

export default listAnswersController