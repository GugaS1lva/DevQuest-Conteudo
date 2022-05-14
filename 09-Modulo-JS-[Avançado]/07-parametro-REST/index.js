/* SINTAXE: 
    function(a, b, ...args){
        ...
    }
*/
                        // O REST TEM Q FICAR POR ÚLTIMO -> SEMPRE <-
function incentivarQuester(msg, ...nomesQuesters){
    nomesQuesters.map(nomesQuesters => console.log(`${msg} \n${nomesQuesters}`))
}

incentivarQuester('Olá! Você é o novo Quester que tanto mencionaram? Seja muito bem vindo! \nSeu IDentificador já deve estar pronto. Dexe me ver... Aqui:', 'Guga', 'Pedro', 'Marceline', 'Mozier')


/* Serve como uma espécie de clone. 
    A mensagem inicial foi passada como PRIMEIRO PARÂMETRO da função 'incentivarQuester' e em seguida foi passado como SEGUNDO PARÂMETRO os IDentificadores/Nomes dos Questers.
    
    A função está em volto do map() - Que faz um 'clone' da função toda.
    
    Dentro do map, eu escrevo o que eu quero que aconteça cada vez que eu colocar um parâmetro novo (no caso, novos nomes de questers):
        console.log(`${msg} ${nomesQuesters}`) -> Mostre na tela a variável 'msg' e depois a variável 'nomesQuesters'
        
    Depois, faço a chamada da função juntamente com os valores de 'msg' e 'nomesQuesters' (depois do segundo parâmetro, você pode declarar quantos nomes novos quiser que, por causa do map(), a mensagem inteira será escrita novamente precedida do novo IDentificador Quester. Teste ^^ !)
*/