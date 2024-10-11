export interface User {
    userId: string;
    name: string;
    email: string;
    password: string;
}

export const userDatabase: User[] =[
    {
        userId: "patrocinio",
        name: "Luis Patrocinio",
        email: "patrocinioluisf@gmail.com",
        password: "123456"
    }
]