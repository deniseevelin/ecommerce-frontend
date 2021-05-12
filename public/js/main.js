function getHash() {

var checkout = new DirectCheckout('BE04096DF8164FD548C67811B32626E89B2DF5087BEDEE8383199C56B6BA02A5', false);
  /* Em sandbox utilizar o construtor new DirectCheckout('PUBLIC_TOKEN', false); */            

    var cardData = {
        cardNumber: '5209245140924852',
        holderName: 'MARIA SILVA',
        securityCode: '332',
        expirationMonth: '08',
        expirationYear: '2022'
      };

  checkout.getCardHash(cardData, function(cardHash) {
      console.log(cardHash);
      /* Sucesso - A variável cardHash conterá o hash do cartão de crédito */
  }, function(error) {
      console.log(error)
      /* Erro - A variável error conterá o erro ocorrido ao obter o hash */
  });
}

window.addEventListener('load', getHash);