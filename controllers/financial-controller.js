const api = require("../core/api");

const financialControllers = {
  createCharge: async (req, res, next) => {
    try {
      const createCharge = await api("POST", "/charges", null, req.body);
      return res.send(createCharge.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  cancelCharge: async (req, res, next) => {
    try {
      const id = req.params.id;
      const cancelCharge = await api("PUT", `/charges/${id}/cancelation`);
      return res.send(cancelCharge.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  tokenCreditCard: async (req, res, next) => {
    try {
      const token = await api(
        "POST",
        "/credit-cards/tokenization",
        null,
        req.body
      );
      res.send(token.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  paymentCharge: async (req, res, next) => {
    try {
      const payment = await api("POST", "/payments", req.body);
      res.send(payment.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  refundsPayment: async (req, res, next) => {
    try {
      const id = req.params.id;
      const refund = await api("POST", `/payments/${id}/refunds`, req.body);
      res.send(refund.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  capturePayment: async (req, res, next) => {
    try {
      const id = req.params.id;
      const capture = await api("POST", `/payments/${id}/capture`, req.body);
      res.send(capture.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
};

module.exports = financialControllers;
