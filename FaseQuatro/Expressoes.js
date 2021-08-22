// Indique o resultado das expressões relacionais abaixo. Utilize uma variável para atribuir a sentença, e então exibir na tela o resultado booleano. Declare as variáveis a seguir e, para os símbolos, faça as substituições.
// x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
// M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
// mod: resto; <>: diferente; ig: igual 
// Nesse exercício você deverá manter as variáveis e substituir apenas os operadores. Pode ser necessário o uso de parênteses.

const x = 6.0; 
const y = 2; 
const z = 4.000; 
const a = 8; 
const b = 7.5; 
const c = 12;

var calc1 = x - y > a;
var calc2 = x - y * a > c % y;
var calc3 = y != c;
var calc4 = x * y != c;
var calc5 = c % y <= y % c;
var calc6 = a < b;
var calc7 = z / a + x * y - 5 >= b;
var calc8 = c * z + 2 == a * x + y;
var calc9 = c == z + b;
var calc10 = y * 2 != 7 - b;

// x - y M a
console.log(`O resultado de (x - y M a) é: ${calc1}`);
// x - y * a M c mod y
console.log(`O resultado de (x - y * a M c mod y) é: ${calc2}`);
// y <> c
console.log(`O resultado de (y <> c) é: ${calc3}`);
// x * y <> c
console.log(`O resultado de (x * y <> c) é: ${calc4}`);
// c mod y mi y mod c
console.log(`O resultado de (c mod y mi y mod c) é: ${calc5}`);
// a m b
console.log(`O resultado de (a m b) é: ${calc6}`);
// z / a + x * y - 5 MI b
console.log(`O resultado de (z / a + x * y - 5 MI b) é: ${calc7}`);
// c * z + 2 ig a * x + y
console.log(`O resultado de (c * z + 2 ig a * x + y) é: ${calc8}`);
// c ig z + b
console.log(`O resultado de (c ig z + b) é: ${calc9}`);
// y * 2 <> 7 - b
console.log(`O resultado de (y * 2 <> 7 - b) é: ${calc10}`);


