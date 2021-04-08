const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model {}

Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        item_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quanity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
              isNumeric: true
            }
        },
        list_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'list',
              key: 'id',
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'item',
}
);

module.exports = Item;