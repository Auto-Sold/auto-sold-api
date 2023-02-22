import { DataSource } from "typeorm";
import "dotenv/config"
import { Vehicles } from "./entities/vehicles.entity";
import { VehiclesImages } from "./entities/vehiclesImages.entity";
import { UserSeller } from "./entities/userSeller.entity";
import { userClient } from "./entities/userClient.entity";
// import { User } from "./entities/user.entity";
import { initial1677079536785} from "./migrations/1677079536785-initial"

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
            entities: [Vehicles, VehiclesImages, UserSeller, userClient],
            migrations: [initial1677079536785]
            // entities: [User],
            // migrations: [initial1676095782228]
        }
)

export default AppDataSource