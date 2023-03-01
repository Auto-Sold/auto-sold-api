import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Vehicles } from "./vehicles.entity";
import { v4 as uuid } from "uuid";

@Entity("vehiclesImages")
export class VehiclesImages {

    @PrimaryGeneratedColumn()
    readonly id: string

    @Column({ nullable: false, array: true, default: [] })
    url: string

    @OneToMany(() => Vehicles, vehicles => vehicles.vehiclesImages)
    vehicle: Vehicles[]

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}