import { Request, Response } from "express";
import { deleteUserService } from "../../services/users/deleteUser.service";
import resetUserPasswordSerivce from "../../services/users/resetUserPassowrd.service";

export const resetPasswordUserController = async (req:Request, res: Response)=>{
    const {token}= req.params
    
    await resetUserPasswordSerivce(req.body.password, token);
    return res.json({message: "Password changed successfully"})
}

