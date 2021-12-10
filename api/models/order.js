const Order = (sequelize, Sequelize) => {
  const model = sequelize.define(
    "Order",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      code: Sequelize.STRING,
      total: Sequelize.DECIMAL(11, 2),
      subtotal: Sequelize.DECIMAL(11, 2),
      shipping: Sequelize.DECIMAL(11, 2),
      taxes: Sequelize.DECIMAL(11, 2),
    },
    {
      timestamps: false,
    }
  );

  model.associate = (models) => {
    model.hasMany(models.OrderItem)
  }

  return model;
};

module.exports = Order;