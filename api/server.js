//api/server.js

const express = require('express');
const db = require('./models');

const server = express();

//Para que los datos esten en formato JSON

server.use(express.json());

//Ahora aqui configuramos las rutas:

server.get("/products", async (req, res) => {
  const products = await db.Product.findAll();

  res.setHeader("Access-Control-Allow-Origin", "*");  //cualquier consumidor puede obtener información del api

  res.json({ products });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});