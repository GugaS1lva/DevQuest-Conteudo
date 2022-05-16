// Usando o exemplo da aula anterior para demonstrar o uso do 'then()'.
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


let passarCafe = () => {
    console.log('Passando o café...')
}

let beberCafe = () => {
    console.log('Bebendo o café...')
}

ferverAgua(chaleiraNoFogo, fogaoLigado).then(passarCafe)