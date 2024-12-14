import 'dotenv/config';
import express from 'express';
import session from 'express-session'


import { router } from './app/routers/index.js';
import { join } from 'node:path';

const app = express();


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