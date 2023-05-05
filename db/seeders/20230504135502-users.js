const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          login: 'Федор',
          password: await bcrypt.hash('123', 10),
          count: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          login: 'Петя',
          password: await bcrypt.hash('123', 10),
          count: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
