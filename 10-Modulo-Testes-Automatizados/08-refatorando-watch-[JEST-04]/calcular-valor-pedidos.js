/* Exemplo prático do Reduce() funcionando.
    const rockets = [
        {country: 'Brasil', launches: 32},
        {country: 'EUA', launches: 32},
        {country: 'China', launches: 32},
        {country: 'Russia', launches: 32},
        {country: 'Canadá', launches: 32},
    ]

    const totalLançamentos = rockets.reduce((preVal, valElement) => preVal + valElement.launches, 0)

    console.log(totalLançamentos)
*/

const totalPedidos = pedido => {
    const valorProdutos = pedido.itens
    .filter(item => !item.entrega)
    .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)

    const entrega = pedido.itens.filter(item => item.entrega)
    
    return valorProdutos > 500 ? valorProdutos : valorProdutos + entrega[0].valor

    /* SEM O OPERADOR TERNÁRIO:

        if(valorProdutos > 500){
            return valorProdutos
        
        } else{
            return valorProdutos + entrega[0].valor
        }
    */
}

module.exports = totalPedidos