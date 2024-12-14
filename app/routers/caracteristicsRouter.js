import { Router } from 'express';
const caracteristicsRouter = Router();

import { catchErrors } from '../middlewares/catchError.js';
import { caracteristicsController } from '../controllers/caracteristicsController.js';

caracteristicsRouter.get('/caracteristics/', catchErrors(caracteristicsController.index));
caracteristicsRouter.get('/caracteristic/:id(\\d+)', catchErrors(caracteristicsController.show));
caracteristicsRouter.post('/caracteristic/', catchErrors(caracteristicsController.store));
caracteristicsRouter.patch('/caracteristic/:id(\\d+)', catchErrors(caracteristicsController.update));
caracteristicsRouter.delete('/caracteristic/:id(\\d+)', catchErrors(caracteristicsController.destroy));

export { caracteristicsRouter };