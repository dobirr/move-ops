import healthRoutes from './health.routes.js';
import readyRoutes from './ready.routes.js';
import { Router } from 'express';

const apiRouters: Router = Router();

apiRouters.use('/api/v1/', healthRoutes);
apiRouters.use('/api/v1/', readyRoutes);

export default apiRouters;
