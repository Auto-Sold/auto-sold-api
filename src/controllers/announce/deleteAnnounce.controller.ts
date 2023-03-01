import {Response, Request} from "express"
import deleteAnnounceService from "../../services/announce/deleteAnnounce.service"

const deleteAnnounceController  = async( req: Request, res: Response ) => {
    
        const  { id } = req.params

        const announceDelete = await deleteAnnounceService(id)
        
        return res.status(204).json({message: "Announce Deleted"})     
   
}
export default deleteAnnounceController