// Usando o Objeto '.style' para estilizar tags
function alterarCorFundo(){
    let posts = document.getElementsByClassName('post')

    let primeiroPost = posts[0]

    // Utilizar o estilo de escrita 'CamelCase' quando a palavra tiver ESPAÇOS.
    primeiroPost.style.background = 'black'
    primeiroPost.style.color = 'white'
    primeiroPost.style.fontFamily = 'Arial'
    primeiroPost.style.textAlign = 'center' // Coisa Linda de CamelCase jEZUIS!!
}



// Adicionando uma classe na tag que eu quero estilizar
