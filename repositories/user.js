const api = require("../core/api");

module.exports = {
  register: async (req) => {
    return await api("POST", "/users/register", null, req.body);
  },
  login: async (req) => {
    return await api("POST", "/users/auth", null, req.body);
  },
  list: async (req) => {
    return await api("GET", "/users", req.session.token || null, req.body);
  },
  user: async (req) => {
    return await api("GET", `/users/${req.params.id}`, req.session.token || null, req.body);
  },
  card: async (req) => {
    return await api("GET", `/users/${req.params.id}/cards`, req.session.token || null, req.body);
  },
  update: async (req) => {
    return await api("PATCH", `/users/${req.params.id}`, req.session.token || null, req.body);
  }
};