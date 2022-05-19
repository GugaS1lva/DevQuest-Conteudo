let ferverAgua = (chaleiraNoFogo, fogaoLigado) => {
    return new Promise((resolve, reject) => {
        // O throw manda o "erro" direto pro catch, onde poderá ser tratado.
        if(typeof chaleiraNoFogo != 'boolean') throw '[ERRO 002] - Os parâmetros dessa função precisam ter valor booleano.'

        if (chaleiraNoFogo && fogaoLigado){
            console.log('PASSO 1 finalizado: Água foi fervida.')
            resolve()

        } else{
            const avisoERRO = '[ERRO 001] - É necessário colocar a chaleira com a água e ligar o fogo, senão teu cafezinho não vai ficar pronto nunca.'
            reject(avisoERRO)
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

const chaleiraNoFogo = true
const fogaoLigado = true

async function iniciarProcessoCafe(){
    try{
        const aguaFervida = await ferverAgua(chaleiraNoFogo, fogaoLigado)
        const cafePassado = await passarCafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLimpa = await limparXicara(cafeTomado)
        if (xicaraLimpa) console.log('Xícara limpa, tudo ok.')

    } catch(error){
        console.log(error)

    } finally{
        console.log('Ritual do café finalizado, bora trabalhar!')

    } 
}

iniciarProcessoCafe()