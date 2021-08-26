# Exercícios - Fase Seis
## Repetições Indefinidas
### Dissertativos

**1. Qual a ideia principal dos comandos de repetição?**    
    
>R: Repetir uma ou mais instruções quando determinada condição é atendida.

**2. Quais são os tipos de repetições?**

>+ Indefinidas
>+ Definidas
>+ Recursividade
>+ Iteradores

**3. Em JS, os dois comandos de declaração de repetições indefinidas são?**

>+ While  
>+ do...While 

**4. Explique três diferenças entre enquanto e repita.**

>+ **Classificação:**
Classificamos o "for" como definido, pois o utilizamos, geralmente, quando temos ciência do número de repetições. De forma contrária, o "while" é classificado como indefino, pois não sabemos quantas vezes o código se reperirá.
>+ **Controlador:** devido à característica da sua estrutura, no laço de repetição "for", temos uma variável de controle de repetição que podemos usar para diversas funções, dentre elas: acessar o índice de um vetor.
>+ **Estrutura:** a prórpia esctrutura de declaração dos dois laços de repetição são diferentes. O "for" permite controlar início, incremento e iteração. Já o "while" repete até que não seja verdade.


>+ **while**  `<condicao>`
    <instrução>;     
>+ **do**  
    <instrução>;  
    while `<condicao>`  
>+ **for** (`<inicializacao>; <condicao>; <final>`)

**5. Qual palavra podemos utilizar para facilitar o entendimento da forma de funcionamento da condição nas repetições?**

>R: A palavra é: Continuidade.

**6. Podemos entender um comando “enquanto” como um seletor? Justifique.**

>R: Sim. Podemos dizer que o comando "enquanto" possui o mesmo conceito dos seletores com a diferença que ele repetirá a execução enquanto a condição for verdadeira. Já o seletor executará apenas uma vez.

<br>

***

## Repetições definidas
### Dissertativos

**1. Qual facilidade uma repetição definida apresenta?**

>R: devido à característica da sua estrutura, no laço de repetição "for", temos uma variável de controle de repetição que podemos usar para diversas funções, dentre elas: acessar o índice de um vetor.

**2. O que é a variável de controle?**

>R: Variável de controle, nada mais é que um uma variável que controla o número de repetições do laço. Podemos usar para diversas funções, dentre elas: acessar o índice de um vetor.

**3. Quais são os argumentos da repetição definida? Em ordem, como se comportam?**

> para(`<inicializacao>; <condicao>; <final>`)
>   `<instrucao>`;
>+ declaração da variável de controle  
>   for(**let index = 0**; ...)
>+ condição a ser testada 
>   for(let index = 0; **condicao**; ...)
>+ iteração
> for(let index = 0; condicao; **index++**)

**4. Como fazer uma iteração descendente?**

>R: Basta que você atribua à variável controladora com o último valor da repetição
e utilize o auto decremento no argumento final (index--)
```JavaScript
for(let index = 10; index >= 0 ; index--)
```

**5. Por convenção, usamos qual identificador para a variável de controle?**

>R: i e j(interno) 

**6. É válido confiar no valor da variável contadora após/fora do laço?**

>R: Não, por diversos motivos: no JavaScript por padrão a variável de controle é declarada como "let", ou seja, somente será acessível dentro do escopo estabelecido. Outro motivo seria que, apesar de não ser uma boa prática de programação, a variável do laço pode ser modificada dentro do laço, o que poderia gerar valores indesejados para as funções posteriores.

**7. Uma repetição definida pode nunca ser executada? Justifique.**

>R: Uma vez declarada a repetição ela validará a condicional pelo menos uma vez. Caso a condição seja falsa (mesmo que seja na primeira execução), os comandos dentro do laço não serão executados.


<br>

***

## Repetições encadeadas
### Dissertativos

**1. Conceitualmente, vimos o que são repetições encadeadas. Porém, na prática, elas realmente existem? Justifique.**

>R: Absolutamente. São muito importante quando, por exemplo, queremos acessar valores de uma matriz.

**2. Posso ter uma repetição definida encadeada em uma repetição indefinida?**

>R: Perfeitamente.

**3. A mesma variável de controle pode ser utilizada em todos os laços encadeados?**

>R: Poder até pode, mas é absolutamente desaconselhável, ineficaz e sem sentido, uma vez que o(s) laço(s) interno(s) modificará o controle dos laço(s) externo(s).

<br>

***

## Condições de fluxo e parada
### Dissertativos

**1. É possível interromper uma repetição definida?**

>R: Sim. O comando utilizado para interromper uma repetição é o "break".

**2. Posso utilizar condições de fluxo fora de laços?**

>R: Esses comandos (break, continue) não podem ser utilizados fora de um laço. E quando os laços estão encadeados, o comando é válido para o laço mais interno.

**2. Associe os comandos de fluxo à frase que mais fizer sentido:**  

+ **Voltar ao começo do laço**
>R: *Continue*

+ **Interromper o laço.**
>R: *Break*

