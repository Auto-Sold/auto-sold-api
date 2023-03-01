import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import createAnnounceService from "../../services/announce/createAnnounce.service";

const createAnnounceController = async (req: Request, res: Response) => {
    try {
        const {
            announceType,
            title,
            year,
            km,
            price,
            description,
            vehicleType,
            image
           
        } = req.body

        // const { id } = req.user

        const newAnnounce = await createAnnounceService({
            announceType,
            title,
            year,
            km,
            price,
            description,
            vehicleType,
            image,
        
        }, req.user?.id)

        return res.status(201).send(newAnnounce)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).send({
                error: error.name,
                message: error.message
            })
        }
    }
}

export default createAnnounceController