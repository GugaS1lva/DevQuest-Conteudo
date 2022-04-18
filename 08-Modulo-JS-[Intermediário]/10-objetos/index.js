
// Objeto Anatomia:
// let objeto = { }


// Instanciando um objeto vazio, no momento.
let sapato = { }

// As características do objeto tênis (cor, marca, tamanho) é chamada de Propriedades.

let tenis = {
    // ANATOMIA DA PROPRIEDADE: 
        // chavePropriedade: 'ValorPropriedade'
    cor: 'Branco',
    tamanho: 42,
    estoque: true,

    testeCamelCase: 'Use Nomes simples, mas CamelCase funciona para nomes maiores'
}

console.table(tenis) // Mostra todo o Objeto


// Acessando Propriedades do Objeto:
console.log(tenis.tamanho)
console.log(tenis['cor']) // Segunda Forma OBS: MENOS USUAL


// Adicionando Propriedades pro Objeto em qualquer parte do código:
tenis.valor = 'R$' + 40


console.table(tenis)