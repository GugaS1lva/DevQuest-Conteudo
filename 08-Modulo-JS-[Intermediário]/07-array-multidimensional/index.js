/*
    let exemploFilmes01 = ['Vingadores', 'Mulher-Maravilha']
    let ex01DescFilme1 = ['Vingadores', 4.5, true]
    let ex01DescFilme2 = ['Mulher-Maravilha', 3.8, false]
*/
// =============================

let ArrayPrincial = [
    ['Vingadores', 4.5, true], 
    ['Mulher-Maravilha', 3.8, false],
    ['Interestelar', 9.8, true]
]

// CONSOLE.TABLE()
    // Mostrando o ArrayPrincial que tem vários Arrays dentro
    console.table(ArrayPrincial)

    // Listando um Array de dentro do ArrayPrincipal
    console.table(ArrayPrincial[2])

    // Listando um único Elemento de dentro do Array
    console.table(ArrayPrincial[2][0])
