// FALHEI EM ALGUM LUGAR. Guga do futuro, já que você entende melhor o que são promisses, diga onde eu errei e me mostre como consertar tudo, obrigado!

let chaleiraNoFogo = true
let fogaoLigado = true


let aguaFervida = true
let aguaLimpa = true

let ferverAgua = (chaleiraNoFogo, fogaoLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraNoFogo && fogaoLigado){
            console.log('PASSO 1 finalizado: Água foi fervida.')
            resolve()
        
        } else{
            console.log('[ERRO] - É necessário colocar a chaleira com a água e ligar o fogo, senão teu cafezinho não vai ficar pronto nunca.')
            reject()

        }
    })
}

let passarCafe = (aguaFervida, aguaLimpa) => {
    return new Promise((resolve, reject) => {
        if (aguaFervida && aguaLimpa){
            console.log('PASSO 2 finalizado: Café foi passado.')
            resolve()

        } else{
            console.log('[ERRO] - Seu café tá mei ceboso hein..')
            reject()
        
        }
    })
}

ferverAgua(chaleiraNoFogo, fogaoLigado)
    .then(() => {
        return passarCafe()
    })