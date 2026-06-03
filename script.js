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