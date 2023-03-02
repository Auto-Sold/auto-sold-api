import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const ensureauthToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]
        console.log(token)

        if (!token) {
            return res.status(401).json({ message: "Missing Authorization Token." })
        }

        jwt.verify(token as string, String(process.env.SECRET_KEY) , (err: any, decoded: any) => {
            console.log(err)
            req.user = {
                id: decoded.id,
                isActive: decoded.isActive,
                email: decoded.email
            }
            return next()
        }
    )
    } catch (error) {
        console.log(error)
        return res.status(401).json({ message: "Invalid Token" })
    }
}

