//api/server.js

const express = require('express');
const models = require('./models');

const server = express();

//Para que los datos esten en formato JSON

server.use(express.json());

//Ahora aqui configuramos las rutas:

server.get("/products", async (req, res) => {
  const products = await models.Product.findAll();

  res.setHeader("Access-Control-Allow-Origin", "*");  //cualquier consumidor puede obtener información del api;
  res.json({ products });
});

server.post("/cart/upsert", async (req, res) => {
  const quantity = req.body.quantity;

  const productId = req.body.productId;

  const productDb = await models.Product.findOne({
    where: {
      id: productId,
    },
  });

  console.log(productDb);

  if (!productDb) {
    return res.send("The product does not exist");
  }

  const order = await models.Order.findOne({
    include: [models.OrderItem],
  });

  const orderItems = order.OrderItems;

  const orderItem = orderItems.find((item) => {
    return item.ProductId === productId;
  });

  console.log("Buscando la orden");
  console.log(order.toJSON());

  if (!orderItem) {
    await models.OrderItem.create({
      quantity,
      OrderId: order.id,
      ProductId: productId,
    });

    return res.send({
      created: true,
    });
  }

  if (quantity === 0) {
    await models.OrderItem.destroy({
      where: {
        id: orderItem.id,
      },
    });

    return res.send({
      deleted: true,
    });
  }

  if (quantity > 0) {
    await orderItem.update({
      quantity,
    });

    return res.send({
      updated: true,
    });
  }
});

server.get("/cart", async (req, res) => {
  const order = await models.Order.findOne({
    include: [models.OrderItem],
  });

  const cleanCart = {
    total: order.total,
    subtotal: order.subtotal,
    shipping: order.shipping,
    taxes: order.taxes,
    numberOfProducts: order.OrderItems.length,
    orderItems: order.OrderItems.map(orderItem => {
      return {
        quantity: orderItem.quantity,
        productId: orderItem.ProductId
      }
    })
  };

  res.setHeader("Access-Control-Allow-Origin", "*");

  return res.json(cleanCart)
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});