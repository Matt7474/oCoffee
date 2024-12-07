import { router } from "../router.js";
import { Coffee } from '../models/index.js';


const appController = {
    async homepage(req, res) {

        const coffees = await Coffee.findAll({
            limit: 3,
            order: [['id', 'DESC']],
            include: ['origin', 'caracteristic']
        })
        // console.log(coffees);
    
        res.render("homepage", { coffees })
    },

    async catalog(req, res) {

        const coffees = await Coffee.findAll({
            order: [['id', 'ASC']],
            include: ['origin', 'caracteristic']
        })

        const allCaracteristics = coffees.map(coffee => coffee.caracteristic.carac);
        const uniqueCarac = [...new Set(allCaracteristics)];

        console.log(uniqueCarac);

        res.render("catalog", { coffees, uniqueCarac })
    },

    async product(req, res) {
        res.render("product")
    },
};


export { appController }