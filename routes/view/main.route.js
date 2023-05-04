const router = require('express').Router();
const LoginPage = require('../../components/LoginPage');
const MainPage = require('../../components/MainPage');
const RegisterPage = require('../../components/RegisterPage');
const { Theme } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll({ order: [['createdAt', 'DESC']] });
    // console.log(themes);
    res.send(
      res.renderComponent(MainPage, { title: 'Главная страница', themes })
    );
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
});
router.get('/auth/login', async (req, res) => {
  try {
    // const themes = await Theme.findAll({ order: [['createdAt', 'DESC']] });
    // console.log(themes);
    res.send(
      res.renderComponent(LoginPage, { title: 'Авторизация' })
    );
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
});
router.get('/auth/register', async (req, res) => {
  try {
    // const themes = await Theme.findAll({ order: [['createdAt', 'DESC']] });
    // console.log(themes);
    res.send(
      res.renderComponent(RegisterPage, { title: 'Регистрация' })
    );
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
});

router.get('/logout', (req, res) => {
  // удаление сессии
  req.session.destroy(() => {
    // очищаем куку (название куки лежит в config/session.js свойство cookie.name)
    res.clearCookie('user_sid');
    res.redirect('/');
  });
});



module.exports = router;
