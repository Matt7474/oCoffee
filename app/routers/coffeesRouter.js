import { Router } from 'express';
const coffeesRouter = Router();

import { coffeesController } from '../controllers/coffeesController.js';

coffeesRouter.get('/coffees/', coffeesController.index)
coffeesRouter.get('/coffee/:id(\\d+)', coffeesController.show)
coffeesRouter.post('/coffee/', coffeesController.store)
coffeesRouter.patch('/coffee/:id(\\d+)', coffeesController.update)
coffeesRouter.delete('/coffee/:id(\\d+)', coffeesController.destroy)

export { coffeesRouter };