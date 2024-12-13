import { or } from 'sequelize';
import { Caracteristic } from '../models/index.js';


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
        
        const { id, carac } = req.body;

        const newcaracteristic = await Caracteristic.create(
            {
                id: id,
                carac: carac,
            })
           

        res.json(newcaracteristic);
    },


    async update(req, res) {

        const { id } = req.params;
        const { carac } = req.body;

        const caracteristicToUpdate = await Caracteristic.findByPk(id);

        const updatedcaracteristic = await caracteristicToUpdate.update(
            {
                carac: carac,
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