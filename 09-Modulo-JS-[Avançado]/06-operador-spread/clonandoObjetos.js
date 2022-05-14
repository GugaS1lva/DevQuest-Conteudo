// CLONANDO OBJETOS:


let twin1 = {nome: 'Guga', idade: 20}
let twin2 = {nome: 'Bell', idade: 20}

// Clonando dois Objetos em um único Objeto principal:
    // 1° - Defina um novo Objeto
    // 2° - Tês pontos (...) + Objeto que vai ser clonado.
        // OBS: NÃO DA PRA CONCATENAR DOIS OBJETOS COMO SE FOSSEM ARRAYS.
let irmãos = {...twin1}

console.log(irmãos)