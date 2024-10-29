const quiz = [
    {
        pergunta: "Qual linguagem é conhecida por ser usada no desenvolvimento de sistemas operacionais?",
        opcoes: ["C", "Python", "JavaScript"],
        respostaCerta: 0
    },
    {
        pergunta: "Qual linguagem é mais utilizada para desenvolvimento web no lado do cliente?",
        opcoes: ["Ruby", "JavaScript", "Go"],
        respostaCerta: 1
    },
    {
        pergunta: "Qual framework é amplamente usado para desenvolvimento de interfaces de usuário em JavaScript?",
        opcoes: ["Laravel", "Django", "React"],
        respostaCerta: 2
    }
];

let perguntaAtual = 0;

function mostrarPergunta() {
    const perguntaDiv = document.getElementById("pergunta");
    const botoes = document.querySelectorAll("button");
    perguntaDiv.innerHTML = `<p>${quiz[perguntaAtual].pergunta}</p>`;
    
    botoes.forEach((botao, index) => {
        botao.textContent = quiz[perguntaAtual].opcoes[index];
    });
}

function checkAnswer(resposta) {
    if (resposta === quiz[perguntaAtual].respostaCerta) {
        alert("Correto!");
    } else {
        alert("Incorreto. Tente novamente.");
    }

   
    perguntaAtual++;
    if (perguntaAtual < quiz.length) {
        mostrarPergunta();
    } else {
        alert("Você completou o quiz!");
        perguntaAtual = 0; 
        mostrarPergunta();
    }
}


mostrarPergunta();

