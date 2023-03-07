import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, UpdateDateColumn, OneToOne, } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("Address")
export class Address {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({length: 8})
    zipCode:string

    @Column({length:100})
    state:string

    @Column({length:100})
    city: string
    
    @Column({length:100})
    street: string   

    @Column()
    number: string

    @Column({length:100})
    complement: string
   
    
    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}