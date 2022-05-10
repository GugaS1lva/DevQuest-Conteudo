// FILTER: É uma função que aceita outra funcção por parâmetro e essa função vai ser usada para filtrar elementos.

/* EXEMPLO SEM O FILTER:
    let pessoas = [
        {nome: 'Guga', idade: 20},
        {nome: 'Bell', idade: 20},
        {nome: 'Day', idade: 30},
        {nome: 'Dinha', idade: 25}
    ]

    let pessoasComIdade20 = []
    for(let i = 0; i < pessoas.length; i++){
        if (pessoas[i].idade === 20){
            pessoasComIdade20.push(pessoas[i])
        }
    }

    console.table(pessoasComIdade20)
*/

/* EXEMPLO COM O FILTER: 
    let pessoas = [
        {nome: 'Guga', idade: 20},
        {nome: 'Bell', idade: 20},
        {nome: 'Day', idade: 30},
        {nome: 'Dinha', idade: 25}
    ]

    let pessoasComIdade20 = pessoas.filter(function(pessoaX){
        return pessoaX.idade === 20
    })

    console.table(pessoasComIdade20)
*/

/* EXEMPLO COM O FILTER + ARROW FUNCTION - 03: */
    let pessoas = [
        {nome: 'Guga', idade: 20},
        {nome: 'Bell', idade: 20},
        {nome: 'Day', idade: 30},
        {nome: 'Dinha', idade: 25}
    ]

    let pessoasComIdade20 = pessoas.filter((pessoaX) => pessoaX.idade === 20)

    console.table(pessoasComIdade20)
