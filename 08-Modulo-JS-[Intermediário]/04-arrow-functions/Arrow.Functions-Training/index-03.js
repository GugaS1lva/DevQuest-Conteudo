// Arrow Functions | SHORTHAND-02


function ativarBotão(){
    let num1 = Number(window.document.querySelector('#numMSG01').value)
    let num2 = Number(window.document.querySelector('#numMSG02').value)
    let res = window.document.querySelector('#res')

    //Sem o FUNCTION + nomeDaFunção. Seta dps dos parênteses. Se o bloco de código tiver só uma linha, dispensa o uso das chaves e do 'return'.
    let dividindoNums = (n1, n2) => n1 / n2

    res.innerHTML = `${dividindoNums(num1, num2)}`

}