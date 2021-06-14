const api = require("../../core/api");

const financialControllers = {
  getBalance: async (req, res, next) => {
    try {
      req = null;
      const balance = await api(req, "get", "/balance");
      return res.send(balance.data);
    } catch (err) {
      return res.status(400).send({ error: "Error find balance!" });
    }
  },
  getCharges: async (req, res, next) => {
    try {
      const charges = await api(req, "get", "/charges");
      return res.send(charges.data);
    } catch (err) {
      return res.status(400).send({ error: "Error find charges!" });
    }
  },
  consultCharge: async (req, res, next) => {
    try {
      const id = req.params.id;
      const consultCharge = await api(req, "get", `/charges/${id}`);
      return res.send(consultCharge.data);
    } catch (err) {
      return res.status(400).send({ error: "Error find charge!" });
    }
  },
  updateSplit: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updateSplit = await api("put", `/charges/${id}/split`);
      return res.send(updateSplit.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  }
}

module.exports = financialControllers;
