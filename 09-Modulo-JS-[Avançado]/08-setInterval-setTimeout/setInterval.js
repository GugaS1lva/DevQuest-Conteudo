/* ESCOPO:
setInterval(() => {
    alert('aousfhausfuaiufohasfuiohafu')
}, 2000);
*/ 

const idInterval = setInterval(() => {
                    alert('De 2 em 2 BOOOHHH')
                }, 2000);

// PARAR A EXECUÇÃO DO 'setInterval()':
    // 1° - Precisa atribuir o setTimeout à uma variável ex. 'idInterval'
    // 2° - Use a função abaixo passando por parâmetro o nome/IDentificador da  variável.
clearInterval(idInterval)