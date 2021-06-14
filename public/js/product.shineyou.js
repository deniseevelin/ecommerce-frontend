const cart = {
  init: () => {
    const elements = document.getElementsByClassName("bt-addcart");
    for (let element of elements)
      element.addEventListener("click", cart.addCart);

    const products = document.getElementsByClassName("bt-trash");
    for (let product of products)
      product.addEventListener("click", cart.removeCart);
  },
  addCart: async (e) => {
    const id = e.target.parentElement.getAttribute("opt-id");

    await fetch("/cart", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    location.href = "/cart";
  },
  removeCart: async (e) => {
    const id = e.target.parentElement.getAttribute("opt-id");

    await fetch("/cart", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    location.href = "/cart";
  },
};

document.addEventListener("DOMContentLoaded", cart.init);
