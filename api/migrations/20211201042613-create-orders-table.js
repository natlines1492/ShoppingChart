'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Orders", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      total: Sequelize.DECIMAL(11, 2),
      subtotal: Sequelize.DECIMAL(11, 2),
      shipping: Sequelize.DECIMAL(11, 2),
      taxes: Sequelize.DECIMAL(11, 2),
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Orders");
  },
};
