// Selecionando os elementos do HTML
const botao = document.getElementById('meuBotao');
const mensagem = document.getElementById('mensagem');

// Adicionando um evento de clique ao botão
botao.addEventListener('click', () => {
    // Alterna a classe do parágrafo para mostrar/esconder a mensagem
    if (mensagem.classList.contains('escondido')) {
        mensagem.classList.remove('escondido');
        mensagem.classList.add('visivel');
        botao.textContent = 'Fechar';
    } else {
        mensagem.classList.remove('visivel');
        mensagem.classList.add('escondido');
        botao.textContent = 'Clique Aqui';
    }
});
// Função para mostrar ou ocultar os blocos explicativos de cada seção
function mostrarDetalhe(secao) {
    const elementoId = 'detalhe-' + secao;
    const elemento = document.getElementById(elementoId);
    
    // Altera o display entre block (visível) e none (invisível)
    if (elemento.style.display === 'block') {
        elemento.style.display = 'none';
    } else {
        elemento.style.display = 'block';
    }
}

// Função para validar e dar feedback do Quiz do rodapé
function verificarResposta(acertou) {
    const resultadoTexto = document.getElementById('quiz-resultado');
    
    if (acertou) {
        resultadoTexto.innerText = "✅ Excelente! Você compreendeu o espírito do Agrinho: produzir com responsabilidade.";
        resultadoTexto.style.color = "#d8f3dc"; // Mensagem verde clara
    } else {
        resultadoTexto.innerText = "❌ Tente novamente! Lembre-se de focar no equilíbrio e no futuro sustentável.";
        resultadoTexto.style.color = "#ffb3c1"; // Mensagem avermelhada
    }
}