import  {aleatorio, none} from './aleatorio.js';
import  {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaojogarnovamente = document.querySelector(".novamente-btn");
const botaoinicial = document.querySelector(".iniciar-btn");
const telainicial= document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoiniciar.addEventListener('click', iniciajogo);

function iniciajogo (){
    atual= 0;
    historiaFinal="";
    telainicial.style.display = 'none';
    caixaPerguntas.classList.remove ("motrar");
    caixaalternativas.classList.remove ("motrar");
    caixaResultado.classList.remove ("motrar");
    mostraperguntas();
}

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
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
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
    caixaPerguntas.textContent = "'Nao herdamos a terra de nossos antepassados, mas a tomamos emprestada de nossos descendentes'";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar");
    botaojogarNovamento.addEventListener("click", jogarNovamente());
}

function jogarNovamente (){
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    mostraPergunta ();
}

function substituinone (){
    for (const pegunta of perguntas){
        perguntaAtual.enunciado= pergunta.enunciado.replace(/voce/g, none);
    }
}

substituinone();
mostraPergunta();