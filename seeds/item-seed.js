const { Item } = require('../models');

const itemData = [
  {
    item_name: 'Bacon',
    quantity: 1,
    list_id: 1
  },
  {
    item_name: 'Eggs',
    quantity: 12,
    list_id: 1
  },
  {
    item_name: 'Milk',
    quantity: 1,
    list_id: 2
  },
  {
    item_name: 'Cereal',
    quantity: 2,
    list_id: 2
  },
  {
    item_name: 'Bagel',
    quantity: 6,
    list_id: 3
  },
  {
    item_name: 'Cream Cheese',
    quantity: 1,
    list_id: 3
  },
  {
    item_name: 'Banana',
    quantity: 5,
    list_id: 3
  },
  {
    item_name: 'Peanut Butter',
    quantity: 5,
    list_id: 4
  },
];

const seedItem = () => Item.bulkCreate(itemData);

module.exports = seedItem;