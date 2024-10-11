"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
// Criar uma instância do Router
const router = (0, express_1.Router)();
exports.userRoutes = router;
// Rota para criar um usuário.
router.post('/create', userController_1.createUser);
router.get('/list', userController_1.getUsers);
