/* FLUXO PARÃO DE CRIAÇÃO E EXECUÇÃO DE FUNÇÕES

    // Função 'somar()' criada com dois parâmetros vazios (n1 e n2)
    function somar(n1, n2){

        //Atribui as operações e valores (ainda vazios) pra dentro da função 'somar()' 
        return n1 + n2
        // Aqui será também será realizado operações, concatenações e tudo mais.
    }

    // Cria uma nova variável 'let novaVariável' e atribui à ela a função 'somar()' mas agora definindo os valores dos parâmetros que antes estavam vazios (n1 e n2).
    let novaVariável = somar(12, 5)

    // Mostra o que tem dentro da 'novaVariável': a função 'somar()' de parâmetros n1 e n2 igual a 12 e 5 respectivamente.
    console.log(novaVariável)
*/

/* FLUXO DE CRIAÇÃO E EXECUÇÃO DE FUNÇÕES ANÔNIMAS

    // Variácel 'somaResultado' criada e atribuida à com uma Função-Anônima de parâmetros vazios (n1 e n2).
    let somaResultado = function(n1, n2){
        
        //Atribuição de operações e valores (ainda vazios) para dentro da Função-Anônima, que será atribuída à variavel 'somaResultado'.
        return n1 + n2
    }

    // Mostra o que tem dentro da variável 'somaResultado' que é uma função anônima de parâmetros vazios.
    console.log(somaResultado)

    // Define FINALMENTE os valores de n1 e n2. Então, todo o fluxo inicia novamente: os valores de n1 e n2 são adicionados e sofrem a operação matemática. Os valores são modificados e mandados para dentro da função anônima, que será atribuida à variavel 'somaResultado' e que por fim será mostrada pelo 'console.log()'.
    console.log(somaResultado(12, 5))


    ```
        let resultadoDaSoma = function(n1, n2){
            return n1 + n2
        }

        console.log(resultadoDaSoma(12, 5))

        >>> 17
    ```
*/


// Arrow Function: É um SHORTHAND da função padrão.
    /* Função Padrão:
        let resultadoDaSoma = function(n1, n2){
            return n1 + n2
        }

        console.log(resultadoDaSoma(12, 5))
        
        >>> 17
    */

    /* Arrow Function 01:
        //NÃO TEM a palavra function e depois dos parênteses tem uma seta =>
        let resultadoDaSoma = (n1, n2) => {
            return n1 + n2
        }

        console.log(resultadoDaSoma(12, 5))
        
        >>> 17
    */


    /* Arrow Function 02:
        //NÃO TEM a palavra FUNCTION e depois dos parênteses tem uma seta =>. 
        Se tiver apenas um parâmetro, dispensa o uso dos parênteses.
        let testeMatematico = n1 => {
            return n1 * n1
        }

        console.log(testeMatematico(5))
        
        >>> 25
    */

    
    /* Arrow Funcion 03:
        //NÃO TEM a palavra function e depois dos parênteses tem uma seta =>. Quando o bloco de execução tem apenas uma linha, dispensa o uso das chaves e do 'return'.
        Se tiver apenas um parâmetro, dispensa o uso dos parênteses
        let resultadoDaSoma = (n1, n2) => n1 + n2
        console.log(resultadoDaSoma(12, 5))
        
        >>> 17
    */

