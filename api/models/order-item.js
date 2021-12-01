const OrderItem = (sequelize, Sequelize) => {
  const model = sequelize.define(
    "OrderItem",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  model.associate = (models) => {
    model.belongsTo(models.Order);
    
    model.belongsTo(models.Product);
  };

  return model;
};

module.exports = OrderItem;