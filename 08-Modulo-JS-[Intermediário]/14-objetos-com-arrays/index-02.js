// Objeto dentro de outro Objeto

let cliente = {
    nome: 'Guga',
    ultimoPedido: {
        produto: 'Xbox',
        valor: '3000',
        jogos: [
            {nome: 'Final Fantasy'}
        ]
    }
}

// Mostrando o nome do jogo do último pedido do cliente
console.log(cliente.ultimoPedido.jogos[0].nome)
