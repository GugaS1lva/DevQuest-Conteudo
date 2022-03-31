/* IF, ELSE e ELSE IF.

    // if:

        if (teste-lógico){
            bloco-01
        }
        // SE o teste-lógico retornar o valor true, execute o bloco-01.



    // else:

        if (teste-lógico){
            bloco-01
        
        } else {
            bloco-02
        }
        // SE-NÃO execute o bloco-02
    
    
    
    // else if:

        if (teste-lógico){
            bloco-01
        
        } else if (teste-lógico){
            bloco-02
        
        } else{
            bloco-03
        }
        // SE-NÃO SE execute o bloco-02 (o do meio)
*/

// Exemplo:
/*
    if (teste-lógico){
        bloco-01

    } else if (teste-lógico){
        bloco-02

    } else{
        bloco-03
    
    }
    // SE o teste-lógico for true, execute o bloco-01. Se não, continue...
    // SE-NÃO SE o teste-lógico for true, execute o bloco-02. Se não, continue...
    // SE-NÃO execute o bloco-03. 
*/


/* OPERADOR TERNÁRIO

    teste-lógico ? true : false

    // Se o teste-lógico for VERDADEIRO, execute o bloco depois da interrogação e finalize o programa.
    // Se o teste-lógico for FALSO, execute o bloco depois dos dois-pontos e finalize o programa.
*/

//mude aqui de 'true' para 'false'.
true ? console.log('Condição VERDADEIRA, parabéns.') : console.log('Condição FALSA, seu lixo.')
