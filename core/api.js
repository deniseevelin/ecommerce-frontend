const axios = require("axios");
process.env["DEBUG"] = "axios";
const debug = require('axios-debug-log');

module.exports = async (method, endpoint, token = null, data = {}, config = {}) => {
  let headers = {};
  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    }
  }
  const instance = await axios.create({
    baseURL: process.env.NODE_ENV == "PROD" ? "https://shineyou.herokuapp.com" : "http://localhost:3030",
    headers,
  });

  let request;
  switch (method) {
    case "GET":
      request = instance.get;
      break;
    case "POST":
      request = instance.post;
      break;
    case "PUT":
      request = instance.put;
      break;
    case "PATCH":
      request = instance.patch;
      break;
    case "DELETE":
      request = instance.delete;
      break;
    default:
      request = instance.get;
  }
  return request(endpoint, data, config).catch((error) => {
    return error.response;
  });
};
