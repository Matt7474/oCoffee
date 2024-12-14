import { Router } from 'express';
const router = Router();

import { catchErrors } from '../middlewares/catchError.js';
import { coffeesRouter } from './coffeesRouter.js';
import { originsRouter } from './originsRouter.js';
import { caracteristicsRouter } from './caracteristicsRouter.js';

import { appController } from '../controllers/appController.js';

import { supportController } from '../controllers/supportController.js';

import { loginController } from '../controllers/loginController.js';


// router coffees
router.use(coffeesRouter);
// router origins
router.use(originsRouter);
// router caracteristic
router.use(caracteristicsRouter);


router.get('/', catchErrors(appController.homepage));
router.get('/catalogue', catchErrors(appController.catalog));
router.get('/produit/:name([a-zA-Z0-9-%]+)', catchErrors(appController.product));
router.get('/produit/', catchErrors(appController.search)); 
router.get('/panier', catchErrors(appController.cart));
router.get('/vidange', catchErrors(appController.enptyTheCart));


router.get('/support', supportController.index)
router.get('/mentions-legales', supportController.mentions)
router.get('/cgv', supportController.cgv)
router.get('/sitemap', supportController.sitemap)



router.get('/compte', loginController.index);
router.post('/signup', loginController.signup);
router.get('/logout', loginController.delete)


export { router };