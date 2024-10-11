import { Player, playerDatabase } from "../models/playerDatabase";

// Função para obter os dados de um jogador pelo nome
export function getPlayerDataByName(playerName: string): Player | undefined {
    return playerDatabase.find(player => player.name === playerName);
}

// Função para atualizar a pontuação de um jogador
export function updatePlayerScore(playerName: string, score: number) {
    const _player = getPlayerDataByName(playerName);
    if (_player) {
        _player.totalScore += score;
        _player.highestScore = Math.max(_player.highestScore, score);
    }
}

// Função para atualizar os inimigos destruídos por um jogador
export function updatePlayerDefeatedEnemies(playerName: string, enemiesDestroyed: number) {
    const _player = getPlayerDataByName(playerName);
    if (_player) {
        _player.enemiesDestroyed += enemiesDestroyed;
    }
}