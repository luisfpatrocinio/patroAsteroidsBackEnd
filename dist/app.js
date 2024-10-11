"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const playerRoutes_1 = require("./routes/playerRoutes");
const rateLimit_1 = require("./middleware/rateLimit");
const leaderboardRoutes_1 = require("./routes/leaderboardRoutes");
const scoreRoutes_1 = require("./routes/scoreRoutes");
const userRoutes_1 = require("./routes/userRoutes");
// Criar a instância do Express
const app = (0, express_1.default)();
// Middleware de limitação de requisições
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(rateLimit_1.limiter);
// Configurar rotas
app.use('/player', playerRoutes_1.playerRoutes);
app.use('/users', userRoutes_1.userRoutes);
app.use('/leaderboard', leaderboardRoutes_1.leaderboardRoutes);
app.use('/score', scoreRoutes_1.scoreRoutes);
// Definir rota inicial:
app.get('/', (req, res) => {
    console.log("Rota inicial acessada");
    res.json({
        type: "connected",
        content: "Bem-vindo ao servidor."
    });
});
exports.default = app;
