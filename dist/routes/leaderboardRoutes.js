"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaderboardRoutes = void 0;
const express_1 = require("express");
const playerController_1 = require("../controllers/playerController");
// Criar uma instância do Router
const router = (0, express_1.Router)();
exports.leaderboardRoutes = router;
// Rota para obter dados de um jogador específico
router.get('/', playerController_1.getLeaderBoard);
