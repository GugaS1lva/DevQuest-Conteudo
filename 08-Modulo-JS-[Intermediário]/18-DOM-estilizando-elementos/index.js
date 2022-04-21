// Usando o Objeto '.style' para estilizar tags
function estilizarPostUm(){
    let posts = document.getElementsByClassName('post')

    let primeiroPost = posts[0]

    // Utilizar o estilo de escrita 'CamelCase' quando a palavra tiver ESPAÇOS.
    primeiroPost.style.background = 'black'
    primeiroPost.style.color = 'white'
    primeiroPost.style.fontFamily = 'Arial'
    primeiroPost.style.textAlign = 'center' // Coisa Linda de CamelCase jEZUIS!!
}

// Adicionando uma CLASSE na Tag que eu quero estilizar
function estilizarPostDois(){
    let postDois = document.querySelector('#specialTag')
    // O Nome da Classe vai sem o '.'
    postDois.classList.add('estilo-teste')
}



// TESTANDO ESCOLHA DE GÊNERO PELO 'RADIO'
function marcarRadio(genero){
    let radioMasculino = document.getElementById('genero-masculino')
    let radioFeminino = document.getElementById('gereno-feminino')

    if (genero === 'M'){
        radioMasculino.checked = 'true'
    
    } else if (genero === 'F'){
        radioFeminino.checked = 'true'

    } else {
        console.log('[ERRO]')
    }
}