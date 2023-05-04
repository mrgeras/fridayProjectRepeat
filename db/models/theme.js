'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Card }) {
      this.hasMany(Card, { foreignKey: 'theme_id' });
    }
  }
  Theme.init(
    {
      theme: {
        allowNull: false,
        type: DataTypes.TEXT,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Theme',
    }
  );
  return Theme;
};
