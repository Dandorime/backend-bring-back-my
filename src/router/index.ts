import { Router } from 'express';
import userRoutes from '@/router/user.routers';

const apiRouter = Router();

apiRouter.use('/users', userRoutes);

export default apiRouter;