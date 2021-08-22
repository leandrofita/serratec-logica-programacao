# Exercícios - Aula Dois
## Tipos de dados | atribuição
### Dissertativos

**1. O valor de uma variável local, antes que tenha sido feita a primeira atribuição, pode ser aproveitado? Justifique.**    
    
>R: Não pode ser aproveitado. Quando uma variável é criada, ela permanece com a classificação de 'undefined', ou seja, não definida até que receba algum valor.

**2. Podemos atribuir um valor inteiro em uma variável real, e vice versa? Explique.**

>R: Por se tratar de uma linguagem "dinamicamente tipada", o JavaScript (JS) converte automaticamente o tipo da variavel quando recebe um valor. Nesse sentido, podemos dizer que é possível atribuir um valor inteiro em uma variável real e vice versa, uma vez que o próprio JS se encarregará de converter o tipo da variável, nesse caso para "number". Contudo, é importante ressaltar que pelos fundamentos da lógica de programação, bem como em linguagens de tipagem estática, por exemplo, C# e Java, não é possível atribuir um valor de tipo diferente diretamente, precisando, portanto, utilizar funções de conversão de tipo. 

**3. Quais são as formas (ou tipos) de atribuição que aprendemos?**

>R: As formas (ou tipos) de atribuição que aprendemos foram: 
>+ **Literal**  
    *Numero := 42;*
>+ **Expressão**  
    *Numero := 2 + 2;*
>+ **Outra variável**   
    *A = B;*
>+ **Retorno de função**   
    *Numero = Math.trunc(13.37);*
>+ **Implícita, ou indireta**  
    *Read(Numero);*

**4. Qual o símbolo usado para:**  

+ **Terminar instruções**  
    >Usamos o *"ponto e vígula"* - ;
+ **Separar o valor e as casas decimais**  
    >Usamos o *"ponto"* - .
+ **Separar informações**  
    >Usamos a *"vírgula"* - ,
+ **Obter o resto de uma divisão inteira**  
    >Usamos o *"porcento"* - %
+ **Delimitar blocos de comandos**  
    >Usamos as *"chaves"* - { }

**5. Em programação, é possível controlar a precedência em operações aritméticas?**

>R: Sim. Utilizamos os parênteses para essa finalidade.

**6. Conceitualmente, o que é mais importante: a expressão, ou o resultado que ela produz? Porque?**

>R: A expressão em si não é o importante, e sim o resultado, uma vez que, pela programação, é possível chegar ao mesmo resultado de diversas formas.

**7. Posso fazer expressões com tipos de dados diferentes do resultado?**

>R: Sim. É perfeitamente possível realizar expressões com tipos de dados diferentes do resultado. Um exemplo disso é uma condicional que compara valores, string etc. e retorna um booleano.

**8. Qual a diferença entre operações unárias e binárias?**

>R: Operações **unárias** estabelecem relação com a penas um valor, por exemplo, a troca de sinal de um número positivo para negativo; a negação do valor lógico de uma variável boleana. Já as operações **binárias** estabelecem relação com dois valores, por exemplo a divisão de dois números, a conjuntão (&&) e a disjução (||).

**9. O que é um teste de mesa, ou teste chinês?**

>R: O teste de mesa, ou teste chinês nada mais é do que o monitoramento das alterações de uma variável.

**10. Onde visualizar os valores de variáveis no VSCode, no momento da depuração do código?**

>R: Para visualizar os valores de variáveis no VSCode, primeiro é preciso definir um "*Ponto de Interrupção(BrakePoint)*". Para isso, deve-se clicar na bolinha vermelha do lado esquerdo da instrução que deseja para. Definidos o(s) ponto(s) de interrupção, deve-se clicar no botão de "*Executar e Depurar (Ctrl+Shift+D)*" na aba da esquerda e então clicar no botão azul "*Executar e Depurar*". As variáveis aparecerão na aba à esquerda.