const menu = document.querySelector("header");

// Função para ativar o menu - mudar a cor dele
function ativarMenu() {
  menu.classList.toggle("headerativo", scrollY > 0);
}
window.addEventListener("scroll", ativarMenu);

function setaInversa() {
  const posicaoScrool = scrollY;
  const alturaDocumento = document.documentElement.offsetHeight;
  console.log(posicaoScrool, alturaDocumento);
  return posicaoScrool >= alturaDocumento;
}

window.addEventListener("scroll", () => {
  const seta = document.querySelector(".seta");

  if (setaInversa() === true) {
    console.log("Oi");
    seta.classList.add("seta-cima");
  } else {
    seta.classList.remove("seta-cima");
  }
});
