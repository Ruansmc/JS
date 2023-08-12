// > COERÇÃO (CONVERSÃO) DE TIPOS

// - 1. Coerção Explícita (Manual)

const numero = 10;

console.log(numero, typeof numero)

const numeroEmFormartoDeString = String(numero)
console.log(numeroEmFormartoDeString, typeof numeroEmFormartoDeString)

console.log(Number('123123124'))
console.log(parseFloat('11231.2512412'))
console.log(parseInt('11231.2512412'))
console.log(Boolean(0))


// - 2. Coerção Implícita (Automática)

console.log('10'- 1)
console.log(10 - 'asasa')
console.log(10 * '2')
console.log('10' + 1) 

console.clear()
// Qual será a saída desse código?
let n = 1 + "1";

n = n =1;

console.log(n);

// // Qual será a saída desse código?
console.log(2 + 3 + 4 + "5");
// // Qual será a saída desse código?
console.log("5" + 2 + 3 + 4);
// // Qual será a saída desse código?
console.log("10" + "4" - "3" - 2 + "5");



