import { Router } from 'express';
import { createNewPlayer, getPlayerData } from '../controllers/playerController';

// Criar uma instância do Router
const router = Router();

// Rota para obter dados de um jogador específico
router.post('/create', createNewPlayer);
router.get('/:name', getPlayerData);

// Exportar o router usando um alias
export { router as playerRoutes };