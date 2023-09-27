import { Navbar, Propaganda } from "../../components/index.js";

const header = document.querySelector("header");
header.innerHTML = Navbar();

const propaganda = document.querySelector(".propaganda");
propaganda.innerHTML = Propaganda();
