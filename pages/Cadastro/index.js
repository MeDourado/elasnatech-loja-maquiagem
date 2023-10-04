import { Navbar, ImgPropaganda, Cadastro } from "../../components/index.js";

const header = document.querySelector("header");
header.innerHTML = Navbar();

const imgPropaganda = document.querySelector(".container-img-propaganda");
imgPropaganda.innerHTML = ImgPropaganda();

const cadastro = document.querySelector(".container-cadastro");
cadastro.innerHTML = Cadastro();
