const axios = require("axios");

module.exports = async (req, method, endpoint, data = {}, config = {}) => {
  let headers = {};
  if (
    typeof req.session != "undefined" &&
    typeof req.session.token != "undefined" &&
    req.session.token
  ) {
    headers = {
      Authorization: `Bearer ${req.session.token}`,
    };
  }
  const instance = await axios.create({
    baseURL: "http://localhost:3030",
    headers,
  });

  let request;
  switch (method) {
    case "get":
      request = instance.get;
      break;
    case "post":
      request = instance.post;
      break;
    case "put":
      request = instance.put;
      break;
    case "patch":
      request = instance.patch;
      break;
    case "delete":
      request = instance.delete;
      break;
    default:
      request = instance.get;
  }
  return request(endpoint, data, config).catch((error) => {
    return error.response.data;
  });
};
