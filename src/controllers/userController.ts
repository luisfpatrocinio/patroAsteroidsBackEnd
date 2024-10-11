import { Request, Response } from "express";
import { User, userDatabase } from "../models/userDatabase";

export function createUser(req: Request, res: Response) {
    console.log("[userController] - createUser: Iniciando criação de usuário.");
    
    const user = req.body.userId;
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    // Checar se o usuário já existe
    const _user = getUserById(user);

    // Se existir:
    if (_user) {
        // Erro #TODO: Não é assim. Devemos retornar um erro XXX.
        throw new Error("Usuário já existe.");
    } else {
        // Criar usuário
        userDatabase.push(
            {
                userId: user,
                name: userName,
                email: userEmail,
                password: userPassword
            }
        );
        console.log(`Usuário criado: ${userName}`);
    }

    // Retornar resposta
    res.json({
        type: "userCreated",
        content: "Usuário criado."
    });
}

export function getUserById(userId: string): User | undefined {
    let _user: User | undefined = userDatabase.find((u) => u.userId == userId);
    if (_user) {
        // Usuário encontrado. Retorna-lo:
        return _user;
    } else {
        return undefined;
    }
}

// Obter usuários
export const getUsers = (req: Request, res: Response) => {
    const users = userDatabase;
    res.json({
        type: "usersDatabase",
        content: users
    });
};