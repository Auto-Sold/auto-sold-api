import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";
import { UserSeller } from "./userSeller.entity";


@Entity()
    export class Cars{
    
    @PrimaryGeneratedColumn()
        readonly id: string

    @Column({length:255, nullable: false})
        name: string
    
    @Column({length:100, nullable: false})
        mark: string

    @CreateDateColumn()
        createdAta: Date

    @Column({length: 15})
        telephone: string

    @OneToMany(type => UserSeller, userSeller=> userSeller.carsId)
        userSellersId: UserSeller[]     
    }
