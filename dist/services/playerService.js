"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPlayerToDatabase = exports.generateNewPlayer = exports.getLeaderboardData = exports.getPlayerByName = void 0;
// Serviços para Manipulação de Dados
const playerDatabase_1 = require("../models/playerDatabase");
// Retornar os dados de um jogaor específico
const getPlayerByName = (name) => {
    return playerDatabase_1.playerDatabase.find(player => player.name === name);
};
exports.getPlayerByName = getPlayerByName;
// Retornar o Leaderboard
const getLeaderboardData = () => {
    return playerDatabase_1.playerDatabase
        .sort((a, b) => b.totalScore - a.totalScore)
        .map(player => ({
        name: player.name,
        totalScore: player.totalScore,
        rankLevel: player.rankLevel
    }));
};
exports.getLeaderboardData = getLeaderboardData;
// Gera um novo objeto de jogador
function generateNewPlayer(playerName) {
    const _data = {
        name: playerName,
        rankLevel: 1,
        expPoints: 0,
        bio: "Novo Jogador",
        enemiesDestroyed: 0,
        totalScore: 0,
        highestScore: 0,
        coinsCollected: 0,
        avatarIndex: 1,
        colorIndex: 1
    };
    return _data;
}
exports.generateNewPlayer = generateNewPlayer;
// Adiciona um jogador ao banco de dados
function addPlayerToDatabase(playerData) {
    playerDatabase_1.playerDatabase.push(playerData);
}
exports.addPlayerToDatabase = addPlayerToDatabase;
