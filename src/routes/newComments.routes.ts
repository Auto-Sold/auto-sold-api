import { Router } from "express";
import addCommentToVehicleController from "../controllers/comments/createComments.controller";


const routes = Router()

export const createAnnounceRoutes = () => {
    routes.post("/:id", addCommentToVehicleController)

    return routes
}