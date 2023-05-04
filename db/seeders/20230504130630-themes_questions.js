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
