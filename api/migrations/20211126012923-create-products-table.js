'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      image: Sequelize.STRING,
      name: Sequelize.STRING,
      brand: Sequelize.STRING,
      presentation: Sequelize.STRING,
      price: Sequelize.DECIMAL(11,4),
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  },
};
