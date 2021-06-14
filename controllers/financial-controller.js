const api = require("../core/api");

const financialControllers = {
  createCharge: async (req, res, next) => {
    try {
      const createCharge = await api(req, "post", "/charges", req.body);
      console.log(createCharge);
      return res.send(createCharge.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  cancelCharge: async (req, res, next) => {
    try {
      const id = req.params.id;
      const cancelCharge = await api("put", `/charges/${id}/cancelation`);
      return res.send(cancelCharge.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  tokenCreditCard: async (req, res, next) => {
    try {
      const hash = req.body;
      const token = await api("post", "/credit-cards/tokenization", hash);
      return res.send(token.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  paymentCharge: async (req, res, next) => {
    try {
      const payment = await api("post", "/payments", req.body);
      res.send(payment.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  refundsPayment: async (req, res, next) => {
    try {
      const id = req.params.id;
      const refund = await api("post", `/payments/${id}/refunds`, req.body);
      res.send(refund.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  capturePayment: async (req, res, next) => {
    try {
      const id = req.params.id;
      const capture = await api("post", `/payments/${id}/capture`, req.body);
      res.send(capture.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
};

module.exports = financialControllers;
