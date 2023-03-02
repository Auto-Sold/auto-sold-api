import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import sendEmail from "../../utils/sendEmail.util"
import * as crypto from "crypto"
import * as bcrypt from "bcrypt"
import { IEmailRequest } from "../../interfaces/email"
// ================================================Imports================================================

const resetUserPasswordSerivce =async (newPassword:string,token:string): Promise<void> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {tokenResetPassword: token}
    })
    if (!user) {
        throw new AppError("User not found")
        
    }
    
    const hashPassword = bcrypt.hashSync(newPassword,10)

    await userRepository.update({id: user.id},{
        tokenResetPassword: "",
        password: hashPassword,
    })

 
}
    
export default resetUserPasswordSerivce