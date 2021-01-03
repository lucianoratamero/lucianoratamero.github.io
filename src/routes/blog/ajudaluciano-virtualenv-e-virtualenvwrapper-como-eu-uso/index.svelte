<script lang="ts">
  import cowsay from "../../../img/cowsay (cópia).gif";
  import gotodefinition from "../../../img/go-to-definition (cópia).gif";
  import workoncdvirtualenv from "../../../img/workon-cdvirtualenv (cópia).gif";
  import runapistar from "../../../img/run-apistar (cópia).gif";
</script>

<svelte:head>
  <title>
    #ajudaLuciano - virtualenv e virtualenvwrapper: como eu uso -
    luciano@ratamero.com
  </title>
  <meta
    name="description"
    content="Aqui vão
  algumas dicas de como eu uso virtualenv e virtualenvwrapper pra facilitar minha vida como
  desenvolvedor, principalmente nesse mundo de python 2/3, angular, react, docker e afins. :]" />
  <meta
    name="keywords"
    content="Luciano Ratamero, #ajudaLuciano, virtualenv, virtualenvwrapper" />
</svelte:head>

<h1>
  <mark>#ajudaLuciano - virtualenv e virtualenvwrapper: como eu uso</mark>
</h1>

<p class="meta">2017-12-28</p>
<p>
  como eu sou (pessimamente) conhecido por customizar (demais) meu computador de
  trabalho com scripts, aliases e o que for, faz um tempo que o pessoal tem me
  cobrado um post sobre como eu uso virtualenv e virtualenvwrapper. aqui vão
  algumas dicas de como eu uso ambos pra facilitar minha vida como
  desenvolvedor, principalmente nesse mundo de python 2/3, angular, react,
  docker, neo4j e afins. ;)
</p>
<p>
  <em>for native english speakers,
    <a
      href="https://www.ratamero.com/blog/halp-virtualenv-and-virtualenvwrapper/">here's
      the translated post</a></em>
</p>
<h3>o que é o virtualenvwrapper</h3>
<p>
  pra quem não conhece, o
  <a
    href="https://virtualenvwrapper.readthedocs.io/en/latest/">virtualenvwrapper</a>
  é
  <strong>um conjunto de extensões da virtualenv</strong>. ele provê uma série
  de comandos úteis pra quem lida com virtualenvs (alguns que eu uso
  <strong>diariamente</strong>).
</p>
<p>
  o virtualenvwrapper funciona da seguinte forma: ele separa suas pastas de
  projeto das que pertencem à virtualenv, como
  <code>bin</code>,
  <code>lib</code>,
  <code>include</code>
  e afins, e te dá algumas utilidades. ele coloca as virtualenvs dentro da pasta
  da variável de ambiente
  <code>WORKON_HOME</code>. isso é ótimo pra quem gosta de não sujar a pasta do
  projeto com coisas externas e faz com que você não tenha que colocar as pastas
  da virtualenv no gitignore, por exemplo.
</p>
<p>
  no entanto, eu
  <strong>pessoalmente</strong>
  prefiro ter os arquivos de bibliotecas dentro da pasta do projeto por dois
  motivos:
</p>
<ul>
  <li>
    sempre sei onde elas estão sem precisar me lembrar de qual pasta coloquei
    como
    <code>WORKON_HOME</code>;
  </li>
  <li>
    e, o melhor, facilito a vida do meu editor de texto, que vai conseguir ler o
    código das bibliotecas usadas.
  </li>
</ul>
<p>
  isso faz com que, por exemplo, meu editor possa me recomendar nomes de
  módulos/classes/funções e faça funcionar o lindo "Go To Definition", que abre
  o local do código-fonte de algum módulo/classe/função que está sendo usada no
  seu código. tanto o Atom quanto o Sublime têm plugins ótimos pra "Go To
  Definition", e isso me salvou inúmeras vezes.
</p>
<figure>
  <a href={gotodefinition}>
    <img src={gotodefinition} alt="Vídeo do Go To Definition funcionando" />
  </a>
</figure>
<p>
  então, por motivos argumentativos, vou usar minha preferência pra explicar
  algumas das minhas decisões. belessa? belessa.
</p>
<h3><code>workon</code>, <code>cdvirtualenv</code> e outros comandos úteis</h3>
<p>
  o virtualenvwrapper tem uma cacetada de comandos bem úteis pro dia-a-dia do
  desenvolvedor python, então vou falar sobre os que eu mais uso:
