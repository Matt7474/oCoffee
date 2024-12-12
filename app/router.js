import { Router } from 'express';
import { appController } from './controllers/appController.js';
import { loginController } from './controllers/loginController.js';

const router = Router();

router.get('/', appController.homepage);
router.get('/catalogue', appController.catalog);
router.get('/produit/:name([a-zA-Z0-9-%]+)', appController.product);
router.get('/produit/', appController.search); 
router.get('/panier', appController.cart);
router.get('/vidange', appController.enptyTheCart);

router.get('/compte', loginController.index);
router.post('/signup', loginController.signup);
router.get('/logout', loginController.delete)

export { router };