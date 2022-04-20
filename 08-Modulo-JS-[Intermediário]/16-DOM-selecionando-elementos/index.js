// TESTES/COMANDOS DEVEM SER FEITOS NO CONSOLE DO CRHOME 
// Aqui ficarão apenas a lista de códigos para poder testar lá. Os códigos, se executados aqui, não se comportarão corretamente.



// Visualizando toda a árvore DOM do meu site:
    console.log(document)


// Buscando todas as tags que tenham a mesma classe:
    // Obviamente precia ter as Tags com suas classes declaradas no HTML
    let inputsPorClasse = document.getElementsByClassName('texto-input')
    console.log(inputsPorClasse)
    // Mostrando apenas um desses 4 inputs de mesma classe declarados no HTML
    console.log(inputsPorClasse[1])


// Acessando uma Tag atravéz do ID da mesma:
    let p01 = document.getElementById('paragrafo-01')
    console.log(p01)

// Acessando uma Tag atravéz da TAG da mesma:
    let inputPorTag = document.getElementsByTagName('p')
    console.log(inputPorTag)

// Acessando uma Tag atravéz do NAME da mesma | QuerySelectorAll:
                                        // OBS: Àspas SIMPLES DENTRO das DUPLAS.
    let inputPorName = document.querySelectorAll("input[name='EXMPLE']")
    console.log(inputPorName)
    // Mostrando apenas um dos 4 inputs:
    console.log(inputPorName[2])