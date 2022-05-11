/* Capturando propriedades de dentro dos objetos e alocando para dentro de um Array novo:

    let pessoas = [
        {nome: 'Guga', idade: 20},
        {nome: 'Bell', idade: 20},
        {nome: 'Day', idade: 30},
        {nome: 'Dinha', idade: 25}
    ]

    let nomePessoas = []

    for (let c = 0; c < pessoas.length; c++){
        nomePessoas.push(pessoas[c].nome)
    }

    console.table(nomePessoas)

*/

/* Capturando propriedades dos objetos de dentro de um Array usando o MAP*/
let pessoas = [
    {nome: 'Guga', idade: 20},
    {nome: 'Bell', idade: 20},
    {nome: 'Day', idade:  30},
    {nome: 'Dinha', idade: 25}
]

let nomeDasPessoas = pessoas.map(function(pessoa){
    return `${pessoa.nome} tem, exatamente ${pessoa.idade} anos de idade.`
})

console.log(nomeDasPessoas)