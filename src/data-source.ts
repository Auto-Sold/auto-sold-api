import { DataSource } from "typeorm";
import "dotenv/config"
import { Vehicles } from "./entities/vehicles.entity";
import { User } from "./entities/user.entity";

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
            logging: true,
            synchronize: true,
            entities: [Vehicles, User],
            migrations: []
        }
)

export default AppDataSource