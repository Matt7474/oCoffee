import { Model, DataTypes, INTEGER } from 'sequelize';
import { sequelizeClient } from '../database/sequelize.js';

class Disponibility extends Model {}

Disponibility.init(
    {
        dispo: DataTypes.TEXT,
    },
    {
        sequelize: sequelizeClient,
        tableName: 'disponibility',
    }
);

export { Disponibility };
