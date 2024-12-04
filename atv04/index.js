const express = require("express");
const app = express();
const port = 3000;

// Definir o array de produtos fora das rotas
let products = [
  { id: 1, name: "Notebook", price: 2500 },
  { id: 2, name: "Smartphone", price: 1500 },
];

// Rota GET para obter a lista de produtos
app.get("/products", (req, res) => {
  res.json(products);
});

// Middleware para interpretar o corpo da requisição como JSON
app.use(express.json());

// Rota POST para adicionar um novo produto
app.post("/products", (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1; // Gerar um ID único para o novo produto
  products.push(newProduct); // Adicionar o novo produto ao array
  res.status(201).json(newProduct); // Retornar o novo produto com status 201
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
