'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({Theme}) {
      this.belongsTo(Theme, { foreignKey: 'theme_id' });
    }
  }
  Card.init(
    {
      theme_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Themes',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      question: {
        allowNull: false,
        type: DataTypes.TEXT,
        unique: true,
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Card',
    }
  );
  return Card;
};
