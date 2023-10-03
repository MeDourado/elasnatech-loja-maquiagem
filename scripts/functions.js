const menu = document.querySelector("header");

function ativarMenu() {
  menu.classList.toggle("headerativo", scrollY > 0);
}
window.addEventListener("scroll", ativarMenu);

function setaInversa() {
  console.log("Chamei funcao");
  const alturaJanela = window.innerHeight;
  const posicaoScrool = scrollY;
  const alturaDocumento = document.documentElement.offsetHeight;
  console.log(posicaoScrool + alturaJanela, alturaDocumento);
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
    header.classList.add("headerinativo");
  } else {
    navList.style.display = "block";
    header.classList.remove("headerinativo");
    header.classList.add("headerativo");
  }
}

window.addEventListener("resize", verificarLarguraTela);
verificarLarguraTela();

function mudarImagem(imagem, idx) {
  const card = document.querySelector(`[data-produto-id="${idx}"]`);
  if (!card) {
    console.error(`Card com índice ${idx} não encontrado.`);
    return;
  }

  const mainImage = card.querySelector(".produto-imagens img");
  mainImage.src = imagem;
  mainImage.alt = `Imagem ${idx + 1}`;
}
