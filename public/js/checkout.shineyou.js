const checkout = {
  init: () => {
    document
      .getElementById("bt-checkout")
      .addEventListener("click", checkout.checkoutTransparent);
  },
  checkoutTransparent: async () => {

    const pay = await fetch(`/payments`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      method: "POST",
    });
    if (pay.status == 200) {
        alert("PAGAMENTO CONFIRMADO!")
        window.location.href = "/orders";
    }

    if (pay.status == 400) {
        alert("ALGO DEU ERRADO :( CONFIRA OS DADOS DE PAGAMENTO!")
        window.location.href = "/checkout";
    }
  },
};

document.addEventListener("DOMContentLoaded", checkout.init);