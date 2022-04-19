


let usuario = {
    nome: 'Guga',

    saudar: function(){
        // Mostrou melhor, no console do Chrome, sem as Templates Strings -> ``
        console.log(`this no contexto do método: `, this)
        console.log(`this.name no contexto do método: `, this.nome)
    }
}

usuario.saudar()