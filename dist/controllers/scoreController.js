"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitScore = void 0;
const scoreService_1 = require("../services/scoreService");
function submitScore(req, res) {
    console.log("Requisição de pontuação recebida.");
    const playerName = req.body.name;
    const playerScore = req.body.score;
    const playerEnemiesDestroyed = req.body.enemiesDestroyed;
    // Atualizar info do player.
    (0, scoreService_1.updatePlayerScore)(playerName, playerScore);
    (0, scoreService_1.updatePlayerDefeatedEnemies)(playerName, playerEnemiesDestroyed);
    res.json({
        type: "scoreReceived",
        content: "Score received."
    });
    console.log(`Pontuação recebida de ${playerName}: ${playerScore}`);
}
exports.submitScore = submitScore;
