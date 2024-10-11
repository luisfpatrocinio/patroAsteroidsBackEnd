import { Router } from 'express';
import { getLeaderBoard } from '../controllers/playerController';

// Criar uma instância do Router
const router = Router();

// Rota para obter dados de um jogador específico
router.get('/', getLeaderBoard);

// Exportar o router usando um alias
export { router as leaderboardRoutes };