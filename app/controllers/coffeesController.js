import { Coffee } from '../models/index.js';
import sanitize from 'sanitize-html';
import Joi from 'joi';


const coffeesController = {

    async index(req, res) {

        const coffees = await Coffee.findAll({});

        res.json(coffees);
    },


    async show(req, res) {

        const { id } = req.params;

        const coffee = await Coffee.findByPk(id)

        res.json(coffee)
    },


    async store(req, res, next) {
        
        //! Avec insomnia l'id des 16 premiers n'est pas connu
        // const id = req.body.id;
        
        const name = req.body.name;
        const description = req.body.description;
        const reference = req.body.reference;
        const price_kilo = req.body.price_kilo;
        const origin_id = req.body.origin_id;
        const caracteristic_id = req.body.caracteristic_id;
        const disponibility_id = req.body.disponibility_id;

        const schema = Joi.object({

            name: Joi.string().min(3).required().messages({
                'string.empty': 'Le champ name ne doit pas être vide',
                'string.min':
                    'Le champ name doit contenir au moins {#limit} caractères',
                'any.required': 'Le champ name est obligatoire',
            }),
            description: Joi.string().min(10).required().messages({
                'string.empty': 'Le champ description ne doit pas être vide',
                'string.min':
                    'Le champ description doit contenir au moins {#limit} caractères',
                'any.required': 'Le champ description est obligatoire',  
            }),  
            reference: Joi.number().min(7).required().messages({
                'string.empty': 'Le champ reference ne doit pas être vide',
                'string.min':
                'Le champ reference doit contenir au moins {#limit} caractères',
                'any.required': 'Le champ reference est obligatoire',
            }),
            price_kilo: Joi.number().min(1).required().messages({
                'string.empty': 'Le champ price_kilo ne doit pas être vide',
                'string.min':
                    'Le champ price_kilo doit contenir au moins {#limit} caractères',
                'any.required': 'Le champ price_kilo est obligatoire',
            }),
            origin_id: Joi.number().min(1).required().messages({
                'string.empty': 'Le champ origin_id ne doit pas être vide',
                'string.min':
                    'Le champ origin_id doit contenir au moins {#limit} caractères',
                'any.required': 'Le champ origin_id est obligatoire',
            }),
            caracteristic_id: Joi.number().min(1).required().messages({
                'string.empty': 'Le champ caracteristic_id ne doit pas être vide',
                'string.min':
                    'Le champ caracteristic_id doit contenir au moins {#limit} caractères',
                'any.required': 'Le champ caracteristic_id est obligatoire',
            }),
            disponibility_id: Joi.number().min(1).required().messages({
                'string.empty': 'Le champ disponibility_id ne doit pas être vide',
                'string.min':
                    'Le champ disponibility_id doit contenir au moins {#limit} caractères',
                'any.required': 'Le champ disponibility_id est obligatoire',
            }),    

        });
            
        const { error } = schema.validate({ name, description, reference, price_kilo, origin_id, caracteristic_id, disponibility_id });
        if (error) {
            return next(error);
        }

        const newCoffee = await Coffee.create(
            {
                //! Avec insomnia l'id des 16 premiers n'est pas connu
                // id: id,
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


    async update(req, res, next) {

        const id = req.body.id;
        
        const name = req.body.name;
        const description = req.body.description;
        const reference = req.body.reference;
        const price_kilo = req.body.price_kilo;
        const origin_id = req.body.origin_id;
        const caracteristic_id = req.body.caracteristic_id;
        const disponibility_id = req.body.disponibility_id;

        const schema = Joi.object({
            id: Joi.number().min(1),
            name: Joi.string().min(3),
            description: Joi.string().min(10),
            reference: Joi.number().min(7),
            price_kilo: Joi.number().min(1),
            origin_id: Joi.number().min(1),
            caracteristic_id: Joi.number().min(1),
            disponibility_id: Joi.number().min(1),
        });

        const { error } = schema.validate({ id, name, description, reference, price_kilo, origin_id, caracteristic_id, disponibility_id });

        if (error) {
            return next(error);
        };

        const coffeeToUpdate = await Coffee.findByPk(id);
        console.log(coffeeToUpdate);
        
        if (!coffeeToUpdate) {
            return next()
        }
        
        const updatedCoffee = await coffeeToUpdate.update(
            {
                id: id || coffeeToUpdate.id,
                name: name || coffeeToUpdate.name,
                description: description || coffeeToUpdate.description,
                reference: reference || coffeeToUpdate.reference,
                price_kilo: price_kilo || coffeeToUpdate.price_kilo,
                origin_id: origin_id || coffeeToUpdate.origin_id,
                caracteristic_id: caracteristic_id || coffeeToUpdate.caracteristic_id,
                disponibility_id: disponibility_id || coffeeToUpdate.disponibility_id,
        });

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