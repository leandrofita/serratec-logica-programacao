# Exercícios - Fase Quatro
## Primeira Lista
### Dissertativos

**1. Podemos dizer que os valores dos tipos de dados ordinais são como 'elementos de um conjunto’? Qual a característica que eles têm em comum?**    
    
>R: Os números ordinais são tipos de numerais utilizados para indicar uma ordem ou hierarquia numa dada sequência. Ou seja, eles indicam a posição ou lugar que algo ou alguém ocupa numa série ou conjunto. Estão relacionados ao conjunto dos números inteiros positivos.

**2. Quais são os valores do tipo de dados Lógico?**

>R: Os valores são: ou Verdadeiro ou Falso (true, false)

**Quais são os operadores relacionais?**

Operador            | Símbolo
---------           | ------
igual               | =
diferente           | !=
maior que           | >
maior ou igual a    | >=
menor que           | <
menor ou igual a    | <=

**Qual é o resultado de uma expressão relacional?**

>R: O resultado pode ser ou **Verdadeiro** ou **Falso**

**Os operandos das expressões relacionais devem ser valores lógicos? Justifique.**

>R: Não necessariamente. Se sua expressão tiver como retorno um valor lógico, ou seja, ou verdadeiro ou falso, é possível utilizar qualquer tipo de dado como operandos. É importante ressaltar que algumas linguagens só permitem executar uma expressão relacional com tipos de dados igual, ou seja não é possível comparar uma string com um boolean, sem realizar uma conversão de tipo antes.

 **Posso utilizar o operador ‘maior’ com variáveis ‘string’?**

>R: No JavaScript é possível comparar strings, uma vez que a linguagem utilizará, para efeitos da comparação, o valor unicode da cadeia de caracteres.

**Quais desses tipos de dados são ordinais?**
+ <span style="color:red">~~*Inteiro*~~
+ <span style="color:red">~~*Real*~~
+ <span style="color:red">~~*Caractere*~~
+ <span style="color:lime">**Cadeia** 
+ <span style="color:red">~~*Lógico*~~

**Quais são os operadores aritméticos, e quais os operadores relacionais?**

Aritiméticos            | Relacionais
---------           | ------
Unários: + -        | binários: == != > >= < <=
Binários: + - * div / mod %

<br>
<br>

# Exercícios - Fase Quatro
## Segunda Lista
### Dissertativos

**Qual a diferença entre operadores unários e binários?**
>R: A diferença é que os operadores unários necessitam de apenas um operando para realizar sua função, ou seja, inverter o valor. Já os operadores lógicos binários necessitam de dois operandos para realizar a comparação.

**O que é a tabela verdade?**

>R: A tabela verdade é a técnica de preencher todos os valores lógicos possíveis de uma operação lógica. Primeiramente calculamos o número de linhas possíveis (2^n) onde n é número de operandos e então preenchemos a tabela.

**Escreva a tabela verdade de cada operador lógico.**

p | q | AND
--| --| --
V | V | V
V | F | F
F | V | F
F | F | F

p | q | OR
--| --| --
V | V | V
V | F | V
F | V | V
F | F | F

p | q | OU OU
--| --| --
V | V | F
V | F | V
F | V | V
F | F | F

p | q | SE ENTAO
--| --| --
V | V | V
V | F | F
F | V | V
F | F | V

p | q | SE SOMENTE SE
--| --| --
V | V | V
V | F | F
F | V | F
F | F | V

p | NOT
--| --
V | F
F | F

**Quais os operadores aritméticos equivalentes aos lógicos?**

>R: multiplicação equivalente ao AND (&&), e soma é equivalente ao OR (||).

**Das palavras abaixo, informe os sinônimos dos operadores “e” e “ou”:**
    Ambos = E
    Qualquer = OU
    Tanto quanto = E 
    Apenas = OU

**O que é um curto circuito?**
>R: Curto-circuito é o ponto de parada de checagem das condicionais com o operador OU, uma vez que a condição precedente já tenha sido atendida.

**A negação do sinal de maior é apenas mudá-lo para menor? Justifique.**
>R: Não, pois existe a condição de um operando ser igual ao outro. Portanto, a negação de maior (>) seria menor ou igual (<=);


**Escreva a negação das sentenças abaixo, usando a forma negativa e a forma de substituição de operadores. Troque and e or quando aparecerem.**

+ **(Nome == ‘Artur’) and (Idade != 23)**

>R: (Nome != 'Arthur') or (Idade == 23)

+ **(Inicio < 5) or (Inicio > 10)**

>R: (Inicio >= 5) and (Inicio<= 10)

+ **(EstadoCivil == ‘S’) and (Idade > 18) or ((Letra >= ‘A’) and (Letra <= ‘E’))**

>R:  (EStadoCivil != 'S')or(Idade <= 18) and ((Letra < 'A') or (Letra > 'E'))

+ **!(aluno1 == ‘feliz’ or aluno2 == ‘feliz’)**

>R: (aluno1 == 'feliz' or aluno2 == 'feliz')

**A negação da proposição “Todo professor de matemática usa óculos” é:**

+ <span style="color:red">~~*Nenhum professor de matemática usa óculos.~~*

+ <span style="color:red">~~*Ninguém que usa óculos é professor de matemática.~~*

+ <span style="color:red">~~*Todos os professores de Matemática não usam óculos.~~*

+ <span style="color:red">~~*Existe alguém que usa óculos e não é professor de matemática.~~*

+ <span style="color:lime">**Existe algum professor de matemática que não usa óculos.✅** 



**Escreva a negação das expressões abaixo, aplicando antônimos nos substantivos ou adjetivos**

+ **Somos uma turma comunista, portanto o professor é o nosso supremo marechal e nos manda o que fazer.**
>R: Não somos uma turma capitalista, portanto o aluno não é o nosso ínfimo marechal ou não nos manda o que fazer. 

+ **O jovem passeava tranquilamente pelo parque carregando seu violino para a suave sinfonia.**
>R: O velho não passeava nervosamente pelo prisão carregando seu violoncelo para a berrante sinfonia.

+ **Antes de escovar os dentes sempre usava o fio dental, mesmo assim ficaram amarelados.**

>R: Antes de escovar os dentes nunca usava o fio dental, mesmo assim ficaram amarelados.


**Com base no conceito da negação, escreva o masculino ou o feminino dos nomes.**
+ Flávia
>R: Flávio
+ André
>R: Andrea
+ Júlio
>R: Júlia
+ Sandra
>R: Sandro
+ Carlos
>R: Carla
+ Maria
>R: Mario
+ Felipe
>R: Felipa
+ Beatriz
>R: Beatrizo