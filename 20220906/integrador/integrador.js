/*
Exercício Integrador

Temos que fazer um sistema para um Agricultor controlar suas vendas. Ele tem um controle de vendas em um caderno, onde os produtos estão organizados por nome, preço e quantidade vendida. 

Portanto, crie um array de objetos literais com essas informações. No sistema, você tem que adicionar uma função (ou várias) que realize os seguintes passos:
    1. Calcular o lucro total de todos os produtos;
    2. Permitir pesquisar um produto pelo nome e calcular seu lucro total;
    3. Permite receber um valor e indicar todos os produtos que venderam mais que esse valor;
    4. Classifique todos os produtos pela quantidade de dinheiro que geraram.
    5. Encontre um produto e atribua a ele um novo valor (reutilize o código que permite encontrar o produto pelo nome).
    6. Calcule o lucro total após pagar 45% do lucro em impostos.
*/


let vendas = [
    { nome: 'Maçã', preco: 2.25, quantidade: 10 },
    { nome: 'Banana', preco: 2.89, quantidade: 5 },
    { nome: 'Morango', preco: 1.75, quantidade: 20 },
    { nome: 'Uva', preco: 1.30, quantidade: 15 },
    { nome: 'Abacaxi', preco: 2.50, quantidade: 5 },
    { nome: 'Laranja', preco: 1.80, quantidade: 10 },
    { nome: 'Pera', preco: 1.50, quantidade: 20 },
    { nome: 'Melancia', preco: 2.00, quantidade: 10 },
    { nome: 'Abacate', preco: 2.50, quantidade: 5 },
    { nome: 'Goiaba', preco: 1.90, quantidade: 20 },
];
console.log(vendas);


// insere informacao de lucro no array
vendas.map(i => i.lucro = parseFloat(parseFloat(i.preco * i.quantidade).toFixed(2)));
console.log(vendas);


// 1. Calcular o lucro total de todos os produtos;
let lucroTotal = vendas.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
console.log(lucroTotal);


// 2. Permitir pesquisar um produto pelo nome e calcular seu lucro total;
function buscaProduto(nome) {
    let produto = vendas.find(produto => produto.nome === nome);
    let lucroProduto = produto.preco * produto.quantidade;
    console.log(`O Lucro com ${produto.nome} foi de ${lucroProduto}`);
    return info = [produto.nome, produto.preco, produto.quantidade, lucroProduto];
}
console.log(buscaProduto('Abacate'));


// 3. Permite receber um valor e indicar todos os produtos que venderam mais que esse valor;
function buscaProdutoValor(valor) {
    let produtos = vendas.filter(produto => produto.preco * produto.quantidade > valor);
    return produtos;
}
console.log(buscaProdutoValor(20));


// 4. Classifique todos os produtos pela quantidade de dinheiro que geraram.
function classificaProduto() {
    vendas.sort((a, b) => b.lucro - a.lucro);
    return vendas;
}
console.log(classificaProduto());


// 5. Encontre um produto e atribua a ele um novo valor (reutilize o código que permite encontrar o produto pelo nome).
function buscaProduto2(nome) {
    let produto = vendas.find(produto => produto.nome === nome);
    return produto;
}

function atualizaProduto(produto, novoPreco) {
    return buscaProduto2(produto).preco = novoPreco;
}
console.log(atualizaProduto('Abacate', 3.50));
console.log(vendas);


// 6. Calcule o lucro total após pagar 45% do lucro em impostos.
function calculaImposto(lucroTotal) {
    let imposto = lucroTotal * 0.45;
    return parseFloat(parseFloat(lucroTotal - imposto).toFixed(2));
}
console.log(calculaImposto(lucroTotal));