// EXEMPLO DE HOF - HIGHER ORDER FUNCTION + ARROW FUNCTION

const getMultiplier = Multiplier => number => number * Multiplier

const double = getMultiplier(2)
const triple = getMultiplier(3)
const quadruple = getMultiplier(4)

console.log(double(5))
console.log(triple(3))
console.log(quadruple(15))