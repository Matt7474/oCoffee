import { Router } from 'express';
const originsRouter = Router();

import { originsController } from '../controllers/originsController.js';

originsRouter.get('/origins/', originsController.index)
originsRouter.get('/origin/:id(\\d+)', originsController.show)
originsRouter.post('/origin/', originsController.store)
originsRouter.patch('/origin/:id(\\d+)', originsController.update)
originsRouter.delete('/origin/:id(\\d+)', originsController.destroy)

export { originsRouter };