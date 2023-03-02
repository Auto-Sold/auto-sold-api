import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import sendEmail from "../../utils/sendEmail.util"
import * as crypto from "crypto"
import { IEmailRequest } from "../../interfaces/email"
// ================================================Imports================================================

const sendResetUserPasswordSerivce =async (email:string, protocol: string, host: string|undefined): Promise<void> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {email: email}
    })
    if (!user) {
        throw new AppError("User not found")
        
    }
    const resetPasswordToken = crypto.randomBytes(4).toString("hex")

    await userRepository.update({id: user.id},{
        tokenResetPassword: resetPasswordToken
    })

    const emailData: IEmailRequest = {
        subject: "Reset Password",
        text: `<h1>E-mail de redefinição de senha</h1>
        <h3>Olá, ${user.completeName}, recebemos seu pedido de mudança de senha, caso não seja você entre em contato com a Auto Sold</h3>
        <h3>Caso tenha feito o pedido de redefinição de senha, acesse o link: ${protocol}://${host}/users/password/${resetPasswordToken}</h3>
        `,
        to: user.email
    } 

    await sendEmail(emailData)
}
    
export default sendResetUserPasswordSerivce