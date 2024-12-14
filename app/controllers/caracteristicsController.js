import { Caracteristic } from '../models/index.js';
import sanitize from 'sanitize-html';
import Joi from 'joi';

const caracteristicsController = {

    async index(req, res) {

        const caracteristics = await Caracteristic.findAll({});

        res.json(caracteristics);
    },


    async show(req, res) {

        const { id } = req.params;

        const caracteristic = await Caracteristic.findByPk(id,{})

        res.json(caracteristic)
    },


    async store(req, res) {
        
        const carac = sanitize(req.body.carac);

        const schema = Joi.object({
            carac: Joi.string().min(3).required().messages({
                'string.empty': 'Le champ carac ne doit pas être vide',
                'string.min':
                    'Le champ carac doit contenir au moins {#limit} caractères',
                'any.required': 'Le champ carac est obligatoire',
            }),
        })

        const { error } = schema.validate({ carac });
        if (error) {
            return next(error);
        }

        const newCaracteristic = await Caracteristic.create(
            {
                carac: carac,
            })
           

        res.json(newCaracteristic);
    },


    async update(req, res, next) {

        const { id } = req.params;

        const carac = sanitize(req.body.carac);

        const schema = Joi.object({
            carac: Joi.string().min(3),
        });

        const { error } = schema.validate({ carac });

        if (error) {
            return next(error);
        };

        const caracteristicToUpdate = await Caracteristic.findByPk(id);

        const updatedcaracteristic = await caracteristicToUpdate.update(
            {
                carac: carac || caracteristicToUpdate.carac,
            })

        res.json(updatedcaracteristic);
    },


    async destroy(req, res, next) {

        const { id } = req.params;
        const caracteristic = await Caracteristic.findByPk(id);

        if (!caracteristic) {
            return next();
        }

        await caracteristic.destroy();

        return res.sendStatus(204);
    },

}

export { caracteristicsController };