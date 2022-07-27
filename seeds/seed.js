const sequelize = require('../config/connection');
const { X, Y, Z} = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // logic for seed data

  process.exit(0);
};

seedDatabase();