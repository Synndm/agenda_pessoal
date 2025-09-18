const form = document.getElementById('formContato');
    const tabela = document.getElementById('tabelaContatos').querySelector('tbody');

    form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    const novaLinha = tabela.insertRow();
    const celulaNome = novaLinha.insertCell();
    const celulaTelefone = novaLinha.insertCell();

    celulaNome.textContent = nome;
    celulaTelefone.textContent = telefone;

    form.reset();
    });