const product = {
  init: () => {
    document
      .getElementById('bt-product')
      .addEventListener('click', product.validate);

    const field = document.getElementById('upload');
    const image = document.getElementById('bt-image')
    
    image.addEventListener('click', (e) => {
      console.log(image)
      field.click();
    });
    field.addEventListener('change', async (e) => {
      const res = await upload('upload');
      document.getElementById('image-load').src = res.Location;
      document.getElementById('product-image').value = res.key;
      document.getElementById('image-load').classList.remove('off');
    })
  },

  validate: () => {
    const name = document.getElementById("product-name");
    const category = document.getElementById("product-category");
    const quantity = document.getElementById("product-quantity");
    const price = document.getElementById("product-price");

    let validation = true;

    const err = document.getElementsByClassName("message-err");

    for (let i = 0; i < err.length; i++) err[i].style.display = "none";

    if (name.value.length == 0) {
      validation = false;
      name.nextElementSibling.style.display = "block";
    }
    if (category.value.length == 0) {
      validation = false;
      name.nextElementSibling.style.display = "block";
    }
    if (quantity.value.length == 0) {
      validation = false;
      name.nextElementSibling.style.display = "block";
    }
    if (price.value.length == 0) {
      validation = false;
      name.nextElementSibling.style.display = "block";
    }

    if (validation) product.save();
  },

  save: async () => {

    try {
      const register = await fetch("/admin/products", {
        method: "POST",
        body: new FormData(document.getElementById("form-product")),
      });

      if (!register.ok)
        throw new Error("Falha ao cadastrar o produto, tente novamente!");

      location.href = "/admin/products";
    } catch (err) {
      console.log(err)

      alert(err.message);
    }
  },
};

window.addEventListener("DOMContentLoaded", product.init);
