import express, { Request, Response } from 'express';
import { updatePlayerDefeatedEnemies, updatePlayerScore } from '../services/scoreService';

export function submitScore(req: Request, res: Response) {
    console.log("Requisição de pontuação recebida.");
    
    const playerName = req.body.name;
    const playerScore = req.body.score;
    const playerEnemiesDestroyed = req.body.enemiesDestroyed;

    // Atualizar info do player.
    updatePlayerScore(playerName, playerScore);
    updatePlayerDefeatedEnemies(playerName, playerEnemiesDestroyed);
    
    res.json(
        {
            type: "scoreReceived",
            content: "Score received."
        }
    );

    console.log(`Pontuação recebida de ${playerName}: ${playerScore}`);
}