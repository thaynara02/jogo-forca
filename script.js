let generoSelecionado = '';
let palavras = [];
let palavraSorteada = '';
let dicas = [];

function escolherGenero(genero) {
  generoSelecionado = genero;
  palavras = obterPalavras(genero);
  dicas = obterDicas(genero);
  iniciarJogo();
}

function obterPalavras(genero) {
  const palavrasPorGenero = {
    'fruta': ['maça', 'uva', 'pera', 'caju', 'açaí', 'coco', 'kiwi', 'limão', 'manga', 'jambo'],
    'animal': ['gato', 'rato', 'pato', 'cão', 'tigre', 'leão', 'urso', 'lobo', 'veado', 'sapo']
  };
  return palavrasPorGenero[genero] || [];
}

function obterDicas(genero) {
  const dicasPorGenero = {
    'fruta': [
      'Pode ser encontrada em uma torta.',
      'Usada para fazer vinho.',
      'Uma fruta de textura suave e sabor adocicado.',
      'Famoso na culinária nordestina, É mma castanha que se disfarça de fruta.',
      'Muito consumido no Brasil. Um superalimento roxo, geralmente consumido na forma de tigela cremosa.',
      'Um fruto tropical grande com uma casca dura e uma água refrescante dentro.',
      'Uma fruta pequena, marrom e peluda, com uma polpa verde e sabor única.',
      'Popular em bebidas. É ácido e cítrico',
      'Uma fruta tropical suculenta e com sabor doce e exótico.',
      'Uma fruta vermelha e doce com uma casca fina, conhecida por seu sabor peculiar.'
    ],
    'animal': [
      'Muitos têm como animal de estimação.',
      'Um pequeno roedor conhecido por sua agilidade e cauda longa.',
      'Um pássaro aquático que muitas vezes é visto em lagos e lagoas.',
      'Fiel companheiro do homem.',
      'Um grande felino selvagem com listras distintas.',
      'Rei da selva.',
      'Encontrado em regiões polares.',
      'Um canídeo selvagem que vive em matilhas e uiva para se comunicar.',
      'Um elegante cervídeo com galhadas que crescem anualmente. Ou apenas um amigo seu.',
      'Anfíbio interessante.'
    ]
  };
  return dicasPorGenero[genero] || [];
}

function iniciarJogo() {
  sortearNovaPalavra();
  const pergunta = `Qual ${generoSelecionado} começa com a letra ${palavraSorteada[0].toUpperCase()}?`;
  document.getElementById('pergunta').textContent = pergunta;
  document.getElementById('jogo').style.display = 'block';
  document.getElementById('botao-dica').style.display = 'block';
}

function sortearNovaPalavra() {
  palavraSorteada = sortearPalavra();
}

function sortearPalavra() {
  const palavrasValidas = palavras.filter(palavra => palavra.length === 4 || palavra.length === 5);
  const indiceSorteado = Math.floor(Math.random() * palavrasValidas.length);
  return palavrasValidas[indiceSorteado];
}

function verificarResposta() {
  const respostaUsuario = document.getElementById('resposta').value.toLowerCase();

  if (respostaUsuario === palavraSorteada) {
    alert('Parabéns! Você acertou!');
  } else {
    alert(`Ops! Tente novamente. A resposta correta era: ${palavraSorteada}`);
  }
  sortearNovaPalavra();
  const pergunta = `Qual ${generoSelecionado} começa com a letra ${palavraSorteada[0].toUpperCase()}?`;
  document.getElementById('pergunta').textContent = pergunta;
}

function fornecerDica() {
  const dicaAtualIndex = palavras.indexOf(palavraSorteada);
  alert(`Dica atual: ${dicas[dicaAtualIndex]}`);
}
