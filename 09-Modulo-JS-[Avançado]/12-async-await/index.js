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

let passarCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log('PASSO 2 finalizado: Café foi passado.')
        resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve) => {
        console.log('PASSO 3 finalizado: Terminei de beber o café.')
        resolve(true)
    })
}

let limparXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log('PASSO 4 finalizado: Terminei de lavar a xícara.')
        resolve(true)
    })
}

let chaleiraNoFogo = true
let fogaoLigado = true

// MESMO CÓDIGO Da aula passada, mas usando o Async e Await

    // O 'async' DEVE ser declarado na FUNÇÃO IMEDIATA que eu estou trabalhando.
async function iniciarProcessoCafe(){
    const aguaFervida = await ferverAgua(chaleiraNoFogo, fogaoLigado)
    const cafePassado = await passarCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLimpa = await limparXicara(cafeTomado)
    if (xicaraLimpa) console.log('Ritual do café finalizado, bora trabalhar!')
}

iniciarProcessoCafe()