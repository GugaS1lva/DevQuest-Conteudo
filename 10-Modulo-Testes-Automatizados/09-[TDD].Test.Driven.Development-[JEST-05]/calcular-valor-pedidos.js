// STIC [Sistema de Teletransporte Interdimensional Comum]


const totalPedidos = pedido => {
    const valorProdutos = pedido.itens
    .filter(item => !item.entrega)
    .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)

    const entrega = pedido.itens.filter(item => item.entrega)

    const porcentagemAdicionalEntrega = 0.3

    if (pedido.dimensão === 'Terrestre [0]'){
        entrega[0].valor

    } else if (pedido.dimensão === 'Andrómeda (Messier 31, NGC 224) [STIC]'){
        const taxa_STIC = entrega[0].valor * porcentagemAdicionalEntrega
        entrega[0].valor += taxa_STIC 

    } else if (pedido.dimensão === 'Galáxia do Triângulo (Messier 33, NGC 598) [STIC]'){
        const taxa_STIC = entrega[0].valor * porcentagemAdicionalEntrega
        entrega[0].valor += taxa_STIC 

    } else if (pedido.dimensão === 'Centaurus A (NGC 5128) [STIC]'){
        const taxa_STIC = entrega[0].valor * porcentagemAdicionalEntrega
        entrega[0].valor += taxa_STIC 

    } else if (pedido.dimensão === 'NGC 3031, M81 [STIC]'){
        const taxa_STIC = entrega[0].valor * porcentagemAdicionalEntrega
        entrega[0].valor += taxa_STIC 
    }

    return valorProdutos > 500 ? valorProdutos : valorProdutos + entrega[0].valor
}

module.exports = totalPedidos