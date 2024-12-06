import 'dotenv/config';
import express from 'express';
import session from 'express-session'

import { router } from './app/router.js';
import { join } from 'node:path';

const app = express();


app.set('view engine', 'ejs');
app.set('views', join(import.meta.dirname, './app/views'));

app.use(express.static(join(import.meta.dirname, './public')));
app.use(express.urlencoded({extended : true}))


app.use(router);

app.use((req, res) => {
    res.status(404).render("404")
});


const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || 'http://localhost';
app.listen(port, () => {
    console.log(`Listening on ${baseUrl}:${port}`);
});