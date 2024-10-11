import { Router } from 'express';
import { submitScore } from '../controllers/scoreController';

// Criar uma instância do Router
const router = Router();

// Rota para obter dados de um jogador específico
router.post('/', submitScore);

// Exportar o router usando um alias
export { router as scoreRoutes };