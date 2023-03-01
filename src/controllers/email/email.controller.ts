import { Request, Response } from "express";
import { IEmailRequest } from "../../interfaces/email";
import sendEmailService from "../../services/email/sendEmail.sevice";

// ================================================Imports================================================


const sendEmailController = async (req:Request, res:Response) => {
    const {subject, to, text}: IEmailRequest = req.body;
    await sendEmailService({subject, to, text})
    return res.json({
        message: "Email sent successfully"
    })
}

export default sendEmailController