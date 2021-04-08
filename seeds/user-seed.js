const { User } = require('../models');

const userData = [
  {
    username: 'Jeff',
    password: "password12345"
  },
  {
    username: 'Lauren',
    password: "password12345"
  },
  {
    username: 'Lassett',
    password: "password12345"
  },
  {
    username: 'Kelsey',
    password: "password12345"
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;