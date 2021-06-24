const charge = {
  init: () => {
    document
      .getElementById("bt-payment")
      .addEventListener("click", charge.createPayment);
  },
  createPayment: async () => {
    const radio = document.getElementsByName("radiusMethodPay");
    for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        methodPayment = radio[i].value;
        break;
      }
    }
    const body = {
      charge: {
        description: "Jóias Shine YOU!",
        amount: parseFloat(document.getElementById("total-cart").textContent),
        paymentTypes: [methodPayment],
      },
      billing: {
        name: document.getElementById("name").value,
        document: document.getElementById("document").value,
        email: document.getElementById("email").value,
        address: {
          postCode: document.getElementById("postcode").value,
          street: document.getElementById("street").value,
          number: document.getElementById("number").value,
          complement: document.getElementById("complement").value,
          neighborhood: document.getElementById("neighborhood").value,
          city: document.getElementById("city").value,
          state: document.getElementById("state").value,
        },
      },
    };
    const generateCharge = await fetch("/charges", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST",
      body: JSON.stringify(body),
    });
    if (methodPayment == "BOLETO") {
      window.location.href = "https://shineyou.shop/billet"
    }
    if (methodPayment == "CREDIT_CARD") {
      window.location.href = "https://shineyou.shop/card"
    }
  },
};

document.addEventListener("DOMContentLoaded", charge.init);
