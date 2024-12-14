import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelizeClient = new Sequelize(process.env.PG_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true, // Obligatoire pour activer SSL
            rejectUnauthorized: false, // Ajusté pour Render si le certificat est auto-signé
        },
    },
    logging: false, // Optionnel : désactiver les logs SQL
    define: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored: true, // Utilise snake_case pour les colonnes
    },
});

export { sequelizeClient };
