'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("OrderItems", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      OrderId: { //Relation to Order Model
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Orders",
          },
          key: "id",
        },
        allowNull: false,
      },
      ProductId: { //Relation to Order Model
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Products",
          },
          key: "id",
        },
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("OrderItems");
  },
};
