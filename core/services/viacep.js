const axios = require("axios");
const { response } = require("express");

module.exports = async (postcode) => {
    try {
        const viacep = await axios(`https://viacep.com.br/ws/${postcode}/json/`);
        return viacep.data;
    } catch (err) {
        return null
    }
}
