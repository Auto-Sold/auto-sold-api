import { DataSource } from "typeorm";
import "dotenv/config"
import { Vehicles } from "./entities/vehicles.entity";
import { User } from "./entities/user.entity";
import { Comments } from "./entities/comments.entity";
import { Answers } from "./entities/answers.entity";
import { vehiclesImages1677680197402 } from "./migrations/1677680197402-vehiclesImages";
import { VehiclesImages } from "./entities/vehiclesImages.entity";

const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test" ?
        {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: ["src/entities/*.ts"]
        } :
        {
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            // password: process.env.DB_PASSWORD,
            password: "josetobias123",
            database: "autosold",
            logging: true,
            synchronize: true,
            entities: [Vehicles, User, Comments, Answers, VehiclesImages],
            migrations: [vehiclesImages1677680197402]
        }
)

export default AppDataSource