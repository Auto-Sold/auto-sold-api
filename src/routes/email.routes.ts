import { Router } from "express";
import sendEmailController from "../controllers/email/email.controller";
import ensureauthToken from "../middlewares/ensureAuthToken.middleware";


const routes = Router()

export const emailRoutes = () =>{

    routes.post("",ensureauthToken, sendEmailController)

    return routes
}


