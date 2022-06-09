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
    const meuPedido = {
        itens: [
            {nome: 'Arco Curvo Simples', valor: 200},
            {nome: 'Pack Setas para Arco (50x)', valor: 25},
            {nome: '[ESPECIAL] Entrega', valor: 200, entrega: true}
        ]
    }

    const resultado = totalPedidos(meuPedido)

    expect(resultado).toBe(425)
})

it('COBRAR FRETE caso o carrinho tenha valor EXATAMENTE IGUAL a 500', () => {
    const meuPedido = {
        itens: [
            {nome: 'Talismã de Invocação Simples', valor: 350},
            {nome: 'Poção de Mágica', valor: 50},
            {nome: '[ESPECIAL] Entrega', valor: 100, entrega: true}
        ]
    }

    const res = totalPedidos(meuPedido)

    expect(res).toBe(500)
})

it('NOT-ADD taxa caso o local de entrega seja na dimensão Terrestre.', () => {
    const meuPedido = {
        dimensão: 'Terrestre [0]',
        itens: [
            {nome: 'Talismã de Invocação Simples', valor: 350},
            {nome: 'Poção de Mágica', valor: 50},
            {nome: '[ESPECIAL] Entrega', valor: 100, entrega: true}
        ]
    }

    const res = totalPedidos(meuPedido)

    expect(res).toBe(500)
})

it('ADD 30% de taxa caso o local de entrega seja em outra dimensão pelo STIC (Sistema de Teletransporte Interdimensional Comum)', () => {
    const meuPedido = {
        dimensão: 'Andrómeda (Messier 31, NGC 224) [STIC]',
        itens: [
            {nome: 'Talismã de Invocação Simples', valor: 350},
            {nome: 'Poção de Mágica', valor: 50},
            {nome: '[ESPECIAL] Entrega', valor: 100, entrega: true}
        ]
    }

    const res = totalPedidos(meuPedido)

    expect(res).toBe(530)
})

it('ADD 30% de taxa caso o local de entrega seja em outra dimensão pelo STIC (Sistema de Teletransporte Interdimensional Comum)', () => {
    const meuPedido = {
        dimensão: 'Galáxia do Triângulo (Messier 33, NGC 598) [STIC]',
        itens: [
            {nome: 'Talismã de Invocação Simples', valor: 350},
            {nome: 'Poção de Mágica', valor: 50},
            {nome: '[ESPECIAL] Entrega', valor: 100, entrega: true}
        ]
    }

    const res = totalPedidos(meuPedido)

    expect(res).toBe(530)
})

it('ADD 30% de taxa caso o local de entrega seja em outra dimensão pelo STIC (Sistema de Teletransporte Interdimensional Comum)', () => {
    const meuPedido = {
        dimensão: 'Centaurus A (NGC 5128) [STIC]',
        itens: [
            {nome: 'Talismã de Invocação Simples', valor: 350},
            {nome: 'Poção de Mágica', valor: 50},
            {nome: '[ESPECIAL] Entrega', valor: 100, entrega: true}
        ]
    }

    const res = totalPedidos(meuPedido)

    expect(res).toBe(530)
})

it('ADD 30% de taxa caso o local de entrega seja em outra dimensão pelo STIC (Sistema de Teletransporte Interdimensional Comum)', () => {
    const meuPedido = {
        dimensão: 'NGC 3031, M81 [STIC]',
        itens: [
            {nome: 'Talismã de Invocação Simples', valor: 350},
            {nome: 'Poção de Mágica', valor: 50},
            {nome: '[ESPECIAL] Entrega', valor: 100, entrega: true}
        ]
    }

    const res = totalPedidos(meuPedido)

    expect(res).toBe(530)
})