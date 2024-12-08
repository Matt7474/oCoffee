import { router } from "../router.js";
import { Coffee } from '../models/index.js';


const appController = {
    async homepage(req, res) {

        const coffees = await Coffee.findAll({
            limit: 3,
            order: [['id', 'DESC']],
            include: ['origin', 'caracteristic']
        })
    
        res.render("homepage", { coffees })
    },

    async catalog(req, res) {

        const coffees = await Coffee.findAll({
            order: [['id', 'ASC']],
            include: ['origin', 'caracteristic', 'disponibility']
        })

        const allCaracteristics = coffees.map(coffee => coffee.caracteristic.carac);
        const uniqueCarac = [...new Set(allCaracteristics)];

        const allDisponibilities = coffees.map(coffee => coffee.disponibility.dispo);
        const uniqueDispo = [...new Set(allDisponibilities)];

        console.log(uniqueDispo);

        res.render("catalog", { coffees, uniqueCarac, uniqueDispo })
    },

    async product(req, res) {
        const {id} = req.params;
        console.log(id);

        const coffee = await Coffee.findByPk(id,{
            include: ['origin', 'caracteristic', 'disponibility']
        });        
        
        res.render("product", { coffee })
    },
};


export { appController }