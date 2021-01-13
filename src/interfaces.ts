export interface PostI {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface UserI {
    id: number,
    name: string,
    username: string,
    email: string
    address: any, // ...
    phone: string,
    website: string,
    company: any // ...
}