const router = require('express').Router();

const { Card } = require('../../db/models');
const Question = require('../../components/Question');

router.get('/:id', async (req, res) => {
  try {
    const idTheme = Number(req.params.id);

    const questions = await Card.findAll({ where: { theme_id: idTheme } });

    //проверяем количесво вопросов
    const countQuest = questions.length;
    // console.log(countQuest);
    if (!req.session.index) {
      req.session.index = 0;
      const question = questions[req.session.index];
      //   console.log(question.answer);
      res.send(res.renderComponent(Question, { title: 'Вопрос', question }));
    } else {
      req.session.index += 1;
      const question = questions[req.session.index];
      res.send(res.renderComponent(Question, { title: 'Вопрос', question }));
    }
  } catch (error) {
    console.log(error);
  }
});

router.put('/:idQuestion/put', async (req, res) => {
  try {
    const userAnswer = req.body.ans;
    console.log(userAnswer, '++++++++++++++++++++++++++++++');
    const question = await Card.findOne({
      where: { id: req.params.idQuestion },
    });

      if(userAnswer === question.answer) {
        console.log('УРА идем на обед');
      }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
