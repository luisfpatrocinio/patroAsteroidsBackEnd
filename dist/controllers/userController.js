"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.getUserById = exports.createUser = void 0;
const userDatabase_1 = require("../models/userDatabase");
function createUser(req, res) {
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
    }
    else {
        // Criar usuário
        userDatabase_1.userDatabase.push({
            userId: user,
            name: userName,
            email: userEmail,
            password: userPassword
        });
        console.log(`Usuário criado: ${userName}`);
    }
    // Retornar resposta
    res.json({
        type: "userCreated",
        content: "Usuário criado."
    });
}
exports.createUser = createUser;
function getUserById(userId) {
    let _user = userDatabase_1.userDatabase.find((u) => u.userId == userId);
    if (_user) {
        // Usuário encontrado. Retorna-lo:
        return _user;
    }
    else {
        return undefined;
    }
}
exports.getUserById = getUserById;
// Obter usuários
const getUsers = (req, res) => {
    const users = userDatabase_1.userDatabase;
    res.json({
        type: "usersDatabase",
        content: users
    });
};
exports.getUsers = getUsers;
