const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "voce tem o costume de fazer o descarte correto do lixo?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "otimo, o cuidado com o descarte correto do lixo e fundamental."
            },
            {
                texto: "nao",
                afirmacao: "e muito importatente fazer o descarte correto dos lixos."
            }
        ]
    },
    {
        enunciado: "quando quebra algo de vidro",
        alternativas: [
            {
                texto: "coloco sempre dentro de alguma caixinha ",
                afirmacao: "o cuidado com "
            },
            {
                texto: "jogo no lixo, junto com os outros residuos",
                afirmacao: "misturar os residuos, tais como resto de comida, recipientes (garrafa pet, vidro, papel...), prejudica "
            }
        ]
    },
    {
        enunciado: "O descarte irregular de lixo traz inúmeros malefícios a todos, como doenças, inundações, erosão, desmoronamentos, chorume e a poluição propriamente dita. Oque  voce acha sobre isso?",
        alternativas: [
            {
                texto: "desnecesario, o meio ambiente nao precisa de cuidados",
                afirmacao: "jogar lixo no chao nao afeta apena o maio ambiente, mas tambem aos animais e nos seres humanos"
            },
            {
                texto: "o desccate do lixo realmente e muito importante",
                afirmacao: "exatamente, o descarte e supe importante nao so mente para a naturesa, mas para nos seres humanos tambem"
            }
        ]
    },
    {
        enunciado: "moscas, baratas, mosquitos e ratos podem transmitir doenças como a febre tifoide, cólera, amebíase, disenteria, giardíase, ascaridíase, leishmaniose, febre amarela, dengue, malária, leptospirose, sao alguns problemas que o descarte irregular do lixo poe nos causar",
        alternativas: [
            {
                texto: "",
                afirmacao: "afirmação"
            },
            {
                texto: "vou cuidar mais, e nao irei e nem deixarei ninguem a jogar lixo no chao",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Poluição visual, contaminação do solo e da água, e danos à fauna e flora local são apenas alguns dos efeitos negativos diretos do lixo jogado no chão. ",
                afirmacao: "afirmação"
            },
            {
                texto: "",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "o meio ambiente importa, sim !";

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
}

mostraPergunta();