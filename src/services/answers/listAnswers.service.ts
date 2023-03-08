import AppDataSource from "../../data-source"
import { Answers } from "../../entities/answers.entity"
// =========================IMPORTS=================================================

const listAnswersService =async (): Promise <Answers[]> => {
    const answersRepository = AppDataSource.getRepository(Answers)
    const answers = await answersRepository.find(
        {relations:{comments:true }})

    return answers
}
export default listAnswersService