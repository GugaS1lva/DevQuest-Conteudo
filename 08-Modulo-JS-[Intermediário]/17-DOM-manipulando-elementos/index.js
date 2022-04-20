/* Forma dos Gêmeos. Ficou meio meme, depois eu vejo isso de novo.
    function addComentario(){
        let comentario = document.querySelector('#novo-comentario')
        
        let textoDigitado = comentario[0].value

        let novosComentarios = document.querySelector('#novos-comentarios')

        novosComentarios.innerHTML = `${textoDigitado}`
    }
*/

function addComentario(){
    let comentario = document.querySelector('#comentario').value
    let novosComentarios = document.querySelector('#novos-comentarios')

    novosComentarios.innerHTML += `<p>Novo comentário: ${comentario}</p>`
}