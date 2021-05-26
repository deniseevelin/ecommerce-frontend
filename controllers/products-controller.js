const api = require("../core/api");


const productsController = {
    getAllProducts: async (req, res, next) => {
      try {
        const products = await api(req, "get", "/products");
        return res.send(products.data);
      } catch (err) {
        return res.status(400).send({ error: "Error finding products!" });
      }
    },
    getByIdProducts: async (req, res, next) => {
      try {
        const id = req.params.id;

        const products = await api(req, "get", `/products/${id}`);
        return res.send(products);
      } catch (err) {
        return res.status(400).send({ error: "Error finding products!" });
      }
    },
    ProductId: async (req, res, next) => {
      res.render("products.ejs");
    },
    registerProduct: async (req, res, next) => {
      const data = req.body;
    try {
      const registerProducts = await api(req, "post", "/products/register", data);
      if (registerProducts.error) throw new Error(registerProducts.error);
      res.status(201).send(registerProducts);
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: err.message });
    }
  },
    Cart: async (req, res, next) => {
      res.render("cart.ejs");
    }
  };
  
  module.exports = productsController;