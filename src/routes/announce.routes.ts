import { Router } from "express";
import createAnnounceController from "../controllers/announce/createAnnounce.controller";
import deleteAnnounceController from "../controllers/announce/deleteAnnounce.controller";
import listAnnounceController from "../controllers/announce/listAnnounce.controller";
import retrieveAnnounceController from "../controllers/announce/retrieveAnnouce.controller";
import updateAnnounceController from "../controllers/announce/updateAnnounce.controller";
import ensureauthToken from "../middlewares/ensureAuthToken.middleware";

const routes = Router()

export const announceRoutes = () => {

    routes.post("",ensureauthToken, createAnnounceController)
    routes.get("", ensureauthToken, listAnnounceController)
    routes.get("/:id", ensureauthToken, retrieveAnnounceController)
    routes.delete( "/:id", deleteAnnounceController )
    routes.patch("/:id", ensureauthToken, updateAnnounceController)

    return routes
}