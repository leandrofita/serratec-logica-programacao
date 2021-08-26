// # Serratec - Parque Tecnológico Região Serrana
// ● Lógica de Programação - Prof. Moises do Amaral Baddini
// ● Atividade: Elicitação de Requisitos
// ● Autor (Descrição): Marcos Moraes
// ● Squad de Origem (Requisito): Time NSMN (Squad 6)
// ● Arquivo: barraquinhaZepa.js
// ● Data: 22/08/2021
// ## Descrição:
// Zepa tem uma barraquinha na feira, onde vende café e 5 tipos de doces: bala, pirulito,
// bombom, paçoca e jujuba. Mas quem é cliente do Zepa sabe que nunca tem café nem
// paçoca na sua barraquinha. Quando chega um cliente, ele é sempre gentil e saudoso,
// avisando sobre Tudo que ele vende. Quando alguém escolhe um item que ele tem na
// barraquinha, ele agradece a pessoa pelo item comprado, e quando alguém pede paçoca ou
// café, ele confessa seus vícios e pede desculpa pois devorou o estoque. E se o cliente pedir
// algo que ele não vende, o Zepa educadamente pede para que o cliente escolha um produto
// válido.
// Dica: Use paçoca como "pacoca" e café como "cafe".

const prompt = require("prompt-sync")();

const ITENS = [
  "Café",
  "Paçoca",
  "Balas",
  "Jujubas",
  "Bombons",
]

function processarPedido(seuPedido) {
  seuPedido = seuPedido.toUpperCase();

  console.log(seuPedido + "!");

  var temosOuNao = false;
  switch (seuPedido) {
    case "BALAS":
      temosOuNao = true;
      break;
    case "BOMBONS":
      temosOuNao = true;
      break;
    case "JUJUBAS":
      temosOuNao = true;
      break;
    case "CAFE":
      temosOuNao = false;
      break;
    case "PACOCA":
      temosOuNao = false;
      break;
  }
  return temosOuNao;
}

console.log("\n === BARRAQUINHO DO ZEPA === \n");
console.log("Seja bem-vindo a Barraquinha do Zepa.\n");

console.log(ITENS);

var pedido = prompt("Digite o número do item desejado: ").toUpperCase();

do {
  var venda = processarPedido(pedido);
  
  if (!venda) {
    console.log(
      "Poxa, sinto muito mas nós infelizmente não temos " +
        pedido +
        ". é que eu sou viciado em " +
        pedido +
        " sempre que tem, eu não sossego até acabar."
    );
    var pedido = prompt("Teria alguma outra das nossas guloseimas que você gostaria?");
    var venda = processarPedido(pedido);
  }

  if (venda) {
    console.log(`Aqui está o seu pedido de ${pedido}. Muito obrigado e volte sempre`);
  }
} while (!venda);