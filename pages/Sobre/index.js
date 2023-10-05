import {
  Navbar,
  Footer,
  Habilidades,
  Seta,
  Historia,
} from "../../components/index.js";

const header = document.querySelector("header");
header.innerHTML = Navbar();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

const habilidade = document.querySelector(".container-habilidades");
habilidade.innerHTML = Habilidades();

const historia = document.querySelector(".historia-sobre-mim");
historia.innerHTML = Historia();

const seta = document.querySelector(".container-seta");
seta.innerHTML = Seta();
