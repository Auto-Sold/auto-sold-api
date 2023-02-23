import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, UpdateDateColumn, } from "typeorm";
import { v4 as uuid } from "uuid";
import { Comments } from "./comments.entity";
import { User } from "./user.entity";

@Entity("answers")
export class Answers {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({length: 500})
    text: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => User, user => user.answers)
    user: User

    @ManyToOne(() =>  Comments, comments => comments.answers)
    comments: Comments
    
    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}
