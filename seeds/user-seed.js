const { User } = require('../models');

const userData = [
  {
    email: 'jeffcam12@gmail.com',
    password: "password12345"
  },
  {
    email: 'Lauren',
    password: "password12345"
  },
  {
    email: 'Lassett',
    password: "password12345"
  },
  {
    email: 'Kelsey',
    password: "password12345"
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;