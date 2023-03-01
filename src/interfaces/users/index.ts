export interface IUserRequest{
    completeName: string,
    email: string,
    telephone: string,
    password: string,
    cpf: number,
    image: string,
    bio: string,

} 
export interface IUser {
    completeName: string,
    email: string,
    telephone: string,
    password: string,
    cpf: number,
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
    cpf?: number,
    image?: string,
    bio?: string,

}

export interface IUserLogin {
    email: string
    password: string
}