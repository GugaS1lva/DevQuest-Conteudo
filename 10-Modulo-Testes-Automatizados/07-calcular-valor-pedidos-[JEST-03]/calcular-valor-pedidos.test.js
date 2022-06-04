const totalPedidos = require('./calcular-valor-pedidos')

it('NÃO COBRAR FRETE caso o carrinho tenha valor SUPERIOR a 500', () => {
    // AAA - Arrange; Act; Assert;
    // Arrange:
    const meuPedido = {
        itens: [
            {nome: 'Arco Encantado', valor: 2000},
            {nome: '[ESPECIAL] Entrega', valor: 100, entrega: true}
        ]
    }

    // Act:
    const totalCarrinho = totalPedidos(meuPedido)

    // Assert:
    expect(totalCarrinho).toBe(2000)
})

it('COBRAR FRETE caso o carrinho tenha valor INFERIOR a 500', () => {
    // AAA - Arrange; Act; Assert;
    // Arrange:
    const meuPedido = {
        itens: [
            {nome: 'Arco Curvo Simples', valor: 200},
            {nome: 'Pack Setas para Arco (50x)', valor: 25},
            {nome: '[ESPECIAL] Entrega', valor: 200, entrega: true}
        ]
    }

    // Act:
    const resultado = totalPedidos(meuPedido)

    // Assert:
    expect(resultado).toBe(425)
})

it('COBRAR FRETE caso o carrinho tenha valor EXATAMENTE IGUAL a 500', () => {
    // AAA - Arrange; Act; Assert;
    // Arrange:
    const meuPedido = {
        itens: [
            {nome: 'Talismã de Invocação Simples', valor: 350},
            {nome: 'Poção de Mágica', valor: 50},
            {nome: '[ESPECIAL] Entrega', valor: 100, entrega: true}
        ]
    }

    // Act:
    const res = totalPedidos(meuPedido)

    // Assert:
    expect(res).toBe(500)
})