</p>
<h4><code>workon</code></h4>
<p>
  o
  <code>workon</code>
  é um comando que serve pra você ligar sua virtualenv de qualquer lugar. ao
  executar
  <code>workon NOMEDOPROJETO</code>, você fica na mesma pasta onde está, mas com
  todos os parâmetros da sua env, como a versão do python, as bibliotecas
  instaladas, as variáveis de ambiente e tudo mais. serve como ponto de entrada
  pra outros hacks que vou destrinchar e aceita
  <em>tab complete</em>.
</p>
<h4><code>cdvirtualenv</code></h4>
<p>
  extremamente útil se sua pasta de env e de projeto forem a mesma. o
  <code>cdvirtualenv</code>
  te leva diretamente pra raiz da pasta que contém sua env sem que você precise
  saber qual ela é. se sua pasta de projeto for a mesma, você ganha o bônus de
  ir diretamente pra pasta do projeto sem precisar dar
  <code>cd</code>
  pra ela. faz combo com o
  <code>workon</code>
  (novo terminal &gt;
  <code>workon NOMEDOPROJETO</code>
  &gt;
  <code>cdvirtualenv</code>).
</p>
<figure>
  <a href={workoncdvirtualenv}>
    <img
      src={workoncdvirtualenv}
      alt="Vídeo do cdvirtualenv mudando de diretório" />
  </a>
</figure>
<h4><code>cpvirtualenv</code></h4>
<p>
  serve pra você replicar uma virtualenv pra outra. pouco usado, mas salvador da
  pátria quando é.
</p>
<h4><code>cdsitepackages</code></h4>
<p>te leva pra pasta com todas suas bibliotecas instaladas. simples, lindo.</p>
<h3>
  a mágica dos scripts de
  <code>postactivate</code>
  e
  <code>postdeactivate</code>
</h3>
<p>
  agora que vêm os maiores pulos do gato (pulos dos gatos?): o virtualenvwrapper
  te dá a opção de você escrever scripts bash pra antes/depois de você ativar
  uma virtualenv. basta colocar um arquivo chamado
  <code>postactivate</code>
  e/ou
  <code>postdeactivate</code>
  na pasta
  <code>bin</code>
  da sua virtualenv e eles serão executados.
</p>
<p>isso te permite fazer duas coisas extremamente úteis:</p>
<ul>
  <li>exportar/sobrescrever variáveis de ambiente;</li>
  <li>executar qualquer comando específico do seu projeto.</li>
</ul>
<p>
  o primeiro é autoexplicativo, mas o segundo é
  <strong>lindo demais</strong>; ele faz com que você possa, por exemplo,
  executar um
  <code>cdvirtualenv</code>
  assim que sua env for ativada, te levando direto pra pasta projeto. ou então,
  melhor ainda,
  <strong>iniciar dependências externas da sua aplicação/levantar imagens do
    docker</strong>. ou até fazer com que uma vaquinha diga qual a pasta da sua
  virtualenv (<code>cowsay $VIRTUAL_ENV</code>). o mesmo pra quando você
  desativa uma virtualenv (por favor, vamo desligar os treco de docker, né?).
  enfim, a utilidade é infinita.
</p>
<figure>
  <a href={cowsay}>
    <img alt="vídeo do postactivate chamando o cowsay" src={cowsay} />
  </a>
  <a href={runapistar}>
    <img alt="vídeo do postactivate iniciando uma aplicação" src={runapistar} />
  </a>
</figure>
<p>
  outro ponto interessante é que o virtualenvwrapper cria arquivos globais de
  todos esses eventos (pré e pós tudo) na sua pasta de virtualenvs. caso esses
  sejam editados, todas as envs executarão esses scripts quando forem
  ativadas/desativadas.
</p>
<p>
  pra fechar, em alguns dos projetos nos quais eu trabalho, a gente até já
  convencionou que terão, na pasta
  <code>contrib</code>, um script de
  <code>postactivate</code>
  pronto pra automatizar alguns processos. acaba servindo como documentação de
  como as coisas funcionam, e tendem a ser bem menos complicados do que
  dockerfiles, dependendo de pra que são usados. bem maneiro.
</p>
<hr />

<p>
  enfim, essas foram algumas dicas de como eu automatizo alguns processos chatos
  usando virtualenv e virtualenvwrapper. espero que tenha sido útil pra vocês, e
  caso vocês tenham algum hack similar que ajude no desenvolvimento em ambientes
  python, mandem ver nos comentários! eu vou ficando por aqui. abraços, e até
  mais o/
</p>
