import { Router } from 'express';
const caracteristicsRouter = Router();

import { caracteristicsController } from '../controllers/caracteristicsController.js';

caracteristicsRouter.get('/caracteristics/', caracteristicsController.index)
caracteristicsRouter.get('/caracteristic/:id(\\d+)', caracteristicsController.show)
caracteristicsRouter.post('/caracteristic/', caracteristicsController.store)
caracteristicsRouter.patch('/caracteristic/:id(\\d+)', caracteristicsController.update)
caracteristicsRouter.delete('/caracteristic/:id(\\d+)', caracteristicsController.destroy)

export { caracteristicsRouter };