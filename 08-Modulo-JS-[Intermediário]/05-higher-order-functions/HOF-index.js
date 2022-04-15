// NÃO É UMA HIGHER ORDER FUNCTION - Porque não recebe uma Função como Parâmetro nem Retorna uma Função.

function escopoTeste01(){
    // Script para duplicar, triplicar ou quadruplicar um número que foi invocado pelo console.log (não esqueça de invocar a própria função dentro do console.lg)
    function double(aNumber){
        return aNumber * 2
    }
    function triple(aNumber){
        return aNumber * 3
    }
    function quadruple(aNumber){
        return aNumber * 4
    }
    
    console.log(double(9))
}
// OBS: A única mudança do código é os números multiplicadores.

// Da mesma forma que essas três funções multiplicadoras retornam um valor, a gente pode criar uma Função que retorna uma dessas três funções multiplicadoras.
function escopoTeste02(){

    function getMultiplier(multiplier){
        // Imagina que isso é a função double() só que flexível
            //'aNumber' representa o número que vai ser dobrado/triplicado/multipl.
        return function (aNumber){
                    //No lugar de multiplicar 'aNumber' por um número estático, multiplica pelo parâmetro 'multiplier'.
            return aNumber * multiplier
        }
    }
    
    const double = getMultiplier(2)
    const triple = getMultiplier(3)
    const quadruple = getMultiplier(4)

    console.log(double(5))
}

//REFATORANDO PARA UMA ARROW FUNCTION
function escopoTeste03(){
    // Declarar uma const getMultiplier que recebe 'multiplier' por parâmetro e retorna uma nova função que recebe 'aNumber' por parâmetro e retorna 'aNumber' multiplicado por 'multiplier'.
    const getMultiplier = multiplier => aNumber => aNumber * multiplier
}