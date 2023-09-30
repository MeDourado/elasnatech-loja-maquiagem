export const Navbar = () => {
  return `
  <div>
  <img src="../../assets/imgs/logo.png" class="logo">
  <a class="iconemenu" onclick="mostrarMenu()"><img src="../../assets/imgs/icone-menu.png"></a>
  </div>
  <nav>
      <ul >
          <li> <a href="../Home/index.html"> HOME </a> </li>
          <li> <a href="../Produtos/index.html"> PRODUTOS </a> </li>
          <li> <a href="../Sobre/index.html"> SOBRE </a> </li>
          <li> <a href="../Contato/index.html"> CONTATO </a> </li>
          <li class="login"> <a href="../Login/index.html"> LOGIN </a> </li>
      </ul> 
  </nav>
  `;
};
