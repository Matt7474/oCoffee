import { Router } from 'express';
const originsRouter = Router();

import { catchErrors } from '../middlewares/catchError.js';
import { originsController } from '../controllers/originsController.js';

originsRouter.get('/origins/', catchErrors(originsController.index));
originsRouter.get('/origin/:id(\\d+)', catchErrors(originsController.show));
originsRouter.post('/origin/', catchErrors(originsController.store));
originsRouter.patch('/origin/:id(\\d+)', catchErrors(originsController.update));
originsRouter.delete('/origin/:id(\\d+)', catchErrors(originsController.destroy));

export { originsRouter };