<script lang="ts">
  import caetano from "./caetano.jpg";
</script>

<svelte:head>
  <title>
    #ajudaLuciano - como escrever um post de blog - luciano@ratamero.com
  </title>
  <meta
    name="description"
    content="Como jornalista e programador, vejo muitos colegas de código com dificuldade de escrever posts. Ceha mais pra ver umas dicas :]" />
  <meta
    name="keywords"
    content="Luciano Ratamero, post, blog, jornalismo, post técnico" />
</svelte:head>

<h1><mark>#ajudaLuciano - como escrever um post de blog</mark></h1>

<p class="meta">2019-07-03</p>
<p>
  <strong>Escrever texto é muito difícil.</strong>
  Pra nós programadores, as coisas muitas vezes fazem total sentido dentro da
  nossa cabeça de uma maneira intuitiva. Mesmo assim,
  <strong>colocar as ideias no papel</strong>
  parece ser uma
  <strong>tarefa monumental</strong>. Eu, no entanto, nunca tive muito problema:
  sou formado em jornalismo (<strong>muahaha &gt;:D</strong>). Vim aqui
  compartilhar com vocês algumas das coisas que me ajudam a escrever um post ou
  formatar uma palestra. Vamos lá!
</p>
<h2>Problemas mais comuns</h2>
<p>
  Quando eu converso com a galera da
  <a href="https://labcodes.com.br/">Labcodes</a>, eu noto que
  <strong>os problemas mais comuns</strong>
  são os seguintes:
</p>
<ul>
  <li>
    <p>não saber <strong>qual</strong> assunto abordar;</p>
  </li>
  <li>
    <p>não saber <strong>o que falar</strong> sobre dado assunto;</p>
  </li>
  <li>
    <p>não conseguir <strong>encadear</strong> o conteúdo direitinho;</p>
  </li>
  <li>
    <p>não saber <strong>como concluir ou resumir</strong> o texto.</p>
  </li>
</ul>
<p>
  A questão é que jornalistas fazem isso
  <strong>o tempo todo</strong>;
  <em>até quando não devem</em>.
</p>
<figure>
  <img src={caetano} alt="A matéria jornalística que chocou o mundo" />
  <figcaption>
    <a
      href="https://www.terra.com.br/diversao/gente/caetano-veloso-passeia-pelo-leblon-e-estaciona-o-carro,e0d3399ae915a310VgnCLD200000bbcceb0aRCRD.html">A
      matéria jornalística que chocou o mundo</a>
  </figcaption>
</figure>
<p>
  E se você tá se perguntando,
  <strong>sim</strong>, nós temos uma
  <strong>receitinha</strong>
  de como fazer essas
  <em>chocantes</em>
  matérias.
</p>
<h3>Ao pensar sobre o assunto, o importante é o público</h3>
<p>
  Quando você começa a pensar sobre um post/palestra, a primeira coisa que eu
  gosto de fazer é pensar em
  <strong>quem vai ler/assistir </strong>ao conteúdo. Esse post é pra prospectar
  <strong>clientes</strong>? Então de repente vale ter os
  <strong>valores</strong>
  do cliente na cabeça. É uma palestra pra
  <strong>iniciantes</strong>? Então vale deixar de lado os
  <strong>jargões</strong>.
</p>
<p>
  Outro fator importante é ter em mente que um post é uma via de mão dupla.
  <strong>Você</strong>, autor, está contribuindo com algo que você
  <strong>pode dar</strong>
  (conteúdo, entretenimento) em
  <strong>troca</strong>
  pelo que o leitor pode dar:
  <strong>atenção</strong>.
</p>
<blockquote>
  <p>
    Manter essa troca de
    <strong>informação</strong>
    por
    <strong>atenção</strong>
    é essencial se você quer que as pessoas continuem lendo seu texto.
  </p>
</blockquote>
<p>
  Pra fechar essa parte, uma boa dica pra resolver sobre
  <strong>qual</strong>
  assunto abordar é pensar sobre
  <strong>o que te frustra</strong>
  diariamente como profissional. Os ModelSerializers do DRF te incomodam por
  serem acoplados demais? O docker é muito complicado de configurar? Então
  provavelmente esses são assuntos que poderiam interessar a
  <strong>outras pessoas</strong>. E com o assunto em mãos…
