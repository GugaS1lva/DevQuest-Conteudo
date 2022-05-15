function ferverAgua(){
    console.log('Agua está aquecendo...\n')
    
    setTimeout(() => {
        console.log(passarCafe())
    }, 2000);
}

function pegarMateriais(){
    console.log('Pegar o pó de cadé')
    console.log('Pegar o açúcar')
    console.log('Pegar o filtro do café')
    console.log('Colocar açúcar na xícara')
    console.log('Colocar o pó de café no filtro\n')
}

function passarCafe(){
    console.log('Passar a água fervendo do bule para o filtro.\n')
}

ferverAgua()
pegarMateriais()