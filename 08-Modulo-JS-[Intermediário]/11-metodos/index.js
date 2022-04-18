/* Recapitulando:
    Anatomia de um OBJETO (instanciando um objeto):
    let caderno = { 
        capa: 'Azul',
        paginas: 40
    }
*/


// Criando um método para excluir o usuário
let usuario = {
    nome: 'Guga',
    // Anatomia do MÉTODO: 
        //nomeDaFunção: function () {}

    excluir: function () {
        console.log(`Usuário ${this.nome} EXCLUÍDO`)
        //this.nome acessa o próprio objeto e pega o valor da propriedade desejada
    }
}

// Chamando/Executando a função que foi escrita de dentro do objeto
usuario.excluir()
