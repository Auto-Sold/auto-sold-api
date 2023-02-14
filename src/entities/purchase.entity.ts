import { Entity, Column, PrimaryColumn,  } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("purchase")
export class Purchase{
    
    @PrimaryColumn("uuid")
    readonly id: string

    @Column({length:15})
    value:string
    
    @Column({length:100})
    password: string
}