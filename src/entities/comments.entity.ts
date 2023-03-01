import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, UpdateDateColumn, } from "typeorm";
import { v4 as uuid } from "uuid";
import { Answers } from "./answers.entity";
import { User } from "./user.entity";
import { Vehicles } from "./vehicles.entity";
@Entity("comments")
export class Comments {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({length: 500})
    text: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => Answers, answers => answers.comments, { eager: true })
    answers: Answers[];

    @ManyToOne(() => User, user => user.comments)
    user: User


    @ManyToOne(() => Vehicles, vehicles => vehicles.comments)
    vehicles: Vehicles

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}
