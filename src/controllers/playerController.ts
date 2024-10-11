import express, { Request, Response } from 'express';
import { getPlayerByName, getLeaderboardData, generateNewPlayer, addPlayerToDatabase } from '../services/playerService';

// Obter dados de um jogador específico
export const getPlayerData = (req: Request, res: Response) => {
    const playerName = req.params.name;
    const player = getPlayerByName(playerName);

    if (player) {
        console.log(`Fornecendo dados do jogador: ${playerName}`)
        res.json({
            type: "playerData",
            content: player
        });
    } else {
        console.log(`Jogador não encontrado: ${playerName}`)
        res.status(404).json({
            type: "playerData",
            content: `Player ${playerName} not found`
        });
    }
};

// Obter leaderboard
export const getLeaderBoard = (req: Request, res: Response) => {
    const leaderboard = getLeaderboardData();
    res.json({
        type: "leaderboard",
        content: leaderboard
    });
};

// Criar um novo jogador
export const createNewPlayer = (req: Request, res: Response) => {
    const playerName = req.body.name;
    console.log(playerName);
    
    const player = getPlayerByName(playerName);
    console.log(`Tentando criar o Player: ${playerName}`)

    if (player) {
        // Caso o jogador já exista, retornar um erro
        console.log("Jogador já existe");
        res.status(400).json({
            type: "error",
            content: `Player ${playerName} already exists`
        })
    } else {
        // Caso o jogador não exista, criar um novo jogador.
        console.log("Criando como novo jogador");
        const newPlayer = generateNewPlayer(playerName);
        // Adicionar o novo jogador ao banco de dados
        addPlayerToDatabase(newPlayer);

        res.json({
            type: "newPlayerData",
            content: newPlayer
        });
    }

}

