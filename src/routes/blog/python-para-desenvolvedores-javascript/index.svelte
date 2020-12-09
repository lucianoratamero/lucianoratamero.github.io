<script>
  import Highlight from "../../../components/Highlight.svelte";
  import { javascript, python, shell } from "svelte-highlight/languages";
  import { formatCodeString } from "../../../utils";
  import { stores } from "@sapper/app";

  const { page } = stores();
</script>

<svelte:head>
  <title>Python para desenvolvedores JavaScript - luciano@ratamero.com</title>
  <meta
    name="description"
    content="percebi que as poucas dificuldades que
    tive durante minha adaptação de javascript pra python (há anos) nunca foram ensinadas pra mim de uma maneira clara. aqui vão algumas dicas :]" />
  <meta
    name="keywords"
    content="Luciano Ratamero, python, javascript, frontend, dicas, tutorial" />
</svelte:head>

<h1><mark>Python para desenvolvedores JavaScript</mark></h1>

<p>
  logo depois de ter lido
  <a
    href="https://dev.to/underdogio/python-for-javascript-developers"
    target="_blank"
    rel="noopener">esse post</a>, eu percebi que as poucas dificuldades que tive
  durante minha adaptação de javascript pra python (há anos) nunca foram
  ensinadas pra mim de uma maneira clara.
</p>

<p>
  apesar de ambas as linguagens serem razoavelmente parecidas, achei
  interessante a ideia, então aqui vão algumas diferenças pra se ter em mente na
  hora de virar a chave. algumas são de Mario Pabon, o autor do post original, e
  algumas coisas são minhas mesmo. :)
</p>
<p>
  ah, só um detalhe: aqui vamos supor que você está usando python 3, sim? bem,
  vamos lá!
</p>

<hr />

<p>pra quem quiser pular pra uma parte em específico, aqui vai:</p>
<ul class="toc">
  <li>
    <a href="{$page.path}#sintaxe">sintaxe</a>
    <ul>
      <li>
        <a href="{$page.path}#declaracao-de-variaveis">declaração de variáveis</a>
      </li>
      <li><a href="{$page.path}#blocos">blocos</a></li>
      <li><a href="{$page.path}#controle-de-fluxo">controle de fluxo</a></li>
    </ul>
  </li>
  <li>
    <a href="{$page.path}#tipos">tipos</a>
    <ul>
      <li><a href="{$page.path}#numeros">números</a></li>
      <li><a href="{$page.path}#listas">listas</a></li>
      <li><a href="{$page.path}#strings">strings</a></li>
      <li><a href="{$page.path}#dicionarios">dicionários</a></li>
      <li><a href="{$page.path}#None">None</a></li>
      <li><a href="{$page.path}#funcoes">funções</a></li>
    </ul>
  </li>
  <li><a href="{$page.path}#modulos">módulos</a></li>
  <li><a href="{$page.path}#poo">programação orientada a objetos</a></li>
</ul>

<h2 id="sintaxe">sintaxe</h2>

<h3 id="declaracao-de-variaveis">declaração de variáveis</h3>

<p>para ambas as linguagens, declarar variáveis é simples.</p>

<p><strong>javascript</strong></p>

<Highlight language={javascript} code="var x = 3;" />

<p><strong>python</strong></p>

<Highlight language={python} code="x = 3" />

<p>
  mais tarde vamos falar de tipos, que fazem toda a diferença entre as
  linguagens. só vamos deixar clara, por enquanto, uma grande diferença:
  <strong>variáveis em python sempre pertencem ao contexto do seu bloco</strong>.
</p>

<h3 id="blocos">blocos</h3>

<p>
  python tende a sempre ser mais estrito do que javascript. em python, não
  seguir a
  <span
    class="tip"
    title="<strong>indentação</strong>: recuo de um texto em relação a sua margem. ou seja, o número de espaços ou tabs antes de uma linha de código.">indentação
    do código</span>
  pode fazer com que ele nem rode. isso se dá porque o python usa a indentação
  para definir blocos, no lugar das chaves do javascript.
</p>

<p><strong>blocos em javascript</strong></p>

<Highlight
  language={javascript}
  code={formatCodeString(`
function exampleFunction () {
  // isso é um bloco, com um contexto pras variáveis
  var a = 5;
}
`)} />

<p><strong>blocos em python</strong></p>

<Highlight
  language={python}
  code={formatCodeString(`
def example_function():
    # isso também é, também com seu próprio escopo
    # que é definido pelo que tá no mesmo nível de indentação
    x = 5
    print(x)
`)} />

