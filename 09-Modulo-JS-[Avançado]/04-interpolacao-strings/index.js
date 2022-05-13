const testeInterpolação = (firstName, lastName, age) => {
    return 'Primeiro nome: ' + firstName + ' Sobrenome: ' + lastName + '. De ' + age + ' anos de idade.'
}
console.log(testeInterpolação('01-Guga', 'Silva', 20))


const testeInterpolação02 = (firstName, lastName, age) => {
    return `Primeiro nome: ${firstName} Sobrenome: ${lastName}. De ${age} anos de idade.`
}
console.log(testeInterpolação02('02-Guga', 'Silva', 20))

console.log(`${testeInterpolação02('Fernando', 'Fernando', 80)} TESTES!!`)
// Usando a Template String para chamar uma função.
const testeInterpolação03 = (firstName, lastName, age) => {
    return `\nPrimeiro nome: ${firstName} \nSobrenome: ${lastName}. \nDe ${age} anos de idade.\n`
}
console.log(`========== \nQUESTER: ${testeInterpolação03('Gustavo', 'Silva', 20)}==========\nMATRICULADO COM SUCESSO!!!`)