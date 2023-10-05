import { tecnologias } from "../constants/tecnologias.js";

export const Habilidades = () => {
  const habilidadeHTML = tecnologias.map((tecnologia) => {
    return ` 
    <div class="habilidade">
      <img src="${tecnologia.imagem}" />
      <h3>${tecnologia.nome}</h3>
    </div>`;
  });

  return habilidadeHTML.join("");
};
