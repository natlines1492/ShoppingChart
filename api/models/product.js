
const Product = (sequelize, Sequelize) => {
  const model = sequelize.define(
    "Product", 
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      image: Sequelize.STRING,
      name: Sequelize.STRING,
      brand: Sequelize.STRING,
      presentation: Sequelize.STRING,
      price: Sequelize.DECIMAL(11, 4),
    },
    {
      timestamps: false,
    }
  );

  return model;
};

module.exports = Product;