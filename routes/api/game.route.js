const React = require('react');
const ReactDOMServer = require('react-dom/server');
const router = require('express').Router();
const RightAnswer = require('../../components/RightAnswer');
const { Card } = require('../../db/models');
const AllCards = require('../../components/AllCards');



router.get('/:id', async (req, res) => {
  try {
    const idTheme = Number(req.params.id);

    const questions = await Card.findAll({ where: { theme_id: idTheme } });

    //проверяем количесво вопросов
    const countQuest = questions.length;

    res.renderComponent(AllCards, { title: 'Вопрос', questions });
    // }
  } catch (error) {
    console.log(error);
  }
});

router.put('/:idQuestion/put', async (req, res) => {
  try {
    const userAnswer = req.body.ans;
    // console.log(userAnswer, '++++++++++++++++++++++++++++++');
    const question = await Card.findOne({
      where: { id: req.params.idQuestion },
    });
    // console.log(question);
    if (userAnswer === question.answer) {
      const elem = React.createElement(RightAnswer, {
        id: question.theme_id,
      });
      const html = ReactDOMServer.renderToStaticMarkup(elem);
      // console.log(html);
      res.status(201).json(html);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
