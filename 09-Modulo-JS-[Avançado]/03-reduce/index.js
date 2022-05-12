/* Somando as algumas propriedades numéricas dos objetos de dentro do Array
    let ordens = [
        {cliente: 'Guga', tipo: 'Compra', quantidade: 56, ativo: 'NFLX34'},
        {cliente: 'Bell', tipo: 'Compra', quantidade: 76, ativo: 'AAPL34'},
        {cliente: 'Paulo', tipo: 'Venda', quantidade: 21, ativo: 'GOGL34'}
    ]

    let quantidadeDeOrdens = 0
    for(let c = 0; c < ordens.length; c++){
        quantidadeDeOrdens += ordens[c].quantidade 
    }

    console.log(quantidadeDeOrdens)
*/


/* Somando propriedades dos objetos usando o Reduce 
    let ordens = [
        {cliente: 'Guga', tipo: 'Compra', quantidade: 56, ativo: 'NFLX34'},
        {cliente: 'Bell', tipo: 'Compra', quantidade: 76, ativo: 'AAPL34'},
        {cliente: 'Paulo', tipo: 'Venda', quantidade: 21, ativo: 'GOGL34'}
    ]

    let quantidadeDeOrdens = ordens.reduce(function(somaPropriedadesObjetos, ordem){
        return somaPropriedadesObjetos + ordem.quantidade
    }, 0)

    console.log(quantidadeDeOrdens)
*/


/* Somando propriedades dos objetos usando o Reduce + Arrow Function */
let ordens = [
    {cliente: 'Guga', tipo: 'Compra', quantidade: 56, ativo: 'NFLX34'},
    {cliente: 'Bell', tipo: 'Compra', quantidade: 76, ativo: 'AAPL34'},
    {cliente: 'Paulo', tipo: 'Venda', quantidade: 21, ativo: 'GOGL34'}
]

let quantidadeDeOrdens = ordens.reduce((somandoPropriedadesDosObjetos, ordem) => somandoPropriedadesDosObjetos + ordem.quantidade, 0)

console.log(quantidadeDeOrdens)
