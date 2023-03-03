import AppDataSource from "../../data-source"
import { Comments } from "../../entities/comments.entity"
// =========================IMPORTS=================================================

const retrieveCommentsAnnounceService =async (vehicleId: string): Promise <any> => {
    const commentsRepository = AppDataSource.getRepository(Comments)
    const comments = await commentsRepository.find(
        {relations:{vehicles:true}}
       )
    const result = comments.find((comment) => comment.vehicles.id === vehicleId)
        console.log(result);
        
    return result
}
export default retrieveCommentsAnnounceService