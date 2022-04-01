/* ANATOMIA DO SWITCH
    
    switch(parametro){
        case valor1:
            bloco
            break
        
        case valor2:
            bloco
            break
        
        case valor3:
            bloco
            break

        case valor4:
            bloco
            break

        default:
            bloco
            break
    }
*/


/* Exemplo Simples:

    let paises = 'Brasil'

    switch(paises){
        case 'Brasil':
            console.log(`Você é Brasileiro!`)
            break

        case 'Portugal':
            console.log(`Você é Português!`)
            break

        default:
            console.log('Você é Extrageiro.')
            break
    }
*/

// Exemplo Multiplos Cases:

let mediaAluno = 1
switch(mediaAluno){
    case 0:
    case 1:
    case 2:
        console.log('Expulso!!')
        break
    
    case 3:
    case 4:
    case 5:
        console.log('Reprovado.')
        break

    case 6:
    case 7:
    case 8:
        console.log('Aprovado.')
        break

    case 9:
    case 10:
        console.log('Parabéns! Você foi promovido!!')
        break
    
    default:
        console.log('[ERRO] Nota Inválida.')
        break
}
