// ARRAY:

let frutas = ['Acerola', 'Banana', 'Cajú']

// OBJETOS:
let caderno = {
    capa: 'Azul',
    corFolhas: 'Branco',
    paginas: 40
}
let caderno2 = {
    capa: 'Preto',
    corFolhas: 'Cinza',
    paginas: 600
}

// Colocando OBJETOS dentro de um ARRAY
let prateleira = [caderno, caderno2]
console.log('Mostrando TODOS os OBJETOS do Array:')
console.table(prateleira)


// =================================================================== //
// Acessando um só Objeto de dentro de um Array.
    // Para acessar o ÍNDICE desse ARRAY, USE: []
console.log('Mostrando APENAS UM dos Objetos do Array:')
console.table(prateleira[1])

// Acessando as Propriedades dos Objetos que estão dentro de um Array.
    // Para acessar as PROPRIEDADES desse ITEM, USE: .nomePropriedade
console.log('Mostrando APENAS UMA das Propriedades do Objeto escolhido')
console.log('Propriedade >>> páginas:')
console.table(prateleira[1].paginas)