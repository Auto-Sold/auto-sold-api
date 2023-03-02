import { Router } from "express";
import createAnnounceController from "../controllers/announce/createAnnounce.controller";
import deleteAnnounceController from "../controllers/announce/deleteAnnounce.controller";
import listAnnounceController from "../controllers/announce/listAnnounce.controller";
import {ensureauthToken} from "../middlewares/ensureAuthToken.middleware";

const routes = Router()

export const announceRoutes = () => {
    routes.post( "", ensureauthToken, createAnnounceController )
    routes.get("", ensureauthToken,listAnnounceController)
    routes.delete("/:id", ensureauthToken, deleteAnnounceController)
    // routes.get("/:id", ensureauthToken,)
    // routes.patch("/:id", ensureauthToken,)

    return routes
}