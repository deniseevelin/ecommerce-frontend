const documentValidation = (document) => {
  const documentNumber = document.replace(/\D+/g, "");

  if (documentNumber.length == 11) {
    if (
      !document ||
      document.length != 11 ||
      document == "00000000000" ||
      document == "11111111111" ||
      document == "22222222222" ||
      document == "33333333333" ||
      document == "44444444444" ||
      document == "55555555555" ||
      document == "66666666666" ||
      document == "77777777777" ||
      document == "88888888888" ||
      document == "99999999999"
    )
      return false;
    var sum = 0;
    var rest;
    for (var i = 1; i <= 9; i++)
    sum = sum + parseInt(document.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;
    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(document.substring(9, 10))) return false;
    sum = 0;
    for (var i = 1; i <= 10; i++)
    sum = sum + parseInt(document.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;
    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(document.substring(10, 11))) return false;
    return true;
  } else {
    if (
      !document ||
      document == "00000000000000" ||
      document == "11111111111111" ||
      document == "22222222222222" ||
      document == "33333333333333" ||
      document == "44444444444444" ||
      document == "55555555555555" ||
      document == "66666666666666" ||
      document == "77777777777777" ||
      document == "88888888888888" ||
      document == "99999999999999"
    )
      return false;
    var length = cnpj.length - 2;
    var numbers = cnpj.substring(0, length);
    var digits = cnpj.substring(length);
    var sum = 0;
    var pos = length - 7;
    for (var i = length; i >= 1; i--) {
      sum += length.charAt(length - i) * pos--;
      if (pos < 2) pos = 9;
    }
    var result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result != digits.charAt(0)) return false;
    length = length + 1;
    numbers = document.substring(0, length);
    sum = 0;
    pos = length - 7;
    for (var i = length; i >= 1; i--) {
      sum += numbers.charAt(length - i) * pos--;
      if (pos < 2) pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result != digits.charAt(1)) return false;
    return true;
  }
};

module.exports = documentValidation;
