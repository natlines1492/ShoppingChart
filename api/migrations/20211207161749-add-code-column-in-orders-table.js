'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('Orders', 'code', {
      type: Sequelize.DataTypes.STRING,
      after: 'id'
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Orders', 'code')
  }
};
