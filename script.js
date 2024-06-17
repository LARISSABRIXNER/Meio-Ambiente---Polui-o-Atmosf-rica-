const caixaprincipal = document.querySelector("caixa-principal");
cnst caixaperguntas = document.querySelector("caixa-perguntas");
const caixaalternativas = document.querySelector("caixa-alternativas");
const caixaresultado = document.querySelector("caixa-resultado");
const caixaresultado = document.querySelector("caixa-resultado");

const perguntas =
{
    enunciado = "vamos supor que voce esteje andando elo sentro de curitiba, e esta com uma embalagem de salgado, mas onde esta nao tem nenhuma licheira por perto, oque voce faria ?", 
    alternativas :[
        "seguraria ate ver uma liheira"
        "jogaria no chao"
    ]
}
{
    enunciado: ""
    alternativas: [
        "alternativa 1",
        "alternativa 2"
    ]
}
{
    enunciado: "pergunta 2"
    alternativas: [
        "alternativa 1",
        "alternativa 2"
    ]
}
{
    enunciado: "pergunta 2"
    alternativas: [
        "alternativa 1",
        "alternativa 2"
    ]
}
{
    enunciado: "pergunta 2"
    alternativas: [
        "alternativa 1",
        "alternativa 2"
    ]
}


let atual = 0;
let perguntaAtual;

function mostraPergunta () {
    perguntaAtual = perguntas[atual]
    caixaperguntas.textcontent = perguntaAtual.enunciado;
    mostraAlternativas()
}

mostraalternativas(){
    for( const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement ("button");
        botaoAlternativas.textcontent = alternativa;
        caixaalternativas.appendChild (botaoAlternativas);
    }
}

mostraPergunta();