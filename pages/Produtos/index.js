import { Navbar, Produtos, Seta, Footer } from "../../components/index.js";

const header = document.querySelector("header");
header.innerHTML = Navbar();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

const produtos = document.querySelector(".container-produtos");
produtos.innerHTML = Produtos();

const seta = document.querySelector(".container-seta");
seta.innerHTML = Seta();
