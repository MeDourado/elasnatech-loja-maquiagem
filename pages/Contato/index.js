import {
  Navbar,
  Footer,
  Seta,
  SecaoContato,
  Faq,
} from "../../components/index.js";

const seta = document.querySelector(".container-seta");
seta.innerHTML = Seta();

const header = document.querySelector("header");
header.innerHTML = Navbar();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

const secaoContato = document.querySelector(".container-contato");
secaoContato.innerHTML = SecaoContato();

const faq = document.querySelector(".container-faq-localizacao");
faq.innerHTML = Faq();
