/* Fazendo a comida ser cozida quando a função 'cozinhar' for chamada.
    let comida = {
        nome: 'Brócolis',
        temperatura: 0,

        cozinhar: function(){

        }
    }
*/


let comida = {
    nome: 'Brócolis',
    temperatura: 0,

    cozinhar: function(temperaturaDeCozimento){
        this.temperatura = temperaturaDeCozimento;
    }
}

/* Instanciando um OBJETO 'comida' com duas propriedades. E criando um MÉTODO 'cozinhar' (para esse Objeto: 'comida') que vai receber dois parâmetros e vai aumentar a temperatura dessa comida com a temperatura que eu vou chamar a função.

comida.cozinhar = function(temperaturaDeCozimento){
    this.temperatura = temperaturaDeCozimento;
}
*/

console.log(comida)

comida.cozinhar(100)

console.log(comida)
