# Exercícios - Aula Dois
## Tipos de dados | atribuição
### Dissertativos

**1. Para cada informação abaixo, classifique segundo o tipo de dados.**  

+ **Quantidade de vendedores da loja**   
    
>R: Integer
    
+ **Nome da rua, com número e complemento**   

>R: String

+ **Preço do etanol comum**

>R: Float

+ **Estado de iluminação de uma lâmpada**

>R: Boolean

+ **CEP do endereço, com hífen**

>R: String

+ **Mostrador com um dígito dentro do elevador, indicando o andar do prédio onde ele está passando**

>R: Char

+ **Led que indica o pressionamento do botão do elevador**

>R: Boolean

+ **Data de aniversário do professor**

>R: Date

+ **Peso do prato na balança do restaurante**

>R: Float

+ **Número de bois no curral da fazenda**
    
>R: Integer

+ **Dia completo da páscoa nesse ano**

>R: Date

+ **Quantidade de laranjas na caixa**

>R: Integer

+ **Uma vogal minúscula**

>R: Char

+ **Título de um livro**

>R: String
    
+ **Limite do cartão de crédito**
    
>R: Float
    
+ **Horário de transmissão do jogo**
    
>R: Date
    
+ **Altura de um prédio**
    
>R: Float
    
+ **Páginas do caderno**
    
>R: Integer
    
+ **Sala de reunião está disponível (ou ocupada)**
    
>R: Boolean
    
+ **Alternativas do enunciado da questão de múltipla escolha**
    
>R: Char

**2. O que são tipos de dados?**

>R: A forma como o programa irá entender o conteúdo que será armazenado. Sendo eles: números inteiros; números reais; caractere; textos; datas; boleanos.

**3. Descreva os tipos de dados primitivos em programação, com o nome do tipo da informação e sua finalidade de armazenamento.**

>R: Os tipo de dados primitivos são:  
>+ Números Inteiros - Integer   
    *Armazena números inteiros, ou seja, sem casas decimais.*
>+ Números Reais - Float   
    *Armazena números reais, ou seja, com casas decimais.*
>+ Caracere - Char   
    *Armazena um único caractere unicode (antiga tabela ASCI).*
>+ Textos - String   
    *Armazena uma mensagem de texto.*
>+ Datas - Date   
    *Armazena uma data e/ou hora, de acordo com sua formatação.*
>+ Boleanos - Boolean   
    *Armazena um valor binário, ou seja, verdaeiro ou falso.*

**4. Qual a característica (ou conceito) dos números inteiros que é muito importante na programação?**

>R: A ordinalidade, ou seja, saber qual será o próximo número e/ou o anterior.

**5. O que são as palavras reservadas da linguagem?**

>R: Palavras reservadas são termos utilizados pelas linguagens para realizar ou definir alguma finalidade específica. Por exemplo: var, const, if, while, for, entre outros.

**6. Em programação, o que são variáveis?**

>R: Variáveis são espaços reservados na memória com objetivo de armazenar dados. Uma analogia que podemos fazer em relação às variáveis é compará-las com as vagas de um estacionamento.

**7. Como são chamados os nomes de variáveis?**

>R: Os nomes de variáveis são chamados de: *Identificadores*

**8. O que significa “declarar uma variável”?**

>R: Declarar uma variávei é reservar de fato aquele espaço na memória; dando um nome e, dependendo da linguagem, definindo seu tipo.

**9. Posso criar duas variáveis como o mesmo “nome”, ou que, pelo menos para o programador, tenham o mesmo significado? Justifique.**

>R: Segundo o documentação do JavaScript: *"A redeclaração de uma mesma variável **num mesmo escopo de bloco** causa um TypeError, no entanto, **corpos de funções** não possuem essa limitação!"*  
>  
>Além disso, é importante salientar que declarar variáveis com o mesmo nome e tipo, em corpos de funções e/ou classes ***diferentes***, é perfeitamente possível e comum na prática, afinal, seria praticamente impossível, inviável e ineficaz monitorar o nome de todas as variáveis de um sistema com o único objetivo de não repetir o nome. Ademais, quando utilizamos bibliotecas de terceiros, geralmente, não temos acesso ao código em si, apenas sua declaração, ou seja, não sabemos quais variáveis foram criadas, muito menos seu nome.

**10. O que é uma atribuição?**

>R: Atribuição é de fato inserir/gravar um valor (dado) 'dentro' da variável.

**11. Qual palavra utilizamos como sinônimo do comando do sinal de atribuição?**

>R: A palavra utilizada é: *recebe*

**12. Quando atribuímos um novo valor a uma variável, o que acontece com o valor que ela já possui?**

>*~~a. O primeiro valor é somado com o segundo valor.~~*  
*~~b. O primeiro valor vai para a variável seguinte.~~*  
<span style="color:lime">**c. O primeiro valor é perdido, pois uma atribuição é uma substituição.** 


**13. Qual a diferença do “ponto” e da “vírgula” no momento da escrita do código?**

>R: O "ponto" é utilizado para acessar atributos, métodos ou funções de um objeto, além de ser utilizado como separador de casas decimais em números fracionados. Já a vírgula é utilizada para separar os parâmetros passados por uma função, por exemplo, console.log("um", dois, 3).


**14. O comando de escrita no console permite “misturar” vários tipos de dados? Em outras palavras: É possível escrever os valores de mais de uma variável, de tipos diferentes? Justifique.**

>R: Sim, o comando ensinado em aula (console.log()) pode receber por parâmetro dados de diversos tipos (boolean, integer, string etc.) e o símbolo utilizado para serparar cada parâmetro é a vírgula.

**15. Para quê usamos comentários na programação?**

>R: As linguagens de programação se aproximam cada vez mais das linguagens humanas (português, inglês etc.), porém alguns comandos e instruções (sintaxe) que não utilizamos na linguagem "padrão" ainda são necessários. Nesse sentido, os comentários são fundamentais para o entendimento geral do código, seja pela sintaxe da linguagem de programação, seja pela complexibilidade do código gerado. Além disso, os comentários estão elencados como uma boa prática de programação, quando respeitadas determinadas regras, por exemplo: objetividade, clareza etc.

**16. Quais os tipos de comentários existentes?**

>R: Existem dois tipos de comentários:   
>+ Comentário em linha:   
<span style="color:green">*\\\Esse é um comentário.*   
>+ Comentário em bloco (multiplas linhas):   
<span style="color:green">\\* Esse é um bloco de comentários  
de multiplas linhas. *\