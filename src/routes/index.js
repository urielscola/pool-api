import { Router } from 'express';
import poolRoutes from './pool';

const routes = Router();

routes.use('/pool', poolRoutes);
routes.get('*', (req, res) => res.send('not found'));

export default routes;
