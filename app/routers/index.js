import { Router } from 'express';
const router = Router();

import { coffeesRouter } from './coffeesRouter.js';
import { originsRouter } from './originsRouter.js';
import { caracteristicsRouter } from './caracteristicsRouter.js';

import { appController } from '../controllers/appController.js';

import { loginController } from '../controllers/loginController.js';


// router coffees
router.use(coffeesRouter);
// router origins
router.use(originsRouter);
// router caracteristic
router.use(caracteristicsRouter);


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