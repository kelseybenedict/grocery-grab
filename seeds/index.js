const seedUser = require('./user-seed');
const seedList = require('./list-seed');
const seedItem = require('./item-seed');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedList();
  console.log('\n----- LISTS SEEDED -----\n');

  await seedItem();
  console.log('\n----- ITEMS SEEDED -----\n');

  process.exit(0);
};

seedAll();