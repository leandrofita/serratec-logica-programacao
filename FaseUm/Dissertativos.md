# Exercícios - Aula Um
## Conceitos básicos
### Dissertativos

**1. Qual analogia nós usamos na aula para representar a memória do computador, seus espaços, e conteúdos?**

>R: Vagas de um estacionamento.

**2. O que entendemos como ‘bloco de comandos’?**

>R: 'Blocos de comandos' são um grupo de comandos executados em sequência, ou seja, um abaixo do outro. O próximo comando iniciará assim que o anterior terminar suas execução. O programa é encerrado quando não há mais comandos a serem executados.

**3. Quais palavras reservadas (ou símbolos) usamos para delimitar esse bloco, em diferentes linguagens?**

>R: Usamos as palavras "Início" e "Fim" e nas linguagens de programação, geralmente, utilizamos as chaves: { }.

**4. O que significa para o programa a estrutura sequencial?**

>R: Significa que os comandos são executados em sequência, um abaixo do outro, ou seja, o próximo comando iniciará assim que o anterior terminar sua execução.

**5. Qual o símbolo utilizado para terminar instruções?**

>R: O símbolo é o ponto e vírgula: ' ; '

**6. Via programação, como exibir uma mensagem simples na tela?**

>R: Em JavaScript, por exemplo, podemos utilizar o seguinte código:
> console.log("Mensagem simples");

  

**7. O que fazer quando ao executar um programa, perceber que o código que tinha sido digitado “não apareceu no console”? Qual elemento visual do editor ajuda a perceber isso?**

>R: Provavelmente o arquivo não foi salvo. O elemento visual do editor Visual Studio Code que ajuda a identificar um arquivo modificado e não salvo é uma bolinha banca ao lado do nome do arquivo na aba superior.

**8. Qual facilidade o Coderunner apresenta para executar apenas um trecho do código?**

>R: O Coderunner permite executar apenas um trecho do código dentro do arquivo: basta selecionar (clicar e arrastar) o trecho desejado.

**9. Faz diferença nas linguagens de programação próxima do C, como Java ou JavaScript, escrever instruções em maiúsculas ou minúsculas? Justifique.**

>R: Sim. Essas linguagem são chamadas de 'CaseSensitive', ou seja, diferenciam as minúsculas das maiúsculas.

**10. O que faz o comando console.log? Qual a diferença entre este e o document.write?**

>R: O comando console.log exibe uma mensagem na tela do usuário. Já o comando document.write escreve uma mensagem de texto em um documento (arquivo) aberto pelo comando document.open().

**12. Como fazer uma quebra de linha no texto do console?**

>R: A quebra de linha no console pode ser feita usando: \n

**13. Para que serve a instrução “use strict” no início do arquivo Js?**

>R: Define que o código JavaScript deve ser executado no "modo estrito". O objetivo de "use strict" é indicar que o código deve ser executado em "modo estrito". Com o modo estrito, você não pode, por exemplo, usar variáveis ​​não declaradas.

**14. Escreva a tecla de atalho, ou botão, ou item de menu no VSCode para:**

+ **Salvar todos os documentos abertos**

>R: Ctrl + K S (obs: as versões mais recentes, por padrão, não atribuem nenhuma tecla para essa função.)

+ **Executar o programa (No Coderunner)**

>R: Ctrl + Alt + N

+ **Duplicar uma linha (criar uma cópia da linha corrente)**

>R: Alt + Shift + Seta

+ **Abrir um cursor multilinha (digitação múltipla)**

>R: Alt + Click

+ **Exibir o painel de comandos**

>R: Ctrl + Shift + P

+ **Alternar o modo de exibição do texto, em linha contínua ou com quebra ao final da página**

>R: Alt + Z

+ **Adicionar ou remover comentário na linha corrente**

>R: Ctrl + ;  ou  Ctrl + K Ctrl + C

+ **Exibir a lista dos atalhos.**

>R: Ctrl + K Ctrl + S

+ **Para quê serve a indentação? Ela influencia o programa?**

>R: A indentação é um recurso fundamental para a legibilidade de um código, pois adiciona informação importante, do tipo: qual bloco de código pertence a uma função ou método? Ela também ajuda a entender a hierarquia de elementos em código.   
Apesar de algumas linguagens, por exemplo, JavaScript ou C# a identação não ser obrigatória, sua prática não só é recomendada como também é elencada em boas práticas de programação. Além disso, existem linguagens, por exemplo, Python cuja indentação é obrigatória: tanto para formação dos blocos de comando quanto para as demais especificidades supracitadas.

**16. Existe diferença entre a programação embutida no HTML (utilizando a tag script) e o arquivo com código JavaScript separado?**

>R: Não. Apesar de geralmente as tags scripts serem usadas para executar códigos Javascript (ou similar) no "lado-cliente", ou seja, no navegador ou na aplicação e os arquivos com código separado, geralmente, serem executados no "lado-servidor", ou seja, no servidor da aplicação, não podemos dizer que por esse motivo há diferença na execução do código.