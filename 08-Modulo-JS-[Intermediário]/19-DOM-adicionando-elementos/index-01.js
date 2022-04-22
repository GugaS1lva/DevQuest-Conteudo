// Pegando o 'select'.
    // Da Tag 'select', pegue todos os itens do Array que tiverem "name='estados'"
let estados = document.querySelector("select[name='estados']")


// FLUXO: A variável 'estados' vai acessar um escutador 'addEventListener' que tem dois parâmetros definidos: O primeiro, 'change', diz respeito a Mudanças que podem acontecer dentro do Elemento. O segundo vai ser a Ação que vai acontecer, caso essa Mudança aconteça, nesse caso, uma Função de Alerta na tela.
estados.addEventListener('change', function (){
    alert('MUDOU')
})