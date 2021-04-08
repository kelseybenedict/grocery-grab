const { List } = require('../models');

const listData = [
  {
    list_name: "Jeff's List",
    user_id: 1
  },
  {
    list_name: "Lauren's List",
    user_id: 2
  },
  {
    list_name: "Lassetts's List",
    user_id: 3
  },
  {
    list_name: "Kelsey's List",
    user_id: 4
  },
];

const seedList = () => List.bulkCreate(listData);

module.exports = seedList;