import { Request, Response } from "express";
import { deleteUserService } from "../../services/users/deleteUser.service";
import sendResetUserPasswordSerivce from "../../services/users/sendResetUserPassowrd.service";

export const sendResetPasswordUserController = async (req:Request, res: Response)=>{
    const {email}= req.body
    const host = req.get('host');
    const protocol = req.protocol
    await sendResetUserPasswordSerivce(email, protocol, host)
    return res.json({
        message: "Token has been sended successfully"
    })
}

