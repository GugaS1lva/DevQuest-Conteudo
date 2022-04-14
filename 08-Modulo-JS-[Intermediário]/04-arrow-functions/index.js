/* FLUXO DE CRIAÇÃO E EXECUÇÃO DE FUNÇÕES ANÔNIMAS
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

