/* Mesmo Exemplo, só que de forma ENCADEADA, com menos código.

    document.querySelector("select[name='estados']").addEventListener('change', function(){
        alert('MUDOU V2.0')
    })
*/

// Capturando os valores do 'value'
document.querySelector("select[name='estados']").addEventListener('change', function(event){
    /* 
        Parâmetro 'event' + 'console.log(event)' mostra um Objeto com várias propriedades.
            // <img src="src/Screenshot_43.png" alt=""> PRINT DO OBJETO

        Encontre o alvo 'target'(de onde o evento vai disparar) desse objeto. Nesse caso é 'target: select'.
        
    */

        // Acessando o Objeto 'event', acessando o Alvo/'target', acessando o valor desse alvo.
    console.log(event.target.value)
})