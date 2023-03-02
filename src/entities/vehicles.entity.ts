
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, UpdateDateColumn, OneToMany } from "typeorm";
import { VehiclesImages } from "./vehiclesImages.entity";
import { v4 as uuid } from "uuid";
import { User } from "./user.entity";
import { Comments } from "./comments.entity";



@Entity("vehicles")
export class Vehicles {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column()
    announceType: string;

    @Column({ length: 255 })
    title: string;

    @Column()
    year: string;

    @Column({ type: "int" })
    km: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    price: number;

    @Column({ type: "text", nullable: true })
    description: string;

    @Column()
    vehicleType: string;

    @Column()
    image: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({ nullable: true })
    userId: string;

    @ManyToOne(() => User)
    user: User[]

    @Column({ nullable: true })
    vehiclesImagesId: string;

    @ManyToOne(() => VehiclesImages, vehiclesImages => vehiclesImages.vehicle, { eager: true })
    vehiclesImages: VehiclesImages[];


    @OneToMany(() => Comments, comments => comments.vehicles, { eager: true })
    comments: Comments

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}
