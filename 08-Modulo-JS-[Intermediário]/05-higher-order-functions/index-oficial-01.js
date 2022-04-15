// CALLBACK | É uma Função que é passada como parâmetro para outra Função.
/* SHORTHAND DOS IF's
    if (mesNasc > mesAtual){
        anoNasc - 1
    }
    ======================== SHORTHAND:
    if (mesNasc > mesAtual) anoNasc - 1
*/

/* CÓDIGO DOS GÊMEOS:
    const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
        const mesAtual = 4
        let anoDeNascimento = 2022 - idade
        if (mesDeNascimento > mesAtual) anoDeNascimento--
        imprimir(anoDeNascimento)
    }

    let imprimirAnoDeNascimento = anoDeNascimento => {
        console.log('Seu ano de nascimento é: ' + anoDeNascimento)
    }

    calcularAnoDeNascimento(20, 5, imprimirAnoDeNascimento)
*/ 

// Calculos Iniciais
const calcularAnoNasc = function (idade, mesNasc, imprimir){
    const mesAtual = 4
    let anoNasc = 2022 - idade

    if (mesNasc > mesAtual) anoNasc - 1 

    imprimir(anoNasc)
}


// Ação da segundoa função
let imprimirAnoNasc = anoNasc => {
    console.log(`Seu ano de nascimento é ${anoNasc}`)
}


// Imprimindo os valores (o ultimo parâmetro diz respeito a uma function mas funciona da mesma forma).
calcularAnoNasc(20, 5, imprimirAnoNasc)
