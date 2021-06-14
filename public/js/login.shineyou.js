const auth = {
  init: () => {
    document
      .getElementById("bt-login")
      .addEventListener("click", auth.loginValidate);
    document
      .getElementById("bt-register")
      .addEventListener("click", auth.registerValidate);
  },

  loginValidate: () => {
    const email = document.getElementById("login-email");
    const password = document.getElementById("login-password");

    let validation = true;

    const erro = document.getElementsByClassName("message-err");

    for (let i = 0; i < erro.length; i++) erro[i].style.display = "none";

    if (!validate.email(email.value)) {
      validation = false;
      email.nextElementSibling.style.display = "block";
    }
    if (password.value.length < 8) {
      validation = false;
      password.nextElementSibling.style.display = "block";
    }
    if (validation) auth.login();
  },

  login: async () => {
    const log = await fetch("/users/login", {
      method: "POST",
      body: new FormData(document.getElementById("form-login")),
    });

    location.reload();
  },
  registerValidate: () => {
    const name = document.getElementById("register-name");
    const email = document.getElementById("register-email");
    const password = document.getElementById("register-password");

    let validation = true;

    const erro = document.getElementsByClassName("message-err");

    for (let i = 0; i < erro.length; i++) erro[i].style.display = "none";

    if (name.value.length < 3) {
      validation = false;
      name.nextElementSibling.style.display = "block";
    }
    if (!validate.email(email.value)) {
      validation = false;
      email.nextElementSibling.style.display = "block";
    }
    if (password.value.length < 8) {
      validation = false;
      password.nextElementSibling.style.display = "block";
    }
    if (validation) auth.register();
  },

  register: async () => {
    const log = await fetch("/users", {
      method: "POST",
      body: new FormData(document.getElementById("form-register")),
    });
    location.reload();
  },
};

document.addEventListener("DOMContentLoaded", auth.init);
