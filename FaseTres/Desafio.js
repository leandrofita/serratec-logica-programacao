// O menino, os tênis e os apitos
// Observe as quatro equações abaixo, a partir das quais você pode identificar que cada figura (menino, tênis e apitos) possui um valor diferente. Seu desafio é descobrir qual é o resultado da última equação. Preste muita atenção, pois os detalhes fazem a diferença!


var menino = 3;
var sapato = 5;
var apito = 2;

// Exibir o somatório de todos os 6 sapatos
console.log(`Como cada sapato vale ${sapato}: a expressão (2 sapatos + 2 sapatos + 2 sapatos) é igual: ${(2 * sapato) + (2 * sapato) + (2 * sapato)} `);

// Exibir o somatório dos 2 sapatos com os 2 meninos
console.log(`Como cada sapato vale ${sapato} e cada menino vale ${menino}: a expressão (2 sapatos + 1 menino com apito + 1 menino com apito) é igual: ${(2 * sapato) + (1 * menino + apito) + (1 * menino + apito)} `);

// E o somatório do menino com os 4 apitos
console.log(`Como cada menino vale ${menino} e cada apito vale ${apito}: a expressão (1 menino com apito + 2 apitos + 2 apitos) é igual: ${(1 * menino + apito) + (2 * apito) + (2 * apito)} `);

// Exibir o restulado do desafio
console.log(`Como cada sapato vale ${sapato} e cada menino vale ${menino}: a expressão (1 sapato + 1 menino * 1 apito) é igual: ${(1 * sapato) + (1 * menino) * (1 * apito)} `);
