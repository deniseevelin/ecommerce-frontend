const api = require("../core/api");

const productRepository = {
  list: async () => {
    return await api("GET", "/products", null);
  },
  product: async (req) => {
    return await api("GET", `/products/${req.params.id}`, null);
  },
  register: async (req) => {
    return await api("POST", "/products/register", null, req.body);
  },
  update: async (req) => {
    return await api("PUT", `/products/${req.params.id}`, null, req.body);
  },
  remove: async (req) => {
    return await ("DELETE", `/products/${req.params.id}`, null);
  },
};

module.exports = productRepository;
