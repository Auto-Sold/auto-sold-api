import { Router } from "express";
import ensureauthToken from "../middlewares/ensureAuthToken.middleware";

import { listUserIdController } from "../controllers/users/listUserId.controller";
import { createUserController } from "../controllers/users/createUser.controller";
import { deleteUserController } from "../controllers/users/deleteUser.controller";
import { listUserController } from "../controllers/users/listUser.controller";
import { retrieveUserController } from "../controllers/users/retriveUser.controller";

const routes = Router()

export const userRoutes = () => {
    routes.post("", createUserController)
    routes.get("",listUserController, ensureauthToken,)
    routes.delete("/:id",deleteUserController, ensureauthToken,)
    routes.get("/:id",listUserIdController)
    routes.patch("/:id",retrieveUserController, ensureauthToken,)

    return routes
}