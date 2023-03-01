import { createTransport } from "nodemailer";
import { IEmailRequest } from "../interfaces/email";
import "dotenv/config"
import { AppError } from "../errors/appError";
// ================================================Imports================================================

const sendEmail = async ({to, subject, text}:IEmailRequest) => {
    const transporter = createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        auth:{
            user: "autosoldkenzie@outlook.pt",
            pass: "Senha123@"
        }
    })
    await transporter.sendMail({
        from: "autosoldkenzie@outlook.pt",
        to: to,
        subject: subject,
        text: text
    }).then( () => {
        console.log("Email sent successfully");
    }
    ).catch((err) => {
        throw new AppError("Error sending email, try again later", 500)
    })
}
export default sendEmail