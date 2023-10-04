export const Cadastro = () => {
  return ` <div>
    <h1>CADASTRE-SE</h1>
  </div>
  <form>
    <label for="nome">Nome</label>
    <input
      type="text"
      id="nome"
      name="nome"
      placeholder="Insira seu nome"
      required
    />

    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Insira seu email"
      required
    />

    <label for="senha">Senha</label>
    <input
      type="password"
      id="senha"
      name="senha"
      placeholder="Insira sua senha"
      required
    />

    <button type="submit" value="Cadastrar">CADASTRAR</button>
  </form>`;
};
