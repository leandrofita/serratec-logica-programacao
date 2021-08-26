// Para exibir a tabela de “temperaturas”, o programa irá exibir os graus Celsius entre 0º e 40ºC, além da equivalência com os graus Fahrenheit.
// // 

const LIMITE = 40;

for (let index = 0; index <= LIMITE; index++) {
    
    let tempFahrenheit = (index * 1.8) + 32; // (30°C x 1.8) + 32 = 86°F
    console.log(`${index}° Celsius = ${tempFahrenheit.toFixed(2)}° Fahrenheit.`);
}