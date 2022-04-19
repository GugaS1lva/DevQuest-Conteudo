/* ESSES TESTES SÓ FUNCIONAM NO CONSOLE DO CHROME */
    // Obs: O 'This' funciona com escopos (Global ou Local) 


// Restringe o This ao seu próprio escopo. Impede vazamentos.
'use strict' 

console.log(window)
console.log(window === this)

this.name = 'Guga'

function saudar(){
    console.log('this no contexto da função', this)
    console.log(`Olá ${this.name}`)
    //Obs: O 'This' só funciona aqui dentro por casa do comportamento padrão do this. Por padrão, o this deveria funcionar apenas dentro do seu escopo, mas, nesse exemplo, ele está vazando.
    // 'use strict' => Para evitar isso, no topo da página, com àspas simples e sem letras maiúscolas, escreva 'use strict' e o comportamento do 'This' voltará a ser restrito ao seu próprio escopo.
}

saudar()