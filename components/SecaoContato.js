export const SecaoContato = () => {
  return `<section class="container-infos-contato">
  <div class="frases-contato">
    <h1>Contate-nos</h1>
    <h2>Ficaremos felizes em te responder</h2>
    <p>
      Entre em contato conosco se tiver alguma dúvida. Estamos ansiosos
      para responder às suas perguntas e ajudar da melhor forma
      possível.
    </p>
  </div>
  <div class="contato-item">
    <img
      src="../../assets/imgs/icone-contato-localizacao.png"
      alt="Ícone de Localização"
    />
    <div>
      <h3>Localização</h3>
      <p>Av. Acm, 3259 - Aurélio Leiro, Salvador - BA, 40280-000</p>
    </div>
  </div>

  <div class="contato-item">
    <img
      src="../../assets/imgs/icone-contato-telefone.png"
      alt="Ícone de Telefone"
    />
    <div>
      <h3>Telefone</h3>
      <p>(91) 99926-3471</p>
    </div>
  </div>

  <div class="contato-item">
    <img
      src="../../assets/imgs/icone-contato-email.png"
      alt="Ícone de Email"
    />
    <div>
      <h3>Email</h3>
      <p>mariaeduarda.s.dourado@gmail.com</p>
    </div>
  </div>
  <img
    class="img-contato"
    src="../../assets/imgs/img-contato-pagina-contato.png"
  />
</section>

<div class="formulario-faleconosco">
  <h2>FALE CONOSCO</h2>
  <p>
    Entre em contato conosco preenchendo o formulário abaixo ou visite
    nossa localização.
  </p>

  <form method="post">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required />

    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" required />

    <label for="mensagem">Mensagem:</label>
    <textarea
      id="mensagem"
      name="mensagem"
      rows="4"
      required
    ></textarea>

    <button type="submit">Enviar</button>
  </form>
</div>`;
};
