const { Theme, Card } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Theme.bulkCreate(
      [
        {
          theme: 'Animal',
          Cards: [
            {
              question: 'Самое быстрое животное',
              answer: 'Леопард',
            },
            {
              question: 'Самое медленное животное',
              answer: 'Черепаха',
            },
            {
              question: 'Самое большое млекопитающее',
              answer: 'Кит',
            },
          ],
        },
        {
          theme: 'Earth',
          Cards: [
            {
              question: 'Больше 70 % земной поверхности покрыто…',
              answer: 'Вода',
            },
            {
              question: 'Что такое землетрясение?',
              answer: 'Стихия',
            },
            {
              question: 'Что такое Земля?',
              answer: 'Планета',
            },
          ],
        },
        {
          theme: 'О, женщины!',
          Cards: [
            {
              question: 'Что относится к миру обуви: вьетнамки или перуанки?',
              answer: 'вьетнамки',
            },
            {
              question:
                'Какое слово не принадлежит к миру моды: пончо или пончик?',
              answer: 'пончик',
            },
            {
              question:
                'Какой купальник является совместным: бикини или монокини?',
              answer:
                'монокини (совместный купальник с глубокими вырезами по бокам)',
            },
          ],
        },
        {
          theme: 'Что-то около ПК',
          Cards: [
            {
              question: 'Ламер в компьютерном мире – это спец или слабак?',
              answer: 'слабак',
            },
            {
              question:
                'Как называется сайт, дублирующий информацию основного сайта?',
              answer: 'зеркало',
            },
            {
              question:
                'На что ориентировался Гоша Бабаян, когда придумывал название для ElbrusBootcamp?',
              answer: 'процессор "Эльбрус"',
            },
          ],
        },
      ],
      {
        include: [Card],
      }
    );
  },

  async down() {
    await Theme.destroy({ truncate: { cascade: true } });
  },
};
