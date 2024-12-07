import { Model, DataTypes, INTEGER } from 'sequelize';
import { sequelizeClient } from '../database/sequelize.js';

class Coffee extends Model {}

Coffee.init(
    {
        name: DataTypes.TEXT,
        description: DataTypes.TEXT,
        reference: DataTypes.INTEGER,
        price_kilo: DataTypes.INTEGER,
        origin_id: DataTypes.INTEGER,
        caracteristic_id: DataTypes.INTEGER,
        disponibility_id: DataTypes.INTEGER,
    },
    {
        sequelize: sequelizeClient,
        tableName: 'coffee',
    }
);

export { Coffee };
