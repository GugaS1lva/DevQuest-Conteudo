// CONCATENAÇÃO DE ARRAYS:


let twins = ['Guga', 'Bell']
let familyCasal = ['Paulo', 'Dinha', 'Day', 'Julio', 'Mãe', 'Carlos']

// Concatenando dois Arrays em um único array principal:
    // 1° - Defina um novo Array
    // 2° - Tês pontos (...) + Array que vai ser concatenado.
        // OBS: Separados por vírgula
let pessoas = [...twins, ...familyCasal]

console.log(pessoas)