import AppDataSource from "../../data-source"
import { Comments } from "../../entities/comments.entity"
// =========================IMPORTS=================================================

const listCommentsService =async (): Promise <Comments[]> => {
    const commentsRepository = AppDataSource.getRepository(Comments)
    const comments = await commentsRepository.find(
        {relations:{answers:true, vehicles:true}})

    return comments
}
export default listCommentsService