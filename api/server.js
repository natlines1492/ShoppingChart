//api/server.js

// const express = require('express');
// const models = require('./models');
// const cors = require('cors');

// const server = express();

// server.use(cors()) // enable all cors requests in app

// //Para que los datos esten en formato JSON

// server.use(express.json());

// //Ahora aqui configuramos las rutas:

// server.get("/products", async (req, res) => {
//   const products = await models.Product.findAll();

//   //res.setHeader("Access-Control-Allow-Origin", "*");  //cualquier consumidor puede obtener información del api;
//   res.json({ products });
// });

// server.post("/cart/upsert", async (req, res) => {
//   const quantity = req.body.quantity;

//   const productId = req.body.productId;

//   const productDb = await models.Product.findOne({
//     where: {
//       id: productId,
//     },
//   });

//   console.log(productDb);

//   if (!productDb) {
//     return res.send("The product does not exist");
//   }

//   const order = await models.Order.findOne({
//     include: [models.OrderItem],
//   });

//   const orderItems = order.OrderItems;

//   const orderItem = orderItems.find((item) => {
//     return item.ProductId === productId;
//   });

//   console.log("Buscando la orden");
//   console.log(order.toJSON());

//   if (!orderItem) {
//     await models.OrderItem.create({
//       quantity,
//       OrderId: order.id,
//       ProductId: productId,
//     });

//     return res.send({
//       created: true,
//     });
//   }

//   if (quantity === 0) {
//     await models.OrderItem.destroy({
//       where: {
//         id: orderItem.id,
//       },
//     });

//     return res.send({
//       deleted: true,
//     });
//   }

//   if (quantity > 0) {
//     await orderItem.update({
//       quantity,
//     });

//     return res.send({
//       updated: true,
//     });
//   }
// });

// server.get("/cart", async (req, res) => {
//   const order = await models.Order.findOne({
//     include: [
//       {
//         model: models.OrderItem,
//         include: [models.Product],
//       },
//     ],
//   });

//   const cleanCart = {
//     total: order.total,
//     subtotal: order.subtotal,
//     shipping: order.shipping,
//     taxes: order.taxes,
//     numberOfProducts: order.OrderItems.length,
//     orderItems: order.OrderItems.map(orderItem => {
//       return {
//         id: orderItem.id,
//         quantity: orderItem.quantity,
//         productId: orderItem.ProductId,
//         productImage: orderItem.Product.image,
//         productName: orderItem.Product.name,
//         productBrand: orderItem.Product.brand,
//         productPresentation: orderItem.Product.presentation,
//         productPrice: orderItem.Product.price,
//       }
//     })
//   };

//   //res.setHeader("Access-Control-Allow-Origin", "*");

//   return res.json(cleanCart)
// });

// server.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

const express = require("express");
const cors = require("cors");
const randomize = require("randomatic");
const models = require("./models");

const server = express();

server.use(express.json());

server.use(cors());

server.post("/cart", async (req, res) => {
  const quantity = req.body.quantity;

  const productId = req.body.productId;

  const productDb = await models.Product.findOne({
    where: {
      id: productId,
    },
  });

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

  if (!orderItem) {
    await models.OrderItem.create({
      quantity,
      OrderId: order.id,
      ProductId: productId,
    });
  }

  if (orderItem && quantity === 0) {
    await models.OrderItem.destroy({
      where: {
        id: orderItem.id,
      },
    });
  }

  if (orderItem && quantity > 0) {
    await orderItem.update({
      quantity,
    });
  }

  const updatedItems = await order.getOrderItems({
    include: [models.Product],
  });

  let subtotal = 0;

  updatedItems.forEach((item) => {
    subtotal += item.quantity * item.Product.price;
  });

  const shipping = subtotal * 0.01;

  const taxes = (subtotal + shipping) * 0.07;

  const total = subtotal + shipping + taxes;
  console.log("Este es el total");
  console.log(total);

  await order.update({ total, subtotal, shipping, taxes });

  return res.send({ success: true });
});

server.get("/products", async (req, res) => {
  const products = await models.Product.findAll();

  res.json({ products });
});

server.get("/cart", async (req, res) => {
  const order = await models.Order.findOne({
    include: [
      {
        model: models.OrderItem,
        include: [models.Product],
      },
    ],
  });

  const cleanCart = {
    total: order.total,
    code: order.code,
    subtotal: order.subtotal,
    shipping: order.shipping,
    taxes: order.taxes,
    numberOfProducts: order.OrderItems.length,
    orderItems: order.OrderItems.map((orderItem) => {
      return {
        id: orderItem.id,
        quantity: orderItem.quantity,
        productId: orderItem.ProductId,
        productImage: orderItem.Product.image,
        productName: orderItem.Product.name,
        productBrand: orderItem.Product.brand,
        productPresentation: orderItem.Product.presentation,
        productPrice: orderItem.Product.price,
      };
    }),
  };

  return res.json(cleanCart);
});

server.post("/order/confirm", async (req, res) => {
  const cart = await models.Order.findOne();

  await cart.update({ code: randomize("A", 5) });

  return res.json({ confirmed: true });
});

server.listen(3000, () => {
  console.log("Hey 👋 I am listening in port 3000");
});
