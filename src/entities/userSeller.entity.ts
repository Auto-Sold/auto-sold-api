import { Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";


// import { Vehicles } from "./vehicles.entity";

@Entity("userSeller")
export class UserSeller {

  @PrimaryColumn("uuid")
  readonly id: string

  @Column({ length: 225 })
  nameSeller: string

  @Column({ length: 225 })
  email: string

  @Column({ length: 100 })
  password: string

  @Column({ length: 15 })
  telephone: string

  @Column({ length: 14 })
  cnpj: string

  @CreateDateColumn()
  createdAt: Date


  // @OneToMany(() => Vehicles, vehicles => vehicles.userSeller)
  // vehicles: Vehicles[]

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}