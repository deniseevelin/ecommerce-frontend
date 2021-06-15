const hash = {
  init: () => {
    document
      .getElementById("bt-datacc")
      .addEventListener("click", hash.getHash);
  },
  getHash: async () => {
    var checkout = new DirectCheckout(
      "BE04096DF8164FD548C67811B32626E89B2DF5087BEDEE8383199C56B6BA02A5",
      false
    );
    var cardData = {
      cardNumber: document.getElementById("number-creditcard").value,
      holderName: document.getElementById("name-creditcard").value,
      securityCode: document.getElementById("cvv-creditcard").value,
      expirationMonth: document.getElementById("monthexpiration-creditcard")
        .value,
      expirationYear: document.getElementById("yearexpiration-creditcard")
        .value,
    };

    const getGenerateHash = (cardData) =>
      new Promise((resolve, reject) => {
        checkout.getCardHash(
          cardData,
          function (cardHash) {
            resolve(cardHash);
          },
          function (error) {
            reject(error);
          }
        );
      });

    const generatedHash = {
      creditCardHash: await getGenerateHash(cardData),
    };
    const id = document.getElementById("bt-update").value;
    const saveHash = await fetch(`/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        creditCardHash: generatedHash,
      }),
    });
    alert("Salvo com sucesso!")
    location.reload();
    // const tokenizationCredit = await fetch(`/credit-cards/tokenization`, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   method: "POST",
    //   body: JSON.stringify(generatedHash),
    // });
  },
};

document.addEventListener("DOMContentLoaded", hash.init);