</p>
<h3>…tudo começa com uma frase</h3>
<p>
  A gente tem que começar de algum lugar, certo? Pessoalmente, acho a
  <strong>primeira frase</strong>
  muito importante. Ela delimita o<strong> tom</strong>
  do texto; e ela nem precisa dar informações sobre o assunto. Pode ser algo
  como:
</p>
<ul>
  <li>
    <p><em>Fazer deploy é chato.</em></p>
  </li>
  <li>
    <p><em>É 2019 e ainda tem muita gente que não usa grid nos layouts.</em></p>
  </li>
  <li>
    <p><em>Essa é a história de como eu descobri o Flask.</em></p>
  </li>
  <li>
    <p><em>Escrever texto é muito difícil.</em></p>
  </li>
</ul>
<p>
  Pegando o exemplo do deploy, vemos que a primeira frase geralmente é o
  <strong>porquê</strong>
  de você estar escrevendo o texto. O que você quer com essa frase é
  <strong>dar contexto</strong>
  e
  <strong>se engajar</strong>
  com o leitor. Fale algo que faça o leitor pensar “<em>putz, é verdade, deploy
    é chato mesmo, quero ver que que esse cara vai falar</em>”.
</p>
<p>
  E com o tom dado, a gente pode continuar o primeiro parágrafo com
  <strong>informações</strong>
  mais precisas sobre o tópico. Você poderia continuar, por exemplo, com “<em>Aqui
    na Labcodes, a gente resolveu esse problema com x, y, z de uma maneira bem
    elegante e simples</em>”. Algo que deixe
  <strong>claro</strong>
  sobre o que você vai falar,
  <strong>deixando os detalhes</strong>
  pro corpo do texto.
</p>
<p>
  Pra concluir o primeiro parágrafo, é importante ter algo que
  <strong>ligue</strong>
  o que você
  <strong>disse</strong>
  com o que você
  <strong>vai falar</strong>. Ainda no caso do deploy, poderia ser algo como “<em>Mas
    as soluções que nós demos criaram um novo desafio: como vamos usar x, y, z
    nos nossos projetos legados?</em>” que deixaria o leitor
  <strong>pronto e interessado</strong>
  em ler a próxima parte do texto.
</p>
<blockquote>
  <p>
    A estrutura de
    <strong>contexto &gt; informação &gt; ligação</strong>
    é uma boa receita tanto pra começar quanto pra escrever todo o texto.
  </p>
</blockquote>
<p>E com o primeiro parágrafo rascunhado, as coisas ficam bem mais simples.</p>
<h3>Escrevendo o corpo do texto</h3>
<p>
  Escrever o corpo do texto geralmente é mais fácil. Nesse ponto, você
  provavelmente já tem uma noção de quais tópicos abordar, e já dá pra montar
  qual parte vai ver depois da outra. Mesmo assim, é importante ter algumas
  coisas sempre em mente.
</p>
<p>
  Lembra que eu falei pra ter em mente seu público ao escrever? No corpo do
  texto, isso é
  <strong>importante</strong>
  pra você saber como dosar partes de
  <strong>respiro</strong>. Essas partes geralmente são imagens, gifs,
  subtítulos ou frases de destaque.
</p>
<blockquote>
  <p>
    No corpo do texto, mais que nunca, a troca entre
    <strong>informação</strong>
    e
    <strong>atenção</strong>
    é essencial.
  </p>
</blockquote>
<p>
  Pra me manter focado, eu gosto de me dar um
  <strong>número de minutos</strong>
  pra
  <strong>escrever cada parágrafo</strong>. Isso me previne de ficar mexendo em
  coisa que já tá pronta enquanto eu podia estar pensando em outra coisa.
  Escrever é um processo
  <strong>cíclico</strong>
  e
  <strong>de descoberta</strong>, então é melhor você escrever muito e
  <strong>cortar</strong>
  o que é demais do que ficar polindo um parágrafo e nunca terminar o texto.
</p>
<p>
  De resto, é repetir a estrutura de
  <em>contexto &gt; informação &gt; ligação</em>
  e escrever a conclusão.
