// Exemplo Sem HOF - HIGHER ORDER FUNCTION
function teste1(){
    function duplicar(num){
        return num * 2
    }
    
    function triplicar(num){
        return num * 3
    }
    
    function quadruplicar(num){
        return num * 4
    }
    
    console.log(duplicar(5))
    console.log(triplicar(5))
    console.log(quadruplicar(5))
}

// Exemplo Com HOF - HIGHER ORDER FUNCTION
function teste2(){
    function multiplicar(multiplicador){
        return function(num){
            return num * multiplicador
        }
    }

    let duplicar = multiplicar(2)
    let triplicar = multiplicar(3)
    let quadruplicar = multiplicar(4)

    console.log(duplicar(5))
    console.log(triplicar(5))
    console.log(quadruplicar(5))
}

// Exemplo Com HOF - HIGHER ORDER FUNCTION | SHORTHAND
function teste3(){
    const multiplicar = multiplicador => num => num * multiplicador

    let duplicar = multiplicar(2)
    let triplicar = multiplicar(3)
    let quadruplicar = multiplicar(4)

    console.log(duplicar(10))
    console.log(triplicar(10))
    console.log(quadruplicar(10))
}