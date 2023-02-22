import { Express } from "express";
import { announceRoutes } from "./announce.routes";
import { userRoutes } from "./user.routes";

export const appRoutes = (app: Express) => {
    app.use("/users", userRoutes())
    app.use("/announce", announceRoutes())
}