</p>
<h3>Legal, mas meu problema é exatamente concluir!</h3>
<p>
  Relaxa, já chegamos no que te interessa então! Como sempre, tudo depende de
  <strong>quem</strong>
  vai estar lendo o texto e
  <strong>qual sentimento</strong>
  ou informação você quer que a pessoa
  <strong>saia dali sentindo</strong>
  ou sabendo. Pra facilitar, eu gosto de falar sobre três possíveis
  <strong>padrões</strong>
  de conclusão:
</p>
<ul>
  <li>
    <p>recapitulação;</p>
  </li>
  <li>
    <p>opinião;</p>
  </li>
  <li>
    <p>referenciamento.</p>
  </li>
</ul>
<p>
  <strong>Recapitulação</strong>
  é o mais autoexplicativo. Pense exatamente sobre o que a pessoa
  <strong>precisa sair do post sabendo</strong>, ou o que é mais difícil de
  entender, e escreva sobre. Um exemplo seria o seguinte:
</p>
<p>
  <em>“Vimos hoje que o Django Rest Framework tem muitos pontos de acoplamento,
    mas que com uma boa estrutura de código, podemos testar tudo sem abrir mão
    da documentação automática. Lembre-se de separar bem a lógica de negócio do
    framework e testar tudo direitinho. Nos vemos por aí, até a próxima!”</em>
</p>
<p>
  <strong>Opinião</strong>
  é um pouquinho mais complicada. Se você está
  <strong>concluindo</strong>
  com uma opinião, é importante que
  <strong>todo seu texto</strong>
  tenha já expressado sua opinião, e que a conclusão seja só para que a pessoa
  saiba
  <strong>resumidamente qual opinião foi dita</strong>. Por exemplo:
</p>
<p>
  <em>“O Django Rest Framework deixa muito a desejar. Os ModelSerializers, além
    de lentos, geram um acoplamento muito grande entre os Models e a API. Pense
    bem se ele é a melhor opção antes de entrar de cabeça, e cuidado com os
    hacks. Nos vemos por aí, até a próxima!”</em>
</p>
<p>
  A forma mais popular de concluir, no entanto, é o
  <strong>referenciamento</strong>. Basicamente, você deve falar sobre
  <strong>onde</strong>
  a pessoa pode adquirir
  <strong>mais informações</strong>
  sobre o assunto. Algo como:
</p>
<p>
  <em>“Caso queira saber mais sobre o Django Rest Framework, leia a documentação
    e veja essa app Django que eu criei com os exemplos. Não tenha medo de
    comentar com as suas dúvidas, e se quiser dicas sobre casos específicos,
    falem comigo no telegram da Python Brasil. Nos vemos por aí, até a próxima!”</em>
</p>
<h3>Epa, então fechou, né?</h3>
<p>
  <strong>Pera</strong>, calma, tenho umas coisinhas pra falar ainda, mas é jogo
  rápido! Com o texto pronto, se dê um tempinho pra colocar em
  <strong>bold</strong>
  as palavras-chaves; isso ajuda
  <strong>muito</strong>
  quem tá lendo rápido ou relendo pra pegar referências.
</p>
<p>
  E se você
  <strong>não tá se sentindo bem</strong>
  com alguma parte do texto, tente identificar
  <strong>qual frase</strong>
  ou qual termo tá te deixando desconfortável. Às vezes é uma palavra, às vezes
  é o fluxo da frase, mas muitas vezes é a ordem gramatical mesmo.
  <em>Cara, não vou tocar na gramática não.</em>
</p>
<h3>No pior dos casos…</h3>
<p>
  …comece do zero.
  <strong>Sério</strong>. Como tudo na vida, escrever bem é questão de prática.
  No começo, vai demorar muito e vai ser um processo chatinho, mas depois de
  você internalizar o que eu disse aí em cima, você vai conseguir criar em cima
  disso com uma certa facilidade.
</p>
<p>
  E se teve algo que você queria que eu falasse sobre e eu não falei, pode me
  <a href="https://twitter.com/lucianoratamero">xingar no twitter</a>. Mentira,
  melhor que você me diga nos comentários mesmo, com calma, pra eu poder
  complementar depois. Valeu pela atenção, e nos vemos na próxima!
</p>
