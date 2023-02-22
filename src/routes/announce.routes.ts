import { Router } from "express";
import createAnnounceController from "../controllers/announce/createAnnounce.controller";
import ensureauthToken from "../middlewares/ensureAuthToken.middleware";

const routes = Router()

export const announceRoutes = () => {
    routes.post("", createAnnounceController)
    // routes.get("", ensureauthToken,)
    // routes.delete("/:id", ensureauthToken,)
    // routes.get("/:id", ensureauthToken,)
    // routes.patch("/:id", ensureauthToken,)

    return routes
}