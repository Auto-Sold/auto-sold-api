import { Request, Response } from "express";
import { deleteUserService } from "../../services/users/deleteUser.service";

export const deleteUserController = async (req:Request, res: Response)=>{
    const id = req.params.id

    const userDeleted = await deleteUserService(id)
    return res.status(204).json({message: "User Deleted"})
}