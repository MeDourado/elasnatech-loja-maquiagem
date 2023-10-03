const menu = document.querySelector("header");

// Função para ativar o menu - mudar a cor dele
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

// Função para inverter seta
window.addEventListener("scroll", () => {
  const seta = document.querySelector(".seta");
  console.log("oi");
  if (setaInversa() === true) {
    console.log("Minha seta tem que ir para cima");
    seta.classList.add("seta-cima");
  } else {
    console.log("Minha seta tem que ir para baixo");
    seta.classList.remove("seta-cima");
  }
});

// Função para menu
//.navEspecial
function mostrarMenu() {
  const header = document.querySelector("header");
  const navList = document.querySelector("nav");

  // Verifica se o menu está visível
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

// Função - MENU SEMPRE ATIVO - quando não está com o menu mobile
// function verificarLarguraTela() {
//   const navList = document.querySelector("nav");
//   const larguraTela = window.innerWidth;

//   if (larguraTela >= 990) {
//     navList.style.display = "block";
//   }
// }

window.addEventListener("resize", verificarLarguraTela);
verificarLarguraTela();

// Function Trocar Imagem com Base no indice
function mudarImagem(imagem, idx) {
  // Encontre o elemento do card atual com base no índice
  const card = document.querySelector(`[data-produto-id="${idx}"]`);
  if (!card) {
    console.error(`Card com índice ${idx} não encontrado.`);
    return;
  }

  // Resto do seu código para atualizar a imagem no card
  const mainImage = card.querySelector(".produto-imagens img");
  mainImage.src = imagem;
  mainImage.alt = `Imagem ${idx + 1}`;
}
