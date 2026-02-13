// selecionando os elementos do DOM
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const expense = document.getElementById('expense');
const category = document.getElementById('category');

// selecionando a lista de despesas para adicionar os itens posteriormente
const expenseList = document.querySelector('ul');
const expenseQuantity = document.querySelector('aside header p span'); // seleciona o elemento que exibe a quantidade de despesas
const expenseTotal = document.querySelector('aside header h2'); // seleciona o elemento que exibe o total de despesas


amount.oninput = () => { // captura o evento de input do campo de valor
    // aceitar apenas números e vírgula
    let value = amount.value.replace(/\D/g, ''); // remove tudo que não for número
    //transformar o valor em número, dividindo por 100 para considerar os centavos
    value = Number(value) / 100; // converte para número e divide por 100
    amount.value = formatCurrency(value); // atualiza o valor do input
}

function formatCurrency(value) { // formata o valor como moeda brasileira
    // remove tudo que não for número ou vírgula
    value = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // formata o valor como moeda brasileira
    return value;
}

function parseCurrencyBRL(value) {
    return Number(
        value
            .replace(/\s/g, '')
            .replace('R$', '')
            .replace(/\./g, '')
            .replace(',', '.')
    );
}

form.onsubmit = (e) => { // captura o evento de submit do formulário
    e.preventDefault(); // impede o envio do formulário para evitar o recarregamento da página
    const newExpense = {
        id: new Date().getTime(), // gera um ID único baseado no timestamp
        amount: amount.value, // valor formatado como moeda
        expense: expense.value, // descrição da despesa
        category_id: category.value, // categoria selecionada
        category_name: category.options[category.selectedIndex].text, // nome da categoria selecionada
        created_at: new Date() // data de criação da despesa
    }
    expanseAdd(newExpense); // chama a função para adicionar a despesa
}

function expanseAdd(newExpense) { // função para adicionar uma nova despesa à lista
    try {
    const expenseItem = document.createElement('li'); // cria um novo elemento de lista para a despesa
    expenseItem.classList.add('expense'); // adiciona a classe 'expense' para estilização
    
    // cria o icon
    const expenseIcon = document.createElement('img') // cria o icone da categoria
    expenseIcon.setAttribute('src', `./img/${newExpense.category_id}.svg`); // define o caminho do ícone com base no nome da categoria
    expenseIcon.setAttribute('alt', `Ícone de ${newExpense.category_name}`); // define o texto alternativo do ícone
    
    // cria a descrição da despesa
    const expenseDescription = document.createElement('div'); // cria um elemento para exibir a descrição da despesa
    expenseDescription.classList.add('expense-info'); // adiciona a classe 'info' para estilização
    
    // cria o nome
    const expenseName = document.createElement('strong'); // cria um elemento para exibir o nome da despesa
    expenseName.textContent = newExpense.expense; // define o texto do nome da despesa

    // cria o categoria da despesa
    const expenseCategory = document.createElement('span'); // cria um elemento para exibir a categoria da despesa
    expenseCategory.textContent = newExpense.category_name; // define o texto da categoria da despesa
    
    
    // adiciona name e categoria à descrição
    expenseDescription.append(expenseName , expenseCategory); // adiciona o nome e a categoria à descrição da despesa

    // cria o valor da despesa
    const expenseAmount = document.createElement('span');
    expenseAmount.classList.add('expense-amount'); // adiciona a classe 'expense-amount' para estilização
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace('R$',"")}`; // define o valor da despesa
    
    // cria o ícone de remoção
    const removeIcon = document.createElement('img'); // cria o ícone de remoção
    removeIcon.classList.add('remove-icon'); // adiciona a classe 'remove-icon' para estilização
    removeIcon.setAttribute('src', './img/remove.svg'); // define o caminho do ícone de remoção
    removeIcon.setAttribute('alt', 'remover'); // define o texto alternativo do ícone de remoção

    // adiciona os elementos à lista de despesas
    expenseItem.append(expenseIcon, expenseDescription, expenseAmount, removeIcon); // adiciona o ícone e a descrição à despesa
    expenseList.append(expenseItem); // adiciona a despesa à lista de despesas

    // atualiza os totais de despesas e reembolsos
    updateTotals();
    formClear(); // limpa o formulário após adicionar a despesa

    } catch (error) {
        console.error('Erro ao adicionar despesa:', error);
    }
}

function updateTotals(){ // atualiza os totais de despesas e reembolsos
    try { // recupera todas as despesas da lista
        const items = expenseList.children
// atualiza a quantidade de despesas
        expenseQuantity.textContent = `${items.length} ${items.length === 1 ? 'despesa' : 'despesas'}`; // atualiza o texto da quantidade de despesas
        let total = 0; // inicializa o total de despesas

        for (let item = 0; item < items.length; item++) { // percorre cada item da lista de despesas
            const itemAmount = items[item].querySelector('.expense-amount') // seleciona o elemento que exibe o valor da despesa
            let value = parseCurrencyBRL(itemAmount.textContent); // converte o valor exibido para número
            value = parseFloat(value); // converte o valor para número
            if (isNaN(value)) { // verifica se o valor é um número válido 
                return alert('nao foi possível calcular o total de despesas'); // exibe um alerta caso o valor não seja um número válido
        }

            total += Number(value); // acumula o valor da despesa no total
       }
       const symbol = document.createElement('small'); // cria um elemento para exibir o símbolo de moeda
       symbol.textContent = 'R$';
       total = formatCurrency(total).replace('R$', '').trim(); // formata o total como moeda brasileira e remove o símbolo de moeda para exibir apenas o valor
       expenseTotal.innerHTML = ''
       expenseTotal.append(symbol, total); // atualiza o texto do total de despesas
    }
    catch (error) {
        console.error('Erro ao atualizar totais:', error);
    }
}

//
expenseList.addEventListener('click', (event) => {
    if(event.target.classList.contains('remove-icon')){
        const item = event.target.closest('.expense'); // seleciona o item de despesa mais próximo do ícone de remoção clicado  
        item.remove()
        updateTotals(); // atualiza os totais de despesas e reembolsos após a remoção da despesa
    }
})

function formClear(){
    expense.value = ''; // limpa o campo de descrição da despesa
    amount.value = ''; // limpa o campo de valor da despesa
    category.value = ''; // limpa o campo de categoria da despesa

    expense.focus(); // foca o campo de descrição da despesa para facilitar a inserção de uma nova despesa
}