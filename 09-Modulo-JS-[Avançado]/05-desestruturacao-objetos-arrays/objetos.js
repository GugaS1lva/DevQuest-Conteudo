// DESESTRUTURANDO OBJETOS


/* Armazenando os VALORES das Propriedades do objeto'pessoa' em variáveis separadas (let nome, let sobrenome e let idade).

    let pessoa = {nome: 'Guga', sobrenome: 'Silva', idade: 20}

    let nome = pessoa.nome
    let sobrenome = pessoa.sobrenome
    let idade = pessoa.idade

    console.log(`${nome}\n${sobrenome}\n${idade}`)
*/


// Armazenando os VALORES das Propriedades do objeto'pessoa' em variáveis separadas usando a DESESTRUTURAÇÃO DE OBJETOS
let pessoa = {nome: 'Guga', sobrenome: 'Sivla', idade: 20}

    // 1° - Nome da propriedade do objeto
    // 2° - Dois pontos (:)
    // 3° - Nome da variável
    // 4° - Sinal de igualdade fora do sinal de chaves
    // 5° - Nome do objeto que vai ser destrinchado
        // OBS: Separados por vírgula
let { nome: nome, sobrenome: sobrenome, idade: idade} = pessoa

console.log(`${nome}\n${sobrenome}\n${idade}\n`)