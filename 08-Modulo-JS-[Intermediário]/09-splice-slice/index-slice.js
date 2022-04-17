// Anatomia: array.slice(inicio[, fim])

let frutas = ['Abacate', 'Banana', 'Cajú', 'Dendê', 'Embaúba', 'Figo', 'Goiaba']

let frtsExtraidas01 = frutas.slice(1, 5) //Mostra: 'Tudo dentro de um até o outro'
let frtsExtraidas02 = frutas.slice(5) //Mostra: 'Do próximo item, até o último'

console.table(frtsExtraidas01)
console.table(frtsExtraidas02)