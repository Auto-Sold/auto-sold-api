import { Router } from "express";
import createAnswerController from "../controllers/answers/createAnswers.controller";
import createCommentController from "../controllers/comments/createComments.controller";
import listCommentsController from "../controllers/comments/listComments.controller";
import retrieveAnnounceController from "../controllers/comments/retrieveAnnounceComments.controller";

import {ensureauthToken} from "../middlewares/ensureAuthToken.middleware";

const routes = Router()

export const answersRoutes = () => {
    routes.post("/:id",ensureauthToken, createAnswerController )
    routes.get("",  )
    // routes.get("/:id", retrieveAnnounceController )
    // routes.delete( "/:id", ensureauthToken, )
    // routes.patch("/:id", ensureauthToken, )

    return routes
}