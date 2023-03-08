export interface IUserRequest{
    completeName: string,
    email: string,
    telephone: string,
    password: string,
    cpf: string,
    image: string,
    bio: string,
    dateBirth: string,
    complement?: string,
    zipCode: string,
    number: string,
    city: string,
    state: string,
    street: string,


} 
export interface IUser {
    completeName: string,
    email: string,
    telephone: string,
    password: string,
    cpf: string,
    image: string,
    bio: string
    isAdm: boolean
   
    createdAt: Date
    updatedAt: Date
}

export interface IUserUpdate{
    completeName?: string,
    email?: string,
    telephone?: string,
    password?: string,
    cpf?: string,
    image?: string,
    bio?: string,

}

export interface IUserLogin {
    email: string
    password: string
}

export interface IAddressRequest {
    complement: string
    zipCode: string
    number?: string
    city: string
    state: string
    street: string
}