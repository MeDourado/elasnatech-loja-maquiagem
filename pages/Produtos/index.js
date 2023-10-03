import { Navbar, Produtos } from "../../components/index.js";

const header = document.querySelector("header");
header.innerHTML = Navbar();

const produtos = document.querySelector(".container-produtos");
produtos.innerHTML = Produtos();
