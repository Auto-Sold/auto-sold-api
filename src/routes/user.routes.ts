import { Router } from "express";
import {ensureauthToken} from "../middlewares/ensureAuthToken.middleware";

import { listUserIdController } from "../controllers/users/listUserId.controller";
import { createUserController } from "../controllers/users/createUser.controller";
import { deleteUserController } from "../controllers/users/deleteUser.controller";
import { listUserController } from "../controllers/users/listUser.controller";
import { retrieveUserController } from "../controllers/users/retriveUser.controller";

const routes = Router()

export const userRoutes = () => {
    routes.post("", createUserController)
    routes.get("", ensureauthToken, listUserController)
    routes.delete("/:id", ensureauthToken, deleteUserController )
    routes.get("/:id", ensureauthToken, listUserIdController)
    routes.patch("/:id", ensureauthToken, retrieveUserController )

    return routes
}