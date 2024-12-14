import { Origin } from '../models/index.js';
import sanitize from 'sanitize-html';
import Joi from 'joi';

const originsController = {

    async index(req, res) {

        const origins = await Origin.findAll({});

        res.json(origins);
    },


    async show(req, res) {

        const { id } = req.params;

        const origin = await Origin.findByPk(id,{})

        res.json(origin)
    },


    async store(req, res) {
        
        const name = req.body.name;

        const schema = Joi.object({
            name: Joi.string().min(3).required().messages({
                'string.empty': 'Le champ name ne doit pas être vide',
                'string.min':
                    'Le champ name doit contenir au moins {#limit} nametères',
                'any.required': 'Le champ name est obligatoire',
            }),
        })

        const { error } = schema.validate({ name });
        if (error) {
            return next(error);
        }

        const newOrigin = await Origin.create(
            {
                name: name,
            })
           

        res.json(newOrigin);
    },


    async update(req, res) {

        const { id } = req.params;
        const name = req.body.name;

        const schema = Joi.object({
            name: Joi.string().min(3).required().messages(),
        });

        const { error } = schema.validate({ name });

        if (error) {
            return next(error);
        };
        

        const originToUpdate = await Origin.findByPk(id);

        const updatedOrigin = await originToUpdate.update(
            {
                name: name,
            })

        res.json(updatedOrigin);
    },

    async destroy(req, res, next) {

        const { id } = req.params;
        const origin = await Origin.findByPk(id);

        if (!origin) {
            return next();
        }

        await origin.destroy();

        return res.sendStatus(204);
    },

}

export { originsController };