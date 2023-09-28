import {
  Navbar,
  Propaganda,
  Footer,
  Seta,
  SobreMarca,
} from "../../components/index.js";

const header = document.querySelector("header");
header.innerHTML = Navbar();

const propaganda = document.querySelector(".propaganda");
propaganda.innerHTML = Propaganda();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

const seta = document.querySelector(".container-seta");
seta.innerHTML = Seta();

const sobreMarca = document.querySelector(".container-sobre");
sobreMarca.innerHTML = SobreMarca();
