/* document.getElementById("pergunta").textContent = "take 1"*/
const perguntas = [
{texto:"1+1 =?", opcoes:["1", "86", "(5-6)+2+1"], correta: 2},
{texto:"0 + 1 =", opcoes:["1", "4", "2"], correta: 0},
{texto:"80+6=", opcoes:["83", "89", "86"], correta: 2}
];

let perguntaAtual = 0;
let pontos = 0;

function mostraPergunta() {
    const pergunta = perguntas[perguntaAtual];
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.classList.remove("correta");
        option.classList.remove("errada");
    });
    document.getElementById("pergunta").textContent = pergunta.texto;

    options.forEach((elemento,index) => {
        elemento.textContent = pergunta.opcoes[index];

    });
}

function verificarResposta(respostaEscolhida) {
    const pergunta = perguntas[perguntaAtual];
    const options = document.querySelectorAll(".option");

    if (respostaEscolhida === pergunta.correta) {
        pontos++;
        document.getElementById("resultado").textContent = "CORRETO";
        options[respostaEscolhida].classList.add("correta");
    }
    else {
        document.getElementById("resultado").textContent = "INCORRETO";
        options[respostaEscolhida].classList.add("errada");
        options[pergunta.correta].classList.add("correta");
    }
    perguntaAtual++;

    if (perguntaAtual<perguntas.length) {
        setTimeout(() => {
               document.getElementById("resultado").textContent = "";
               mostraPergunta();
        }, 1000);
    } else {
        document.getElementById("pergunta").textContent = "fim do quiz";
        document.getElementById("resultado").textContent = "Pontuação "+pontos+"/"+perguntas.length;
    }
}
mostraPergunta();