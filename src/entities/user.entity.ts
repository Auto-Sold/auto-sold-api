import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToOne, PrimaryColumn, OneToMany, UpdateDateColumn, JoinColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { Answers } from "./answers.entity";
import { Comments } from "./comments.entity";
import { Vehicles } from "./vehicles.entity";
import { Address } from "./address.entity";

@Entity("user")
export class User {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({ length: 225, nullable: false })
    completeName: string

    @Column({ length: 100, nullable: false })
    email: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({ length: 15, nullable: false })
    telephone: string

    @Column({ length: 100, nullable: false })
    @Exclude()
    password: string

    @Column({ nullable: false })
    cpf: string

    @Column({ nullable: true })
    image: string

    @Column({ nullable: true })
    bio: string

    @Column({nullable: true })
    dateBirth: string

    @Column({ nullable: true })
    tokenResetPassword: string
  
    @Column({ default: true })
    isActive: boolean;
    
    @Column({ default:false })
    isSeller: boolean;

    @OneToMany(() => Vehicles, vehicles => vehicles.user, { eager: true })
    vehicles: Vehicles[]

    @OneToMany(() => Comments, comments => comments.user)
    comments: Comments[]

    @OneToMany(() => Answers, answers => answers.user)
    answers: Answers[]

    @OneToOne(()=>Address,  { eager: true })
    @JoinColumn()
    address: Address
}