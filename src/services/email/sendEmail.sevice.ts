import { IEmailRequest } from "../../interfaces/email"
import sendEmail from "../../utils/sendEmail.util"

// ================================================Imports================================================

const sendEmailService =async ({subject,text, to}:IEmailRequest): Promise<void> => {
    await sendEmail({subject,text,to})
}

export default sendEmailService