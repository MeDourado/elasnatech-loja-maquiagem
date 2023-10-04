import { Navbar, ImgPropaganda, Login } from "../../components/index.js";

const header = document.querySelector("header");
header.innerHTML = Navbar();

const login = document.querySelector(".container-login");
login.innerHTML = Login();

const imgPropaganda = document.querySelector(".container-img-propaganda");
imgPropaganda.innerHTML = ImgPropaganda();
