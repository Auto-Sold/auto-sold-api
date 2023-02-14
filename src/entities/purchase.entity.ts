import { type } from "os";
import { Entity, Column, PrimaryColumn, OneToMany,  } from "typeorm";
import { v4 as uuid } from "uuid";
import { UserSeller } from "./userSeller.entity";

@Entity("purchase")
export class Purchase{
    
    @PrimaryColumn("uuid")
    readonly id: string

    @Column({length:15})
    value:string
    
    @Column({length:100})
    password: string

    @OneToMany(type => UserSeller, userSeller=> userSeller.purchaseId, {eager:true})
    userSellerId: UserSeller[]
}