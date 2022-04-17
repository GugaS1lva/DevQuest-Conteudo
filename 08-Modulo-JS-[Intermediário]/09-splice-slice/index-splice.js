// Anatomia: array.splice(indice, numRemove)

/*
    let frutas = ['Abacate', 'Banana', 'Cajú', 'Dendê', 'Embaúba', 'Figo', 'Goiaba', 'Hilocéreo', 'Imbu', 'Jambo']

    // Mostra: 'Do Elemento 3 até ter 5 Elementos dentro'
    let frutasExtraidas = frutas.splice(3, 5)

    console.table(frutasExtraidas)

    console.table(frutas) // Perceba que mostrou apenas os itens que não estão dentro do 'frutasExtraidas'
*/

// ============================================================================ //

/* Substituindo Elementos */
let frutas = ['Abacate', 'Banana', 'Cajú', 'Dendê', 'Embaúba', 'Figo', 'Goiaba', 'Hilocéreo', 'Imbu', 'Jambo']

let frutasSubstituidas = frutas.splice(3, 3, 'FrutaSecreta-01', 'FrutaSecreta-02', 'FrutaSecreta-03')

console.table(frutasSubstituidas) // Mostra apenas as frutas REMOVIDAS

console.table(frutas)