import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
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

    @ManyToOne(() => UserSeller, userSeller => userSeller.cars)
        userSeller: UserSeller
        
    @Column({ type: "int" })
        km: number

    @Column({ type: "float", precision: 9, scale: 2 })
        value: number;

    @Column({ type: "text", nullable: true })
        description: string;
    
    }
