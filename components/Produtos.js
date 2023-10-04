import { produtos } from "../constants/produtos.js";

export const Produtos = () => {
  const produtosHTML = produtos.map((produto, index) => {
    const carouselId = `carouselExample${index}`; // ID único do carrossel

    return `  
    <div class="produto-card" data-produto-id="${index}">
      <h2>${produto.nome}</h2>
      <div id="${carouselId}" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="${produto.imagens[0]}"
              class="d-block w-100"
              alt="Imagem 1"
            />
          </div>
          <div class="carousel-item">
            <img
              src="${produto.imagens[1]}"
              class="d-block w-100"
              alt="Imagem 2"
            />
          </div>
          <div class="carousel-item">
            <img
              src="${produto.imagens[2]}"
              class="d-block w-100"
              alt="Imagem 3"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#${carouselId}" // Aponta para o ID do carrossel correto
          data-bs-slide="prev"
        >
        <img src="../../assets/imgs/seta-circulo-esquerda.png" class="custom-carousel-arrow" aria-hidden="true">
        <span class="visually-hidden">Anterior</span>
        </button>
        <button
          class="carousel-control-next custom-carousel-arrow"
          type="button"
          data-bs-target="#${carouselId}" // Aponta para o ID do carrossel correto
          data-bs-slide="next"
        >
        <img src="../../assets/imgs/seta-circulo-direita.png" class="custom-carousel-arrow" aria-hidden="true">
          <span class="visually-hidden">Próxima</span>
        </button>
      </div>
      <div class="produto-informacoes">
        <p>De: <del>${produto.descricao}<del></p>
        <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
      </div>
      <button class="adicionar-ao-carrinho">COMPRAR</button>
    </div>
    `;
  });

  return produtosHTML.join("");
};
