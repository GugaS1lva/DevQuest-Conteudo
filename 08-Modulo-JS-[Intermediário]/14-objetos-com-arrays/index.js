// Declaração das Propriedades dos Objetos que serão adicionados no Array/Lista Bic_Intensity. Esse Array vai ser declarado como sendo o conteúdo de uma Propriedade do Objeto 'estojo'.

// Propriedades dos Objetos
let bic_Intensity_1 = {
    cor: 'azul'
}
let bic_Intensity_2 = {
    cor: 'laranja'
}

// OBS: Apesar de não estar aparecendo no PRIMEIRO CONSOLE.TABLE, ele precisa estar montado aqui e com todas as suas propriedades declaradas para poder ser adicionado ao Array NO SEGUNDO CONSOLE.TABLE.
let bic_Intensity_3 = {
    cor: 'verde'
}


let estojo = {
    lapis: 2,
    caneta_Azul: 1,
    caneta_Vermelha: 1,
    caneta_Preta: 1,
    // Arrays de Objetos
    bic_Intensity: [bic_Intensity_1, bic_Intensity_2],
}
// Mostrando o que temos no PRIMEIRO console.table
console.table(estojo)


// Adicionando mais uma caneta Bic dentro do Array de Bic's
estojo.bic_Intensity.push(bic_Intensity_3)

// Mostrando o que temos no SEGUNDO console.table
console.table(estojo)



/* Adicionando e instanciando um Objeto direto dentro de um Array:
    // Analize a diferença dos Objetos do Array desse código e do código acima

    let estojo = {
        lapis: 2,
        caneta_Azul: 1,
        caneta_Vermelha: 1,
        caneta_Preta: 1,
        // Arrays de Objetos
        bic_Intensity: [{ cor: 'azul' }, { cor: 'laranja' }],
    }

    console.table(estojo)
*/