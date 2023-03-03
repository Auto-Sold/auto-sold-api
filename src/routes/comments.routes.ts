import { Router } from "express";
import createCommentController from "../controllers/comments/createComments.controller";
import listCommentsController from "../controllers/comments/listComments.controller";

import {ensureauthToken} from "../middlewares/ensureAuthToken.middleware";

const routes = Router()

export const commentsRoutes = () => {
    routes.post("/:id",ensureauthToken, createCommentController)
    routes.get("",ensureauthToken, listCommentsController )
    // routes.get("/:id",ensureauthToken, )
    // routes.delete( "/:id", ensureauthToken, )
    // routes.patch("/:id", ensureauthToken, )

    return routes
}