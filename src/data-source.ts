import { DataSource } from "typeorm";
import "dotenv/config"
import { Vehicles } from "./entities/vehicles.entity";
import { User } from "./entities/user.entity";
import { Comments } from "./entities/comments.entity";
import { Answers } from "./entities/answers.entity";
import { VehiclesImages } from "./entities/vehiclesImages.entity";


import { Address } from "./entities/address.entity";
import { myMigration1678133690526 } from "./migrations/1678133690526-myMigration~";


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
            host: process.env.DB_HOST,
            port: 5432,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB,
            logging: false,
            synchronize: true,

            entities: [Vehicles, User, Comments, Answers, VehiclesImages, Address],
            migrations: [myMigration1678133690526 ]

        }
)

export default AppDataSource