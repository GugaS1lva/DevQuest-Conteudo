const sum = require('./sum');

// test() -> É um método do próprio jest pra aplicar o teste.
    // ANATOMIA descrição: test('msg pra quando o resultado for true', função())

    /*
        () => {
            expect(sum(1, 2)).toBe(3)
        }

        // "Esperando que o retorno do sum, passando dois números por parâmetro, seja igual a 3."
    */
test('1 + 2 é igual a 3', () => {
  expect(sum(-1, 4)).toBe(3);
});