import { Router } from "express";
import createCommentController from "../controllers/comments/createComments.controller";
import updateCommentController from "../controllers/comments/editComments.controller";
import listCommentsController from "../controllers/comments/listComments.controller";
import retrieveAnnounceController from "../controllers/comments/retrieveAnnounceComments.controller";
import {ensureauthToken} from "../middlewares/ensureAuthToken.middleware";

const routes = Router()

export const commentsRoutes = () => {
    routes.post("/:id",ensureauthToken, createCommentController)
    routes.get("", listCommentsController )
    routes.get("/:id", retrieveAnnounceController )
    routes.patch("/:id", ensureauthToken, updateCommentController)
    // routes.delete( "/:id", ensureauthToken, )

    return routes
}