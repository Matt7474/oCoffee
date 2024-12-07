import { Model, DataTypes, INTEGER } from 'sequelize';
import { sequelizeClient } from '../database/sequelize.js';

class Origin extends Model {}

Origin.init(
    {
        name: DataTypes.TEXT,
    },
    {
        sequelize: sequelizeClient,
        tableName: 'origin',
    }
);

export { Origin };
