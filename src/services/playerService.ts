// Serviços para Manipulação de Dados
import { Player, playerDatabase } from '../models/playerDatabase';

// Retornar os dados de um jogaor específico
export const getPlayerByName = (name: string) => {
    return playerDatabase.find(player => player.name === name);
}

// Retornar o Leaderboard
export const getLeaderboardData = () => {
    return playerDatabase
        .sort((a, b) => b.totalScore - a.totalScore)
        .map(player => ({
            name: player.name,
            totalScore: player.totalScore,
            rankLevel: player.rankLevel
    }));
}

// Gera um novo objeto de jogador
export function generateNewPlayer(playerName: string): Player {
    const _data : Player = {
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

// Adiciona um jogador ao banco de dados
export function addPlayerToDatabase(playerData: Player): void {
    playerDatabase.push(playerData);
}