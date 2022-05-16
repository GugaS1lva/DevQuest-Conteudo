// Classes são escritas com a letra inicial Maiúscula. Recebe uma função como parâmetro.

/* Anatomia de uma Promisse: 
                // resolve e reject são funções, podem ser invocadas: 'resolve()'
    new Promise((resolve, reject) => {

    })
*/


let ferverAgua = (chaleiraNoFogo, fogaoLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraNoFogo && fogaoLigado){
            console.log('AGUA AQUECENDO...')
            resolve()

        } else{
            console.log('ERRO - É necessário ligar o fogão para aquecer a água.')
            reject()

        }
    })
}


let chaleiraNoFogo = true
let fogaoLigado = true

ferverAgua(chaleiraNoFogo, fogaoLigado)