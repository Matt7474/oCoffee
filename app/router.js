import { Router } from 'express';
import { appController } from './controllers/appController.js';
import { loginController } from './controllers/loginController.js';

const router = Router();

router.get('/', appController.homepage);
router.get('/catalogue', appController.catalog);
router.get('/produit/:id(\\d+)', appController.product);

router.get('/compte', loginController.index);
router.post('/signup', loginController.signup);

export { router };