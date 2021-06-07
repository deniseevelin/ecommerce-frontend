
const authAdmin = {
  init: () => {
    document.getElementById("bt-login").addEventListener("click", authAdmin.loginValidate);
  },

  loginValidate: () => {
    const email = document.getElementById("login-email");
    const password = document.getElementById("login-password");

    let validation = true;

    const erro = document.getElementsByClassName("message-err");

    for(let i = 0; i < erro.length; i++)
      erro[i].style.display = "none"

    if (!validate.email(email.value)) {
      validation = false;
      email.nextElementSibling.style.display = "block";
    }
    if (password.value.length < 8) {
      validation = false;
      password.nextElementSibling.style.display = "block";
    }
    if(validation)
      authAdmin.login();
  },

  login: async () => {

    try {
      const login = await fetch('/admin/login', {
        method: "POST",
        body: new FormData(document.getElementById("form-login"))
      });

      if(!login.ok) throw new Error("Falha ao realizar seu login!");

      location.reload();
    } catch(err) {
      alert(err.message);
    }
  },
};

document.addEventListener("DOMContentLoaded", authAdmin.init);