<p>
  se a linha do
  <code>print(x)</code>
  tivesse mais um ou menos um espaço antes da chamada da função, o interpretador
  do python levantaria uma exceção
  <code>IndentationError</code>, porque a diferença de espaços criaria um bloco
  inválido.
</p>

<p>
  outro possível problema causado pelo mau uso de indentação em python é o de
  escopo.
</p>

<Highlight
  language={python}
  code={formatCodeString(`
x = "fora"
# no escopo de fora, x = "fora"
def example_function():
    x = "dentro"
    # no de dentro, x = "dentro"
    print(x)
    # retornaria "dentro"
print(x)
# retornaria "fora"
`)} />

<h3 id="controle-de-fluxo">controle de fluxo</h3>

<p>
  <code>if...else</code>,
  <code>while</code>
  e
  <code>for</code>
  em python são razoavelmente parecidos com javascript.
</p>

<h3>if...else</h3>
<p><strong>javascript</strong></p>

<Highlight
  language={javascript}
  code={formatCodeString(`
if (x &gt; 1) {
    console.log('oi');
} else if (!x &gt; 1) {
    console.log('io');
} else {
    console.log('ioi');
}
`)} />

<p><strong>python</strong></p>

<Highlight
  language={python}
  code={formatCodeString(`
if x &gt; 1:
    print('oi')
elif not x &gt; 1:
    # 'elif' em vez de 'else if', 'not' em vez de '!'
    print('io')
else:
    print('ioi')
`)} />

<h3>while</h3>

<p><strong>javascript</strong></p>

<Highlight
  language={javascript}
  code={formatCodeString(`
while (x &lt; 3){
  x++;
}
`)} />

<p><strong>python</strong></p>

<Highlight
  language={python}
  code={formatCodeString(`
while x &lt; 3:
    x += 1
`)} />

<h3>for</h3>

<p>
  em python, ao
  <span
    class="tip"
    title="<strong>iterar:</strong> pegar ítem a ítem de uma lista e executar alguma ação, geralmente sobre o próprio ítem.">iterar</span>
  sobre uma lista, não precisamos declarar o índice ou resgatar o objeto
  internamente - o objeto da vez já está implícito.
</p>

<p><strong>javascript</strong></p>

<Highlight
  language={javascript}
  code={formatCodeString(`
var lista = [1, 2, 3];
for (var i=0; i &lt; lista.length; i++){
  var item = lista[i];
  console.log(item); // 1; 2; 3
}
`)} />

<p><strong>python</strong></p>

<Highlight
  language={python}
  code={formatCodeString(`
lista = [1, 2, 3]
for item in lista: # o item da vez ficará na variável 'item'
    print(item) # 1; 2; 3
`)} />

<p>
  o javascript até aceita a sintaxe de
  <code>for (item in lista)</code>, mas se comporta de maneira diferente,
  colocando na variável
  <code>item</code>
  o valor do contador do loop.
</p>

