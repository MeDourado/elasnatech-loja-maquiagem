export const Login = () => {
  return `<div>
    <h1>LOGIN</h1>
  </div>
  <form>
    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Insira seu email"
    />
    <label for="senha">Senha</label>
    <input
      type="password"
      id="senha"
      name="senha"
      placeholder="Insira sua senha"
      required
    />
    <h6>
      Você já tem uma conta?
      <a href="../Cadastro/index.html"> Cadastre-se</a>
    </h6>
    <button type="submit" value="Login">ENTRAR</button>
  </form>`;
};
