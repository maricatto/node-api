const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

//Primeira rota
routes.get("/products", ProductController.index);
//Buscar o produto
routes.get("/products/:id", ProductController.show);
//Atualizar
routes.put("/products/:id", ProductController.update);
//deletar
routes.delete("/products/:id", ProductController.destroy);
//Criar algo
routes.post("/products", ProductController.store);

module.exports = routes;
