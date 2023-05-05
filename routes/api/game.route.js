const router = require('express').Router();

const { Card } = require('../../db/models');
const Question = require ('../../components/Question')

router.get('/:id', async (req, res) => {
  try {
    const idTheme = Number(req.params.id);

    const questions = await Card.findAll({ where: { theme_id: idTheme } });
    // console.log(questions);
//проверяем количесво вопросов
const countQuest = questions.length;
// console.log(countQuest);
    if (!req.session.index) {
      req.session.index = 0;
      const question = questions[req.session.index]
      res.send(
        res.renderComponent(Question, { title: 'Вопрос' , question})
      );
    } else {
      req.session.index += 1;
      const question = questions[req.session.index]
      res.send(
        res.renderComponent(Question, { title: 'Вопрос', question })
      );
      
    }
    if(kjjhj){}
  } catch (error) {}
});

module.exports = router;
