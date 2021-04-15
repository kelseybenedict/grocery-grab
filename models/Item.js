const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class List extends Model {}

List.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    project_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'project',
          key: 'id',
        },
      },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'list',
  }
);

module.exports = List;