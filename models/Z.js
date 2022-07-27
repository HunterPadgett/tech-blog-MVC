const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Z extends Model {}

Z.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'z',
  }
);

module.exports = Z;