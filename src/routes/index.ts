import { Router } from 'express';
import userRoutes from './user.routes';
import authRoutes from './auth.routes';
import { errorMiddleware } from '../middleware/error.middleware';

const router = Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use(errorMiddleware);

export default router;