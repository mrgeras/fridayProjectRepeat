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

const authApiRoute = require('./routes/api/auth.routes'); // главная страница
const authRoute = require('./routes/view/auth.routes');
const gameRoute = require('./routes/api/game.route'); // игра


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

app.use('/auth', authRoute);
app.use('/api/auth/', authApiRoute);

app.use('/api/game/', gameRoute);


app.listen(PORT, () => console.log(`Сервируем сервер на ${PORT} персон`));
