import { Router } from "express";
import ensureauthToken from "../middlewares/ensureAuthToken.middleware";

const routes = Router()

export const userRoutes = () => {
    routes.post("",)
    routes.get("", ensureauthToken,)
    routes.delete("/:id", ensureauthToken,)
    routes.get("/:id", ensureauthToken,)
    routes.patch("/:id", ensureauthToken,)

    return routes
}