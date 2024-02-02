import { getFullName } from "./utils.js";
import { URL_GOOGLE } from "./scripts/constantes.js";
import { fechaHoy } from "./scripts/fecha.js";

document.addEventListener("DOMContentLoaded", function () {
  // Haz algo después de que se cargue el HTML
  const buttonHola = document.querySelector("#holaB");
  const buttonGoogle = document.querySelector("#googleB");
  const buttonLogin = document.querySelector("#loginB");

  // Agrega el event listener
  buttonHola.addEventListener("click", function () {
    // Haz algo cuando se haga clic en el botón
    console.log("¡Se hizo clic en el botón!");
    hola();
  });
  buttonGoogle.addEventListener("click", function () {
    alert(`esta es la url de google: ${URL_GOOGLE}`);
  });

  buttonLogin.addEventListener("click", function () {
    login();
  });
});

function hola() {
  alert("Hola mi vida");
}

function login() {
  alert(`El usuario ${getFullName("Edwar", "Diaz")}, ${fechaHoy()}`);
}
