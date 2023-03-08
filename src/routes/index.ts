import { Express } from "express";
import { announceRoutes } from "./announce.routes";
import { answersRoutes } from "./answers.routes";
import { commentsRoutes } from "./comments.routes";
import {emailRoutes} from "./email.routes";
import { loginRoutes } from "./loginUser.routes";
import { userRoutes } from "./user.routes";


export const appRoutes = (app: Express) => {
    app.use("/users", userRoutes())
    app.use("/announce", announceRoutes())
    app.use("/email", emailRoutes())
    app.use("/login", loginRoutes())
    app.use("/comments", commentsRoutes())
    app.use("/answers",answersRoutes())
}