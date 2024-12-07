import { Model, DataTypes, INTEGER } from 'sequelize';
import { sequelizeClient } from '../database/sequelize.js';

class Caracteristic extends Model {}

Caracteristic.init(
    {
        carac: DataTypes.TEXT,
    },
    {
        sequelize: sequelizeClient,
        tableName: 'caracteristic',
    }
);

export { Caracteristic };
