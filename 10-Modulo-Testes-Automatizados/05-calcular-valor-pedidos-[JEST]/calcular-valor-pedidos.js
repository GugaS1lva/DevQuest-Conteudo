/* Exemplo prático do Reduce funcionando.
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

const meuPedido = {
    itens: [
        {nome: 'Poção de vida', valor: 50},
        {nome: 'Poção de vida', valor: 50},
        {nome: 'Espada Curta', valor: 100},
        {nome: '[ESPECIAL] Entrega', valor: 200, entrega: true},
    ]
}

const totalPedidos = pedido => {
    // pedido.itens.reduce((valTotal, valAtual) => valTotal + valAtual.valor, 0)
    const valorProdutos = pedido.itens
    .filter(item => !item.entrega)
    .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)

    const entrega = pedido.itens.filter(item => item.entrega)

    if(valorProdutos > 500){
        return valorProdutos
    
    } else{
        return valorProdutos + entrega[0].valor
    }
}

console.log(totalPedidos(meuPedido))