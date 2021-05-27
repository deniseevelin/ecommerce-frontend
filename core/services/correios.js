const axios = require("axios");

module.exports = async (postcode) => {
    
  try {

    const shipping = await axios(
      "http://ws.correios.com.br//calculador/CalcPrecoPrazo.asmx/CalcPrecoPrazo?nCdEmpresa=string&sDsSenha=string&nCdServico=string&sCepOrigem=string&sCepDestino=string&nVlPeso=string&nCdFormato=string&nVlComprimento=string&nVlAltura=string&nVlLargura=string&nVlDiametro=string&sCdMaoPropria=string&nVlValorDeclarado=string&sCdAvisoRecebimento=string"
    );
    return JSON.parse(parser.toJson(shipping.data));

  } catch (err) {
      return null
  }
};
