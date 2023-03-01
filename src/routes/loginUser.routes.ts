import { Router } from "express";

import { userLoginController } from "../controllers/sessions/userLogin.controller";

export const loginRouter = Router();



export const loginRoutes = () => {
    loginRouter.post("", userLoginController)

    return loginRouter
}
