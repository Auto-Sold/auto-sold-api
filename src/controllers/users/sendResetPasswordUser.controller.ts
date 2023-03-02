import { Request, Response } from "express";
import { deleteUserService } from "../../services/users/deleteUser.service";

export const sendResetPasswordUserController = async (req:Request, res: Response)=>{
    const {email}= req.body
    const host = req.get('host');
    const protocol = req.protocol
}

