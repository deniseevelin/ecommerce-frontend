const api = require("../core/api");

const productRepository = {
  getAllProducts: async (req, res) => {
    let products = await api(req, "get", "/products");
    return products.data;
  },
  getByIdProducts: async (req, id) => {
    let products = await api(req, "get", `/products/${id}`);
    return products.data;
  },
  registerProduct: async (req, res) => {
    let registerProducts = await api(req, "post", "/products/register", req.body);
    return registerProducts.data;
  },
  updateProduct: async (req, res) => {
    let upProduct = await api(req, "patch", `/products/${req.params.id}`, req.body);
    return upProduct.data;
  },
  removeProduct: async (req, res) => {
    let deleteProduct = await (req, "delete", `/products/${req.params.id}`);
    return deleteProduct.data;
  },
};

module.exports = productRepository;
