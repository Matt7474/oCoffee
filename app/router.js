import { Router } from 'express';
import { appController } from './controllers/appController.js';
import { loginController } from './controllers/loginController.js';
import { coffeesController } from './controllers/coffeesController.js';
import { originsController } from './controllers/originsController.js';
import { caracteristicsController } from './controllers/caracteristicsController.js';

const router = Router();

router.get('/', appController.homepage);
router.get('/catalogue', appController.catalog);
router.get('/produit/:name([a-zA-Z0-9-%]+)', appController.product);
router.get('/produit/', appController.search); 
router.get('/panier', appController.cart);
router.get('/vidange', appController.enptyTheCart);


// router coffees
router.get('/coffees/', coffeesController.index)
router.get('/coffee/:id(\\d+)', coffeesController.show)
router.post('/coffee/', coffeesController.store)
router.patch('/coffee/:id(\\d+)', coffeesController.update)
router.delete('/coffee/:id(\\d+)', coffeesController.destroy)

// router origins
router.get('/origins/', originsController.index)
router.get('/origin/:id(\\d+)', originsController.show)
router.post('/origin/', originsController.store)
router.patch('/origin/:id(\\d+)', originsController.update)
router.delete('/origin/:id(\\d+)', originsController.destroy)

// router caracteristic
router.get('/caracteristics/', caracteristicsController.index)
router.get('/caracteristic/:id(\\d+)', caracteristicsController.show)
router.post('/caracteristic/', caracteristicsController.store)
router.patch('/caracteristic/:id(\\d+)', caracteristicsController.update)
router.delete('/caracteristic/:id(\\d+)', caracteristicsController.destroy)


router.get('/compte', loginController.index);
router.post('/signup', loginController.signup);
router.get('/logout', loginController.delete)

export { router };