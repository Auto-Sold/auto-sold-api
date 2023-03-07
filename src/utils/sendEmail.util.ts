import { createTransport } from "nodemailer";
import { IEmailRequest } from "../interfaces/email";
import "dotenv/config"
import { AppError } from "../errors/appError";
// ================================================Imports================================================

const sendEmail = async ({to, subject, text}:IEmailRequest) => {
    // const transporter = createTransport({
    //     host: 'smtp-mail.outlook.com',
    //     port: 587,
    //     secure: false,
    //     auth:{
    //         user: "autosoldkenzie@outlook.pt",
    //         pass: "Senha123@"
    //     }
    // })
    const transporter = createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "88c958de66e91b",
          pass: "bdcd8a9fa47c06"
        }
      });
    await transporter.sendMail({
        from: "autosoldkenzie@outlook.pt",
        to: to,
        subject: subject,
        html: text
    }).then( () => {
        console.log("Email sent successfully");
    }
    ).catch((err) => {
        console.log("q2");
        console.log(err);
        
        throw new AppError("Error sending email, try again later", 500)
    })
}
export default sendEmail