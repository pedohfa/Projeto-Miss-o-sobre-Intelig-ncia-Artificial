const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{
enunciado: "Qual o seu nível de conhecimento sobre Tecnologia e inovação em nosso cotidiano?",
  alternativas: [
{
texto: "Baixo",
  afirmacao: "Você está começando a aprender sobre Tecnologia e inovação . "
  },
{
texto: "Médio",
  afirmacao: "Você tem um conhecimento razoável sobre Tecnologia e inovação . "
  },
{
texto: "Alto",
  afirmacao: "Você tem um conhecimento aprofundado sobre Tecnologia e inovação . "
  }
]
},
{
enunciado: "1 -  Qual é o principal objetivo da tecnologia blockchain?",
  alternativas: [
{
texto: "a) Descentralização",
  afirmacao: "Em vez de depender de uma autoridade central, como um banco ou governo. "
  },
{
texto: "b) Imutabilidade",
  afirmacao: " Uma vez que uma transação é registrada no blockchain. "
  },
{
texto: "c)Transparência",
  afirmacao: "Todas as transações registradas no blockchain são visíveis para todos os participantes da rede. "
  },
{
texto: "d) Todas as opções acima",
  afirmacao: "Todas as opções mencionadas são sobre Tecnologia e inovação. "
  }
    ]
},
{
enunciado: "2 - Qual é o propósito da inteligência artificial ?",
  alternativas: [
{
texto: "a) Automatização de Tarefas",
afirmacao: "IA pode automatizar processos repetitivos e rotineiros. "

},
{
texto: "b)Análise de Dados",

afirmacao: "IA pode processar grandes volumes de dados rapidamente e identificar padrões que seriam difíceis ou impossíveis para os humanos perceberem. "

},
{
texto: "c) Assistência Pessoal",
afirmacao: "Assistentes virtuais, como Siri, Alexa e Google Assistant, utilizam IA para ajudar os usuários com uma variedade de tarefas diárias, desde configurar lembretes até responder a perguntas.. "

},
{
texto: "d) Todas as opções acima",
afirmacao: "Todas as opções mencionadas são sobre Tecnologia e inovação. "

}
]
},
{
  enunciado: "3 - O que é realidade aumentada?",
alternativas: [
{
texto: "a) Sobreposição de Informação",
afirmacao: " A RA adiciona elementos digitais ao mundo real, enriquecendo a percepção do usuário com informações adicionais, como textos, imagens, vídeos, ou objetos 3D. "

},
{
texto: "b) Interatividade em Tempo Real",

afirmacao: "Os elementos digitais podem interagir com o ambiente real e responder a ações do usuário, proporcionando uma experiência interativa. "

},
{
texto: "c) Uso de Dispositivos Móveis",
afirmacao: "Muitos aplicativos de RA são projetados para funcionar em smartphones e tablets, utilizando a câmera e sensores do dispositivo para detectar o ambiente e sobrepor as informações digitais.

. "

},
  {
texto: "d) Todas as opções acima",
afirmacao: "Todas as opções mencionadas são sobre Tecnologia e inovação."

}
]
}
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
if (atual >= perguntas.length) {
mostraResultado();
return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}
function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", () =>
respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}
function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}
function mostraResultado() {
  caixaPerguntas.textContent = "Obrigado por completar o quiz!";
  textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
mostraPergunta();
