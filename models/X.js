const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class X extends Model {}

X.init(
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
    modelName: 'x',
  }
);

module.exports = X;