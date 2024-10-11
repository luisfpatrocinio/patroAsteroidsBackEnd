import express, { Application } from 'express';
import cors from 'cors';
import { playerRoutes } from './routes/playerRoutes';
import { limiter } from './middleware/rateLimit';
import { leaderboardRoutes } from './routes/leaderboardRoutes';
import { scoreRoutes } from './routes/scoreRoutes';
import { userRoutes } from './routes/userRoutes';

// Criar a instância do Express
const app: Application = express();

// Middleware de limitação de requisições
app.use(express.json());
app.use(cors());
app.use(limiter);

// Configurar rotas
app.use('/player', playerRoutes);
app.use('/users', userRoutes);
app.use('/leaderboard', leaderboardRoutes);
app.use('/score', scoreRoutes);

// Definir rota inicial:
app.get('/', (req, res) => {
    console.log("Rota inicial acessada");
    res.json({
        type: "connected",
        content: "Bem-vindo ao servidor."
    })
})

export default app;