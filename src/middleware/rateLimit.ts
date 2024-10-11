import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Limitar a 100 requisições por IP a cada 15 minutos
    message: "Muitas requisições do mesmo IP. Tente novamente mais tarde."
});
