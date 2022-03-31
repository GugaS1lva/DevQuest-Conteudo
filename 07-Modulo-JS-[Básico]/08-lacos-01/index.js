/* Anatomia do 'for'

    for (inicializador; teste-lógico; incremento){
        bloco
    }

    // EXEMPLO
        inicializador: uma variável é criada e recebe um valor inicial.
        teste-lógico: SE verdadero executa o bloco
        incremento: no fim da execução do bloco, faz um incremento na variável e retorna ao laço, fazendo novamente o teste-lógico. Quando o teste-lógico resultar em falso, pula o bloco de código e finaliza o laço de repetição.
*/


console.log('Vamos caminhar!')
for (let passo = 1; passo <= 5; passo++){
    console.log(`Dê agora o passo ${passo}`)
}