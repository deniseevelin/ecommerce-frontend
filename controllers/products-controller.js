const productRepository = require("../repositories/products-repository");

const productsController = {
  renderAllProducts: async (req, res, next) => {
    try {
      let products = await productRepository.getAllProducts(req, res);
      res.render("allproducts.ejs", { products });
    } catch (err) {
      return res.status(400).send({ error: "Error finding products!" });
    }
  },
  renderProductsById: async (req, res, next) => {
    const { id } = req.params;
    try {
      let product = await productRepository.getByIdProducts(req, id);
      console.log(product)
      res.render("product-details.ejs", { product });
    } catch (err) {
      return res.status(400).send({ error: "Error finding product!" });
    }
  },
  renderRegisterProduct: async (req, res, next) => {
    const data = req.body;
    try {
      let registerProducts = await productRepository.registerProduct(data);
      if (registerProducts.error) throw new Error(registerProducts.error);
      res.render("products.ejs", {
        message: `Produto ${registerProducts.name} cadastrado com sucesso!`,
      });
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  renderUpdateProduct: async (req, res, next) => {
    const data = req.body;
    const { id } = req.params;
    try {
      let upProduct = await productRepository.updateProduct(id, data);
      res.render("products.ejs", {
        message: `Produto ${upProduct} atualizado com sucesso!`,
      });
    } catch (err) {
      return res.status(400).send({ error: "Updating product failed" });
    }
  },
  renderRemoveProduct: async (req, res, next) => {
    const { id } = req.params;
    try {
      let deleteProduct = await productRepository.deleteProduct(id);
      res.render("products.ejs", {
        message: `Produto ${deleteProduct} deletado com sucesso!`,
      });
    } catch (err) {
      return res.status(400).send({ error: "Delete product failed" });
    }
  },
};

module.exports = productsController;
