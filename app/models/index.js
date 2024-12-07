import { Caracteristic } from './Caracteristic.js';
import { Coffee } from './Coffee.js';
import { Disponibility } from './Disponibility.js';
import { Origin } from './Origin.js';
// import / export du client pour le mettre au courant que nos modèles sont associés
import { sequelizeClient } from '../database/sequelize.js';


Coffee.belongsTo(Origin, {
    foreignKey: 'origin_id',
    as: 'origin',
});
Origin.hasMany(Coffee, {
    foreignKey: 'origin_id',
    as: 'coffees',
});


Coffee.belongsTo(Caracteristic, {
    foreignKey: 'caracteristic_id',
    as: 'caracteristic',
});
Caracteristic.hasMany(Coffee, {
    foreignKey: 'caracteristic_id',
    as: 'coffees',
});


Coffee.belongsTo(Disponibility, {
    foreignKey: 'disponibility_id',
    as: 'disponibility',
});
Disponibility.hasMany(Coffee, {
    foreignKey: 'disponibility_id',
    as: 'coffees',
});


export {
    Coffee,
    Origin,
    Caracteristic,
    Disponibility,
    sequelizeClient,
};
