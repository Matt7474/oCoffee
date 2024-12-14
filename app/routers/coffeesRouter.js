import { Router } from 'express';
const coffeesRouter = Router();

import { catchErrors } from '../middlewares/catchError.js';
import { coffeesController } from '../controllers/coffeesController.js';

coffeesRouter.get('/coffees/', catchErrors(coffeesController.index));
coffeesRouter.get('/coffee/:id(\\d+)', catchErrors(coffeesController.show));
coffeesRouter.post('/coffee/', catchErrors(coffeesController.store));
coffeesRouter.patch('/coffee/:id(\\d+)', catchErrors(coffeesController.update));
coffeesRouter.delete('/coffee/:id(\\d+)', catchErrors(coffeesController.destroy));

export { coffeesRouter };