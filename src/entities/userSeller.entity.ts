import { Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Cars } from "./cars.entity";

import { Purchase } from "./purchase.entity";

@Entity("userSeller")
export class UserSeller{

    @PrimaryColumn("uuid")
    readonly id: string

    @Column({length:225})
    nameSeller: string

    @Column({length:225})
    email: string

    @Column({length:100})
    password:string

    @Column({length:15})
    telephone: string

    @Column({length:14})
    cnpj:string


    @CreateDateColumn()
    createdAt:Date

    @ManyToOne(type => Purchase, purchase=> purchase.userSellerId )
    purchaseId: Purchase

    @ManyToOne(type => Cars, cars=> cars.userSellersId)
    carsId: Cars
    


    

    constructor() {
        if (!this.id) {
          this.id = uuid();
        }
      }
}