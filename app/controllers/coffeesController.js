import { or } from 'sequelize';
import { Coffee } from '../models/index.js';


const coffeesController = {

    async index(req, res) {

        const coffees = await Coffee.findAll({});

        res.json(coffees);
    },

    async show(req, res) {

        const { id } = req.params;

        const coffee = await Coffee.findByPk(id,{})

        res.json(coffee)
    },


    async store(req, res) {
        
        const { id, name, description, reference, price_kilo, origin_id, caracteristic_id, disponibility_id } = req.body;

        const newCoffee = await Coffee.create(
            {
                id: id,
                name: name,
                description: description,
                reference: reference,
                price_kilo: price_kilo,
                origin_id: origin_id,
                caracteristic_id: caracteristic_id,
                disponibility_id: disponibility_id,
            })
           

        res.json(newCoffee);
    },

    async update(req, res) {

        const { id } = req.params;
        const { name, description, reference, price_kilo, origin_id, caracteristic_id, disponibility_id } = req.body;

        const coffeeToUpdate = await Coffee.findByPk(id);

        const updatedCoffee = await coffeeToUpdate.update(
            {
                name: name,
                description: description,
                reference: reference,
                price_kilo: price_kilo, 
                origin_id: origin_id,
                caracteristic_id: caracteristic_id, 
                disponibility_id: disponibility_id,
        })

        res.json(updatedCoffee);
    },

    async destroy(req, res, next) {
        const { id } = req.params;
        const coffee = await Coffee.findByPk(id);

        if (!coffee) {
            return next();
        }

        await coffee.destroy();

        return res.sendStatus(204);
    },

}

export { coffeesController };