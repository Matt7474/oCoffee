import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

const sequelizeClient = new Sequelize(process.env.PG_URL, {
    dialect: 'postgres',
    logging: !isProduction, // Désactiver les logs en production
    define: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored: true, // Utiliser snake_case pour les colonnes générées automatiquement
    },
});

export { sequelizeClient };
