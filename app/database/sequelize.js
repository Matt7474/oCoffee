import { Sequelize } from 'sequelize';

const sequelizeClient = new Sequelize(process.env.PG_URL, {
    dialect: 'postgres',
    define: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored: true,
    },
});

export { sequelizeClient };
