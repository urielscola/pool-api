import { Router } from 'express';
import PoolController from '../controllers/pool';

const routes = Router();

routes.get('/', PoolController.index);
routes.post('/', PoolController.store);
routes.delete('/', PoolController.delete);
routes.get('/:id', PoolController.find);

export default routes;
