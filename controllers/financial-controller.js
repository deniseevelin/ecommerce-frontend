const api = require("../core/api");

const financialControllers = {
  getBanksInformation: async (req, res, next) => {
    try {
      req = null;
      const banks = await api(req, "get", "/data/banks");
      return res.send(banks.data);
    } catch (err) {
      return res.status(400).send({ error: "Error find banks!" });
    }
  },
  getCompanyTypes: async (req, res, next) => {
    try {
      req = null;
      const companysType = await api(req, "get", "/data/company-types");
      return res.send(companysType.data);
    } catch (err) {
      return res.status(400).send({ error: "Error find company types!" });
    }
  },
  getBusinessAreas: async (req, res, next) => {
    try {
      req = null;
      const businessAreas = await api(req, "get", "/data/business-areas");
      return res.send(businessAreas.data);
    } catch (err) {
      return res.status(400).send({ error: "Error find business areas!" });
    }
  },
  getAccount: async (req, res, next) => {
    try {
      req = null;
      const account = await api(req, "get", "/digital-accounts");
      return res.send(account.data);
    } catch (err) {
      return res.status(400).send({ error: "Error find accounts!" });
    }
  },
  getBalance: async (req, res, next) => {
    try {
      req = null;
      const balance = await api(req, "get", "/balance");
      return res.send(balance.data);
    } catch (err) {
      return res.status(400).send({ error: "Error find balance!" });
    }
  },
  createAccount: async (req, res, next) => {
    try {
      const create = await api(req, "post", "/digital-accounts", req.body);
      return res.send(create.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  getRequireDocuments: async (req, res, next) => {
    try {
      req = null;
      const requireDocuments = await api(req, "get", "/documents");
      return res.send(requireDocuments.data);
    } catch (err) {
      return res
        .status(400)
        .send({ error: "Error finding necessary documents to send!" });
    }
  },
  getStatusDocuments: async (req, res, next) => {
    try {
      const id = req.params.id;
      req = null;
      const statusDocuments = await api(req, "get", `/documents/${id}`);
      return res.send(statusDocuments.data);
    } catch (err) {
      return res.status(400).send({ error: "Error finding status documents!" });
    }
  },
  sendDocuments: async (req, res, next) => {
    try {
      const id = req.params.id;
      const sendDocuments = await api(
        "post",
        `/documents/${id}/files`,
        req.body
      );
      return res.send(sendDocuments.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  updateAccount: async (req, res, next) => {
    try {
      const update = await api("patch", "/digital-accounts", req.body);
      return res.send(update.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
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
  updateSplit: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updateSplit = await api("put", `/charges/${id}/split`);
      return res.send(updateSplit.data);
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
