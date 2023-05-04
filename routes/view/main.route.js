const router = require('express').Router();
const MainPage = require('../../components/MainPage');
const { Theme } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll({ order: [['createdAt', 'DESC']] });
    console.log(themes);
    res.send(
      res.renderComponent(MainPage, { title: 'Главная страница', themes })
    );
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
});

module.exports = router;
