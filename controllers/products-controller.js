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
    // registerProducts: async (req, res, next) => {
    //   try {
    //     const product = await api(req, "post", "/products/register", req.body);
    //     return res.status(201).send(product);
    //   } catch (err) {
    //     return res.status(400).send({ error: "Registration product failed" });
    //   }
    // },
  };
  
  module.exports = productsController;