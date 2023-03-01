import { Router } from "express";
import createAnnounceController from "../controllers/announce/createAnnounce.controller";
import deleteAnnounceController from "../controllers/announce/deleteAnnounce.controller";
import ensureauthToken from "../middlewares/ensureAuthToken.middleware";

const routes = Router()

export const announceRoutes = () => {
    routes.post( "", createAnnounceController )
    routes.delete( "/:id", deleteAnnounceController )
    
    // routes.get("", ensureauthToken,)
    // routes.delete("/:id", ensureauthToken,)
    // routes.get("/:id", ensureauthToken,)
    // routes.patch("/:id", ensureauthToken,)

    return routes
}