import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./user.entity";

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

    @Column({ nullable: true })
    galeryImage1: string;

    @Column({ nullable: true })
    galeryImage2: string;

    @Column({ nullable: true })
    galeryImage3: string;

    @Column({ nullable: true })
    galeryImage4: string;

    @Column({ nullable: true })
    galeryImage5: string;

    @Column({ nullable: true })
    galeryImage6: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    userId: string;

    @ManyToOne(() => User)
    user: User[]

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}
