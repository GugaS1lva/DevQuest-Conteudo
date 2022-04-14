// Arrow Functions | SHORTHAND-01

function ativarBotão(){
    let num1 = Number(window.document.querySelector('#numMSG01').value)
    let num2 = Number(window.document.querySelector('#numMSG02').value)
    let res = window.document.querySelector('#res')

    //Sem o nome FUNCTION e sem o nomeDaFunção dps mete uma seta dps dos parênteses
    let multiplicandoNums = (n1, n2) => {
        return n1 * n2
    }

    res.innerHTML = `${multiplicandoNums(num1, num2)}`
}
