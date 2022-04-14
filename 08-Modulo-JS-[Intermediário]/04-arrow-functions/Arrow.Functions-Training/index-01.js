// Arrow Functions | Completa

function ativarBotão(){
    let num1 = Number(window.document.querySelector('#numMSG01').value)
    let num2 = Number(window.document.querySelector('#numMSG02').value)
    let res = window.document.querySelector('#res')

    let somandoNums = function somar(n1, n2){
        return n1 + n2
    }

    res.innerHTML = `${somandoNums(num1, num2)}` //No lugar de usar números estáticos, fiz o usuário inserir os números que quiser e joguei dentro dos parâmetros 'num1' e 'num2' da variável 'somandoNums' que anteriormente foi atribuída com uma função de soma.
}

//CRIEI UM CÁLCULO MATEMÁTICO FUNCIONAL MOSTRANDO APENAS UMA VARIÁVEL CONFIGURADA COM UMA FUNÇÃO DENTRO.