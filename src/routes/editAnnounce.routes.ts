import { Router } from "express";
import updateAnnounceController from "../controllers/editAnnounce/editAnnounce.controller";


const routes = Router()

export const editAnnounceRoutes = () => {
    routes.patch( "/:id", updateAnnounceController)
    
    return routes
}