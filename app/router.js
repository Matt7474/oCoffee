import { Router } from 'express';
import { appController } from './controllers/appController.js';

const router = Router();

router.get('/', appController.homepage);
router.get('/catalog', appController.catalog);
router.get('/product/', appController.product);
// :id(\\d+)

export { router };