const axios = require("axios");

module.exports = async (method, endpoint, token = null, data = {}, config = {}) => {
  let headers = {};
  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    }
  }
  const instance = await axios.create({
    baseURL: "http://localhost:3030",
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
    console.log(error)
    return error.response;
  });
};
