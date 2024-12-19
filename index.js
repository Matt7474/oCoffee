import 'dotenv/config';
import express from 'express';
import session from 'express-session'

import cors from 'cors';

import dotenv from 'dotenv';
import { sequelizeClient } from './app/database/sequelize.js';
dotenv.config();

import { router } from './app/routers/index.js';
import { join } from 'node:path';

const app = express();

//!
app.use((req, res, next) => {
    const allowedIPs = ['http://88.178.106.19'];
    const requestIP = req.ip; // Peut nécessiter un middleware comme `request-ip` pour une meilleure détection
    if (allowedIPs.includes(requestIP)) {
        next();
    } else {
        res.status(403).json({ message: 'Accès refusé' });
    }
});


//! cors
app.use(
    cors({
        origin: 'http://88.178.106.19'
    })
);




(async () => {
    try {
        await sequelizeClient.authenticate();
        console.log('Connexion à la base de données réussie!');
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
    }
})();

app.set('view engine', 'ejs');
app.set('views', join(import.meta.dirname, './app/views'));

app.use(express.static(join(import.meta.dirname, './public')));
app.use(express.urlencoded({extended : true}))

app.use(express.json());


app.use(session({
    secret: 'ocoffee',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 6000000}, 
}));
app.use((req, res, next) => {
    if(req.session?.user){
        res.locals.user = req.session.user;
    }
    next()
});


app.use(router);

app.use((req, res) => {
    res.status(404).render("404")
});


const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || 'http://localhost';
app.listen(port, () => {
    console.log(`Listening on ${baseUrl}:${port}`);
});