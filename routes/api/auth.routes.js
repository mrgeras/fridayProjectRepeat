const apiAuthRoutes = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
// * регистрация
apiAuthRoutes.post('/register', async (req, res) => {
  try {
    const { login, password, password2 } = req.body;

    // * проверка что все поля заполнены
    if (!(login && password && password2)) {
      res
        .status(402)
        .json({ success: false, message: 'Заполните пожайлуста все поля' });
      return;
    }
    // * проверка совпадения паролей
    if (password !== password2) {
      res.status(403).json({ success: false, message: 'Пароли не совпадают' });
      return;
    }

    // * проверка есть ли такой login в БД
    const extenseUser = await User.findOne({ where: { login } });
    if (extenseUser) {
      res.status(409).json({
        success: false,
        message: 'Пользователь с таким логином уже существует',
      });
      return;
    }

    // * создаем пользователя в БД
    const user = await User.create({
      login,
      password: await bcrypt.hash(password, 10),
      count: 0,
    });

    // * авторизация - запоминаем пользователя
    // * req.session - хранилище сессии, которое уникально для каждого браузера

    req.session.userId = user.id;

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);

    // возвращаем клиенту ошибку (возможно легла БД или переполнился диск)

    res.status(500).json({
      success: false,
      message: 'возможно легла БД или переполнился диск',
    });
  }
});
// * авторизация
apiAuthRoutes.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body;

    if (!(login && password)) {
      res
        .status(402)
        .json({ success: false, message: 'Заполните пожайлуста все поля' });
      return;
    }

    const user = await User.findOne({ where: { login } });

    // * валидация пароля
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!user || !passwordValid) {
      res
        .status(401)
        .json({ success: false, message: 'Неверный пароль или логин' });
      return;
    }

    // * авторизация - запоминаем пользователя
    // * req.session - хранилище сессии, которое уникально для каждого браузера

    req.session.userId = user.id;
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);

    // * возвращаем клиенту ошибку (возможно легла БД или переполнился диск)

    res.status(500).json({
      success: false,
      message: 'Возможно легла БД или переполнился диск',
    });
  }
});

module.exports = apiAuthRoutes;
