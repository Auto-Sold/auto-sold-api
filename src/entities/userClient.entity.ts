import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToOne, PrimaryColumn } from "typeorm";


@Entity("userClient")
export class userClient{

    @PrimaryColumn("uuid")
    readonly id: string

    @Column({length: 225, nullable: false})
    completeName: string

    @Column({length: 100, nullable: false})
    email: string

    @CreateDateColumn()
    createdAt: Date

    @Column({length: 15, nullable: false})
    telephone: string

    @Column({length: 100, nullable: false})
    password: string

    @Column({length: 11, nullable: false})
    cpf: number

}