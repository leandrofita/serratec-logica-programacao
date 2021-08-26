// A bilheteria do cinema reservou todas as poltronas terminadas em 6 para deficientes. A sala de projeção possui 40 lugares, e para cada um, o sistema irá imprimir se o ingresso pode ser vendido ou não.


for (let index = 1; index <= 40; index++) {
    if (index % 10 == 6) {
        console.log(`Poltrona ${index} reservada! Não pode ser vendida!`);
    } else
        console.log(`Poltrona ${index} pode ser vendida!`);   
}