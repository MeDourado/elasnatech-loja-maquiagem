const menu = document.querySelector("header");

// Função para ativar o menu - mudar a cor dele
function ativarMenu() {
  menu.classList.toggle("headerativo", scrollY > 0);
}
window.addEventListener("scroll", ativarMenu);

function setaInversa() {
  const alturaJanela = window.innerHeight;
  const posicaoScrool = scrollY;
  const alturaDocumento = document.documentElement.offsetHeight;
  const teste = document.documentElement.scrollHeight;
  return posicaoScrool + alturaJanela >= alturaDocumento;
}

// Função para inverter seta
window.addEventListener("scroll", () => {
  const seta = document.querySelector(".seta");
  console.log("oi");
  if (setaInversa() === true) {
    seta.classList.add("seta-cima");
  } else {
    seta.classList.remove("seta-cima");
  }
});

// Função para menu
//.navEspecial
function mostrarMenu() {
  let ativo = true;
  menu.classList.toggle("headerativo", (ativo = true));
  const navList = document.querySelector("nav");
  if (navList.style.display === "block") {
    navList.style.display = "none";
  } else {
    navList.style.display = "block";
  }
}

// Função - MENU SEMPRE ATIVO - quando não está com o menu mobile
function verificarLarguraTela() {
  const navList = document.querySelector("nav");
  const larguraTela = window.innerWidth;

  if (larguraTela >= 990) {
    navList.style.display = "block";
  }
}

window.addEventListener("resize", verificarLarguraTela);
verificarLarguraTela();
