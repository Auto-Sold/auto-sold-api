import {Response, Request} from "express"
import deleteAnnounceService from "../../services/announce/deleteAnnounce.service"

const deleteAnnounceController  = async( req: Request, res: Response ) => {
    try {
        const  { id } = req.params

        const announceDelete = await deleteAnnounceService(id)
        
        return res.status(204).json({message: "Announce Deleted"})     
    } catch ( error ) {
        if(error instanceof Error) {
            return res.status(400).send({
                error: error.name,
                message: error.message
            })
        }
    }
}
export default deleteAnnounceController