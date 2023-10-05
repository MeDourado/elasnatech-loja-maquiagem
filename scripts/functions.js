const menu = document.querySelector("header");

function ativarMenu() {
  menu.classList.toggle("headerativo", scrollY > 0);
}
window.addEventListener("scroll", ativarMenu);

function setaInversa() {
  const alturaJanela = window.innerHeight;
  const posicaoScrool = scrollY;
  const alturaDocumento = document.documentElement.offsetHeight;
  return posicaoScrool + alturaJanela >= alturaDocumento;
}

window.addEventListener("scroll", () => {
  const seta = document.querySelector(".seta");
  if (setaInversa() === true) {
    seta.classList.add("seta-cima");
  } else {
    seta.classList.remove("seta-cima");
  }
});

function mostrarMenu() {
  const header = document.querySelector("header");
  const navList = document.querySelector("nav");

  if (navList.style.display === "block") {
    navList.style.display = "none";
    header.classList.remove("headerativo");
  } else {
    navList.style.display = "block";
    header.classList.add("headerativo");
  }
}

function menuAtivo() {
  const tamanhoTela = window.innerWidth;
  const navList = document.querySelector("nav");
  if (tamanhoTela >= 990) {
    console.log("entrei aq");
    navList.style.display = "block";
  } else {
    navList.style.display = "none";
  }
}

window.addEventListener("resize", menuAtivo);
