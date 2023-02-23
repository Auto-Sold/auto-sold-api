import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToOne, PrimaryColumn, OneToMany } from "typeorm";
import { Answers } from "./answers.entity";
import { Comments } from "./comments.entity";
import { Vehicles } from "./vehicles.entity";

@Entity("user")
export class User {

    @PrimaryColumn("uuid")
    readonly id: string

    @Column({ length: 225, nullable: false })
    completeName: string

    @Column({ length: 100, nullable: false })
    email: string

    @CreateDateColumn()
    createdAt: Date

    @Column({ length: 15, nullable: false })
    telephone: string

    @Column({ length: 100, nullable: false })
    password: string

    @Column({ nullable: false })
    cpf: number

    @Column ({ nullable: true})
    image: string

    @OneToMany(() => Vehicles, vehicles => vehicles.user)
    vehicles: Vehicles[]

    @OneToMany(() => Comments, comments => comments.user)
    comments: Comments[]

    @OneToMany(() => Answers, answers => answers.user)
    answers: Answers[]
}