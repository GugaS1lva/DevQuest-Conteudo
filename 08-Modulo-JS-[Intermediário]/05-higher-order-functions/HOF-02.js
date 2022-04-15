// EXEMPLO DE HOF - HIGHER ORDER FUNCTION

function getMultiplier(multiplier){
    return function (number){
        return number * multiplier
    }
}

const double = getMultiplier(2)
const triple = getMultiplier(3)
const quadruple = getMultiplier(4)

console.log(double(5))
console.log(triple(3))
console.log(quadruple(15))