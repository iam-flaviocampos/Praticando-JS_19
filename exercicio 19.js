/*
O cardápio de uma lanchonete é o seguinte:

Código  Descrição do Produto    Preço
100     Cachorro Quente         R$ 3,00
200     Hambúrguer Simples      R$ 4,00
300     Cheeseburguer           R$ 5,50
400     Bauru                   R$ 7,50
500     Refrigerante            R$ 3,50
600     Suco                    R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function cardapio (codigo, quantidade){
    let preco = [3.00, 4.00, 5.50, 7.50, 3.50, 2.80]

    if (codigo >=  100 && codigo <= 600 && (codigo % 100) === 0){
        let indice = (codigo / 100) -1 //Fazer referência ao indice correspondente ao código

        if (indice < preco.length){
            let item = obterItem(codigo)
            let valorTotal = quantidade * preco[indice]

            console.log("Seu produto de numero " + codigo + " é: " + item + ". Pela quantidade dada, o preco ficou por: R$" + valorTotal)
        } else {
            console.log("Produto inexistente!")
        }
    } else {
        console.log("Código inválido!")
    }
}

function obterItem(codigo){
    switch(codigo){
        case 100:
            return "Cachorro Quente"
        case 200:
            return "Hambúrguer Simples"
        case 300:
            return "Cheeseburguer"
        case 400:
            return "Bauru"
        case 500:
            return "Refrigerante"
        case 600:
            return "Suco"
    }
}

cardapio(100, 5)
cardapio(200, 5)
cardapio(300, 5)
cardapio(400, 5)
cardapio(500, 5)
cardapio(600, 5)
cardapio(700, 5)