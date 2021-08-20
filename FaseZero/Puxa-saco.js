var espirrou = true;

const saudacoes = ["Bom dia!", "Boa tarde!", "Boa noite!"];
const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

diasSemana.forEach((dia) =>
{
    console.log(`${dia}:`);

    saudacoes.forEach((saudacao) =>
    {
        console.log(saudacao);
    })
})

if (espirrou)
{
    console.log("Saúde!");
}