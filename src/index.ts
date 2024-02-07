import { sequelize } from "./db";
import express from "express";
import { User } from "./db/user";
import { Product } from "./db/product";

const app = express();
const port = 3005 || process.env.PORT;
app.use(express.json());
// optiene  todos los produyctus
app.get("/product", async (req, res) => {
  const allProducts = await Product.findAll();
  res.send({ allProducts });
});

// crea un  producto nuevo

app.post("/product", async (req, res) => {
  const { title, precio } = req.body;
  const newProduct = await Product.create({
    title,
    precio,
  });
  res.send({ newProduct });
});

// optiene  productos  por id
app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  res.send({ product });
});

// modifiuca un porducto
app.patch("/product/:id", async (req, res) => {
  const { id } = req.params;
  const { title, precio } = req.body;
  const product = await Product.findByPk(id);
  await product.update({
    title,
    precio,
  });
  res.send({ product });
});
// elimina un porducto
app.delete("/product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  await product.destroy();
  res.send({ product });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
//   await sequelize.sync({ alter: true });
//   //   const julian = await User.create({
//   //     name: "Julian",
//   //     email: "julian@julian",
//   //     birthday: "1992-12-12",
//   //     lastname: "Perez",
//   //   });
//   //   //console.log(julian.toJSON(), " User create");
//   //   const users = await User.findAll();
//   //   console.log({ users }, "User findAll");

//   const newProduct = await Product.create({
//     title: "Product 1",
//     precio: 100,
//   });
//   console.log({ newProduct }, "Product create");

//   //   const products = await Product.findAll();
//   //   console.log({ products }, "Product findAll");
// })();
