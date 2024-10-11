"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLeaderBoard = exports.getPlayersDatabase = exports.addPlayerToDatabase = exports.createNewPlayer = exports.updatePlayerDefeatedEnemies = exports.updatePlayerScore = exports.getPlayerData = void 0;
// Banco de dados de jogadores
const playerDatabase = [
    {
        name: "Ely",
        rankLevel: 1,
        expPoints: 0,
        bio: "Professor de Programação",
        enemiesDestroyed: 0,
        totalScore: 0,
        highestScore: 0,
        coinsCollected: 0,
        avatarIndex: 1,
        colorIndex: 1
    },
    {
        name: "Patrocinio",
        rankLevel: 1,
        expPoints: 0,
        bio: "Mestre do Universo",
        enemiesDestroyed: 0,
        totalScore: 250,
        highestScore: 250,
        coinsCollected: 0,
        avatarIndex: 1,
        colorIndex: 1
    }
];
// Função para obter os dados de um jogador pelo nome
function getPlayerData(playerName) {
    return playerDatabase.find(player => player.name === playerName);
}
exports.getPlayerData = getPlayerData;
// Função para atualizar a pontuação de um jogador
function updatePlayerScore(playerName, score) {
    const _player = getPlayerData(playerName);
    if (_player) {
        _player.totalScore += score;
        _player.highestScore = Math.max(_player.highestScore, score);
    }
}
exports.updatePlayerScore = updatePlayerScore;
// Função para atualizar os inimigos destruídos por um jogador
function updatePlayerDefeatedEnemies(playerName, enemiesDestroyed) {
    const _player = getPlayerData(playerName);
    if (_player) {
        _player.enemiesDestroyed += enemiesDestroyed;
    }
}
exports.updatePlayerDefeatedEnemies = updatePlayerDefeatedEnemies;
function createNewPlayer(playerName) {
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
exports.createNewPlayer = createNewPlayer;
function addPlayerToDatabase(playerData) {
    playerDatabase.push(playerData);
}
exports.addPlayerToDatabase = addPlayerToDatabase;
function getPlayersDatabase() {
    return playerDatabase;
}
exports.getPlayersDatabase = getPlayersDatabase;
/**
 * Retrieves the leaderboard from the player database.
 *
 * This function sorts the players by their total score in descending order
 * and returns an array of simplified player objects containing only the
 * relevant fields: name, totalScore, and rankLevel.
 *
 * @returns {Array<{name: string, totalScore: number, rankLevel: number}>}
 * An array of player objects sorted by total score.
 */
function getLeaderBoard() {
    return playerDatabase
        // Sort players by total score in descending order
        .sort((a, b) => b.totalScore - a.totalScore)
        // Return only the relevant fields
        .map(player => ({
        name: player.name,
        totalScore: player.totalScore,
        rankLevel: player.rankLevel
    }));
}
exports.getLeaderBoard = getLeaderBoard;
