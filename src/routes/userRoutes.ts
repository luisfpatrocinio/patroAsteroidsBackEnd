import { Router } from 'express';
import { createUser, getUsers } from '../controllers/userController';

// Criar uma instância do Router
const router = Router();

// Rota para criar um usuário.
router.post('/create', createUser);
router.get('/list', getUsers);

// Exportar o router usando um alias
export { router as userRoutes };