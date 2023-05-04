require('@babel/register');
const express = require('express');
const session = require('express-session');
const path = require('path');
require('dotenv').config();
const morgan = require('morgan');
const getUser = require('./middleware/getUser');
const ssr = require('./middleware/ssr');
const sessionConfig = require('./config/session');


const mainRoute = require('./routes/view/main.route'); // главная страница

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(session(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(getUser);
app.use(ssr);
app.use(morgan('dev'));

app.use('/', mainRoute);

app.listen(PORT, () => console.log(`Сервируем сервер ${PORT} персон`));
