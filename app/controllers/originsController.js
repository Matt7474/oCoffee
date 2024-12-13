import { or } from 'sequelize';
import { Origin } from '../models/index.js';


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
        
        const { id, name } = req.body;

        const newOrigin = await Origin.create(
            {
                id: id,
                name: name,
            })
           

        res.json(newOrigin);
    },


    async update(req, res) {

        const { id } = req.params;
        const { name } = req.body;

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