<h2 id="tipos">tipos</h2>
<p>
  os tipos em python são razoavelmente parecidos ao de javascript, já que você
  não precisa declarar os tipos para cada variável na hora da declaração (como
  se faz com java ou C#, por exemplo).
</p>
<p>
  a grande diferença é como os tipos interagem, já que várias operações
  permitidas em javascript não são em python. python prefere levantar um erro em
  vez de fazer uma operação entre tipos que pode gerar um dado errado.
</p>
<p>um dos exemplos mais clássicos é o da soma de números com strings:</p>
<p>
  <strong>javascript</strong>

  <Highlight
    language={javascript}
    code={formatCodeString(`
var a = 5; // número inteiro;
var b = "5"; // uma string que contém o número 5
a + b // retornará a string "55"
`)} />
</p>
<p><strong>python</strong></p>

<Highlight
  language={python}
  code={formatCodeString(`
a = 5 # número inteiro
b = "5" # uma string que contém o número 5
a + b # 'TypeError', já que não se pode somar tipos diferentes
# em python, devemos transformar o número em string
# ou a string em número
str(a) + b # string "55"
a + int(b) # inteiro 10
`)} />

<p>
  já que tiramos essa dúvida da reta, vou dar um apanhado básico dos tipos em
  python.
</p>
<h3 id="numeros">números</h3>
<p>
  ao contário de javascript, python tem vários tipos diferentes para diferentes
  números.
</p>
<ul>
  <li>inteiros (integer): <code>1</code>, <code>2</code>, <code>3</code></li>
  <li>ponto flutuante (float): <code>4.20</code>, <code>4e420</code></li>
  <li>números complexos: <code>4 + 20j</code></li>
  <li>booleanos (boolean): <code>True</code>, <code>False</code></li>
</ul>
<p>
  você pode fazer as mesmas operações em ambas as linguagens, como, por exemplo,
  soma, subtração, divisão, multiplicação e potenciação.
</p>
<h3 id="listas">listas</h3>
<p>
  listas em python são bem parecidas com as de javascript, com alguns adereços a
  mais. elas podem conter uma mistura de tipos:
</p>

<Highlight
  language={python}
  code={formatCodeString(`
[4, "2", [0, "zero"]]
`)} />

<p>há também uma sintaxe especial para pegar partes de uma lista:</p>

<Highlight
  language={python}
  code={formatCodeString(`
lista = [1, 2, 3, 4, 5]
lista[0:2] # 1, 2, 3
lista[3:] # 4, 5
lista[2, -2] # 3, 4
# se aceitam índices negativos, pegando do final da lista
`)} />

<p>e algumas funções e métodos úteis:</p>

<Highlight
  language={python}
  code={formatCodeString(`
len([1, 2, 3]) # 3
[1, 2, 3].reverse() # [3, 2, 1]
[1, 2].append(3) # [1, 2, 3], igual ao 'push' do js
`)} />

<p>para concatenar listas, é só somá-las:</p>
<Highlight
  language={python}
  code={formatCodeString(`
# [1, 2, 3, 4]
[1, 2] + [3, 4]
`)} />

<p>
  pra fechar, temos em python o que chamam de
  <code>list comprehension</code>. é uma forma de criar listas dinamicamente.
</p>

<Highlight
  language={python}
  code={formatCodeString(`
lista = [1, 2, 3, 4]
maiores_que_2 = [numero for numero in lista if numero &gt; 2]
# maiores_que_2 é agora [3, 4]
`)} />

<h3 id="strings">strings</h3>
<p>
  strings em python são praticamente iguais às de javascript. você pode acessar
  cada caractere individualmente, mas só pode alterar o conteúdo ao reassinalar
  a variável.
</p>

<Highlight
  language={python}
  code={formatCodeString(`
nome = 'Luciano'
print(nome[0]) # L
nome[0] = 'D' # TypeError
`)} />

<h3 id="dicionarios">dicionários</h3>
<p>
  dicionários são listas associativas em python, muito parecidos com objetos em
  javascript. eles são declarados praticamente da mesma forma.
</p>

<Highlight
  language={python}
  code={formatCodeString(`
pessoa = {
    'nome': 'Luciano',
    'idade': 27
}
print(pessoa['nome']) # Luciano
print(pessoa['gênero']) # KeyError, gênero não foi declarado
`)} />

<p>
  já que em python nós preferimos levantar erros em vez de falhar
  silenciosamente, temos um método padrão dos dicionários para resgatar valores
  default no caso de eles não terem sido declarados:
</p>

<Highlight
  language={python}
  code={formatCodeString(`
pessoa.get('gênero', 'não-binário')
# não achamos a chave "gênero", retornamos 'não-binário'
`)} />

<h3 id="None">None</h3>
<p>
  <code>None</code>
  é equivalente a
  <code>null</code>
  em javascript. isso significa que
  <code>None</code>
  representa a ausência de um valor e é avaliado como
  <code>false</code>.
</p>
<p>
  detalhe: não há par para
  <code>undefined</code>
  em python, já que tentar acessar algo não definido em python levanta uma
  exceção
  <code>NameError</code>.
</p>
<h3 id="funcoes">funções</h3>
<p>
  assim como em javascript, funções também são objetos em python. isso significa
  que você pode passar funções como argumentos/callbacks ou até assinalar
  propriedades pra funções.
</p>

<Highlight
  language={python}
  code={formatCodeString(`
def func_tainha(a, other_func):
    print(a)
    other_func()
def another_func():
    print('marilene')
func_tainha('olá', another_func)
# olá
# marilene
func_tainha.vinho = 'sinuelo'
print(func_tainha.vinho)
# sinuelo
`)} />

<h2 id="modulos">módulos</h2>
<p>
  não quero falar sobre ES6 aqui, mas os módulos (pacotes) em python são bem
  parecidos (em sintaxe) com os módulos em javascript ES6.
</p>
<h4>definindo um módulo</h4>
<p>
  ao contrário de ES6, em que você tem que declarar o que você tá exportando pro
  seu módulo, em python você sõ precisa criar um arquivo
  <code>.py</code>
  e suas punções/classes/oquefor estão prontas pra serem importadas. basta que,
  na mesma pasta do seu módulo, você coloque um arquivo
  <code>__init__.py</code>
  pra que o interpretador python reconheça o módulo
</p>

<Highlight
  language={python}
  code={formatCodeString(`
# qualquercoisa/qualquercoisa.py
def dizer_quelquercoisa():
  print('qualquercoisa')
`)} />

<hr />
<Highlight
  language={python}
  code={formatCodeString(`
# qualquercoisa/__init__.py
# pode ser vazio mesmo
`)} />

<hr />
<Highlight
  language={python}
  code={formatCodeString(`
# qualquercoisa/lala.py
import qualquercoisa
# importando o módulo inteiro
qualquercoisa.dizer_quelquercoisa()
# qualquercoisa
from qualquercoisa import dizer_quelquercoisa
# importando apenas a função 'dizer_quelquercoisa'
dizer_quelquercoisa()
# 'qualquercoisa'
`)} />

<p>
  ah, e pra instalar pacotes disponibilizados pela comunidade, tipo
  <code>npm</code>, você usa o
  <code>pip</code>.
</p>
<Highlight language={shell} code={`pip install django`} />
<h2 id="poo">programação orientada a objetos</h2>
<p>
  em python, assim como ES6, há suporte a classes e herança entre objetos. isso
  é diferente da herança baseada em
  <code>prototypes</code>
  clássica do javascript.
</p>

<Highlight
  language={python}
  code={formatCodeString(`
# você pode definir uma classe que representa qualquer animal
class Animal:
    # qualquer variável definida aqui será uma propriedade da classe
    idade_inicial = 1
    def __init__(self, nome, especie='humano'):
        # aqui, declaramos que, ao criar um animal, podemos passar um nome e espécie pra ele
        # se não passarmos uma espécie, por padrão, ela será 'humano'
        # 'self' se comporta parecido com o 'this', mas sem toda a confusão de escopo
        self.nome = nome
        self.especie = especie
        self.idade = self.idade_inicial
    def comemorar_aniversario(self):
        # ao comemorar aniversário, acrescentamos 1 à idade
        self.idade += 1
    def falar(self):
        # se for um humano, ele fala besteira
        if self.especie == 'humano':
            return 'blablablawhiskassachê'
`)} />

<p>
  desse jeito, se inicializarmos um humano chamado Jorge e comemorarmos seu
  aniversário, teremos o seguinte:
</p>
<Highlight
  language={python}
  code={formatCodeString(`
jorge = Animal('Jorge')
jorge.idade
# 1
jorge.comemorar_aniversario()
jorge.idade
# 2
jorge.falar()
# blablablawhiskassachê
`)} />
<h3 id="herança">herança</h3>
<p>
  tendo como base nossa classe de animal, podemos, por exemplo, termos uma
  subclasse de animal chamada
  <code>Girafa</code>:
</p>

<Highlight
  language={python}
  code={formatCodeString(`
class Girafa(Animal):
    """
    ao passar Animal entre parênteses, herdamos tudo de Animal
    aqui, declaramos que girafas são da espécie 'girafa'
    e que não precisam de nome.
    pra isso, sobrescrevemos o __init__, que inicializa uma girafa.
    """
    def __init__(self):
        self.idade = self.idade_inicial
        self.especie = 'girafa'
        `)} />
<p>assim, se inicializarmos uma girafa...</p>
<Highlight
  language={python}
  code={formatCodeString(`
girafa_nova = Girafa()
# não precisamos mais passar nome
girafa.idade
# 1
girafa.comemorar_aniversario()
girafa.idade
# 2
girafa.falar()
#
# isso mesmo, girafa não fala,
# então se mandarmos ela falar, não sai nada :)
`)} />
<hr />

<p>
  é claro que tem MUITO mais sobre python do que só isso, então se tiverem
  qualquer dúvida ou acharem que algo poderia ser explicado melhor, só falar nos
  comentários.
</p>
<p>
  e lembrem que a melhor forma de aprender uma linguagem é meter a mão na massa
  e fazer um projetinho! se não souberem por onde começar, eu recomendo
  fortemente o
  <a href="https://tutorial.djangogirls.org/pt/">tutorial das pyladies do Django
    Girls</a>, mas se não quiser aprender com desenvolvimento web, tem sempre o
  <a href="https://www.pycursos.com/python-para-zumbis/">python para zumbis</a>
  do querido e fofíssimo Masanori.
</p>
<p>abraços, e até a próxima!</p>
