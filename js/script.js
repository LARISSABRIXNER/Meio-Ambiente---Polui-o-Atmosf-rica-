import {aleatorio} from './aleatorio.js';
import {perguntas} from './perguntas'

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaojogarnovamente = document.querySelector(".novamente-btn");



let atual = 0;
let perguntaAtual;
let historiaFinal = "o meio ambiente importa, sim!";

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
<script type="module"src="js/script.js"></script>
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio (opcaoSelecionada);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "'Nao herdamos a terra de nossos antepassados, mas a tomamos emprestada de nossos descendentes'";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function jogarnovamente(){
    atual= 0;
}
mostraPergunta();