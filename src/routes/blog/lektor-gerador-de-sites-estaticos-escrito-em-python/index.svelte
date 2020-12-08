<h1><mark>Lektor: gerador de sites estáticos escrito em Python</mark></h1>

<p class="meta">2016-02-02</p>
<figure>
  <a target="_blank" href="https://getlektor.com/">
    <img src="https://lucianoratamero.github.io/img/cover-lektor.png" alt="Lektor's logo" /></a>
</figure>

<p>
  vamos começar com um post um pouco meta: sobre como eu fiz esse blog usando
  Python e
  <a href="https://getlektor.com/">Lektor</a>, um gerador de sites estáticos
  escrito em Python. por que usar uma ferramenta em Python em vez de JavaScript?
  pra poder falar sobre ele pro pessoal da
  <a href="https://www.facebook.com/pythonrio/">PythOnRio</a>, claro. e porque
  foi a melhor ferramenta que usei pra esse propósito até hoje. mas isso é só um
  detalhe. enfim, vamos começar do começo: o que raios é Lektor?
</p>
<hr />

<h3>o que raios é Lektor?</h3>
<p>
  bem, como eu disse, o Lektor é um gerador de sites estáticos escrito em
  Python, ou seja, um gerador de htmls. basicamente, ele pega
  <strong>conteúdo</strong>, o formata em
  <strong>modelos</strong>
  e os aplica a
  <strong>templates</strong>
  pré-definidos. tudo isso pra poder te dar a liberdade de construir o conteúdo
  da forma que quiser, bem categorizado e organizado, e transformá-lo em um site
  estático sem se preocupar com copiar e colar html, css e javascript.
</p>
<p>
  ele é perfeito pra quem quer algo entre a construção manual de páginas em html
  puro, mas não precisa de uma estrutura rebuscada nem de uma aplicação e
  servidor necessários a um
  <a
    href="https://pt.wikipedia.org/wiki/Sistema_de_gerenciamento_de_conte%C3%BAdo">CMS</a>.
  dessa forma, podemos ter um site com uma estrutura complexa em html puro,
  deixando o computador ter o trabalho de montar o site pra gente.
  <strong>detalhe: esse blog é feito com Lektor ;)</strong>
</p>
<h3>ok, como eu começo a ver qual é?</h3>
<p>como todo bom pacote Python, basta instalar via pip:</p>
<pre><code>pip install lektor</code></pre>
<p>
  sempre bom lembrar que o recomendável é instalar dentro de uma
  <a
    href="http://docs.python-guide.org/en/latest/dev/virtualenvs/">virtualenv</a>.
</p>
<p>com o Lektor no seu path, é só dar um:</p>
<pre><code>lektor quickstart</code></pre>
<p>
  ele vai fazer uma série de perguntas, como
  <em>nome do projeto</em>,
  <em>autor</em>,
  <em>pasta destino do projeto</em>, essas coisas. com isso, temos um projeto
  pronto pra funcionar. só precisamos saber como funciona, certo?
</p>
<h3>como funciona?</h3>
<p>
  como eu disse anteriormente, ele transforma uma estrutura própria dele em html
  puro. vou destrinchar então cada parte dele pra a gente entender melhor.
</p>
<h4>estrutura de diretórios</h4>
<p>
  o
  <code>quickstart</code>
  do Lektor gerou algo similar à seguinte estrutura de diretórios:
</p>
<figure>
  <img src="https://lucianoratamero.github.io/img/lektor-tree.jpg" alt="Árvore de diretórios de um projeto Lektor" />
</figure>
<p>
  temos três pastas centrais aqui:
  <strong>content</strong>,
  <strong>models</strong>
  e
  <strong>templates</strong>. vou explicar cada uma com calma.
</p>
<h4>./content</h4>
<figure>
  <a
    target="_blank"
    href="https://lucianoratamero.github.io/img/content.jpg"><img
      src="https://lucianoratamero.github.io/img/content.jpg" alt="Exemplo de um arquivo de conteúdo" /></a>
</figure>
<p>
  aqui está o conteúdo do seu site. é um ponto interessante do Lektor: ele não
  usa um banco de dados pra guardar os dados do seu site,
  <strong>é tudo em estrutura de pastas e arquivos</strong>. assim, você
  automaticamente tem uma visão geral de todo seu conteúdo e tudo eternamente
  organizado - fora o fato de que, bem, você não precisa de um banco de dados!
  quer criar uma página nova? é só criar uma pasta com o nome da página e um
  arquivo chamado
  <code>content.lr</code>
  dentro, com o conteúdo em si.
</p>
<h4>./models</h4>
<figure>
  <a
    target="_blank"
    href="https://lucianoratamero.github.io/img/models.jpg"><img
      src="https://lucianoratamero.github.io/img/models.jpg" alt="Exemplo de um arquivo de modelo" /></a>
</figure>
<p>
  se vocês notaram na parte do
  <strong>content</strong>, ele tem subdivisões:
  <em>title</em>
  e
  <em>body</em>. essas são características do
  <strong>modelo de página</strong>. isso aí:
  <em>você pode criar tipos de conteúdo diferentes</em>, e eles podem interagir
  entre si. por exemplo, o modelo de
  <em>blog-post</em>
  pertence ao modelo de
  <em>blog</em>. isso permite um maior nível de customização na hora de formatar
  seu conteúdo nos
  <strong>templates</strong>.
</p>
<h4>./templates</h4>
<figure>
  <a
    target="_blank"
    href="https://lucianoratamero.github.io/img/templates.jpg"><img
      src="https://lucianoratamero.github.io/img/templates.jpg" alt="Exemplo de um arquivo de template" /></a>
</figure>
<p>
  se você já trabalhou com Django ou Jinja, ou até Angular, vai estar em casa
  aqui.
  <strong>templates</strong>
  são representações html dos
  <strong>modelos</strong>
  preenchidos com
  <strong>conteúdos</strong>. podemos ver que nosso template de página extende o
  template de layout (que é o que contém todo o html repetido em todas as
  páginas) e substitui locais específicos com dados específicos, definidos no
  conteúdo criado.
</p>
<h3>ok, ok, mas eu não faço idéia de como tá ficando!</h3>
<p>caaalma. abre o terminal de novo, faz favor. digita aí.</p>
<pre><code>lektor server</code></pre>
<p>
  então, agora você pode visitar seu site e ver o que tá fazendo acessando
  <code>localhost:5000</code>. mas aí vem a confusão:
  <em>o Lektor não gera html puro? que negócio é esse de servidor?</em>
  então, o que ele tá fazendo é somente detectando mudanças nos arquivos,
  gerando os htmls de novo e servindo esse html localmente. não tem servidor
  nenhum (tem, mas só é usado pra isso), é só uma conveniência pra que você
  consiga trabalhar melhor.
</p>
<p>
  caso você queira ver exatamente o que ele está gerando, use o comando
  <code>lektor build</code>. ele te dará a pasta na qual ele tá colocando os
  arquivos gerados. é só abrir os htmls no navegador que você verá que tá tudo
  perfeito, bizarramente mágico. se quiser mudar a pasta de destino dos arquivos
  gerados, adicione a flag
  <code>--output-path [caminho da pasta]</code>
  que ele vai
  <strong>sobrescrever</strong>
  o conteúdo da pasta com o código gerado. então
  <strong>tenha cuidado</strong>
  pra não sobrescrever uma pasta que seja valiosa pra você. sugiro criar uma
  pasta no próprio projeto pra que seja sempre o destino.
</p>
<p>
  <strong>sério, lê de novo o último parágrafo. atentamente. vai por mim.</strong>
</p>
<h3>beleza, achei legal, mas queria entender um pouco melhor!</h3>
<p>
  então, o código desse blog aqui tá num repositório aberto no github:
  <a href="https://github.com/lucianoratamero/blog">lucianoratamero/blog</a>.
  claro que esse blog tem algumas sacanageiras a mais, mas dá pra entender tudo
  se você pegar esse post e comparar ao código. :)
</p>
<p>
  também tem os
  <a
    href="http://lucianoratamero.github.io/talks/2016/fazendo%20seu%20site%20-%20blog%20no%20Github%20Pages%20com%20Python%20e%20Lektor/">slides
    da minha palestra na PythOnRio</a>. e
  <a href="http://facebook.com/lucianoratamero">eu</a>, caso queira tirar uma
  dúvida. pode perguntar sem medo! pode mandar ver nos comentários também, que
  eu recebo notificação (recebo mesmo!).
</p>
<p>
  ficaram algumas features interessantes faltando, como a interface
  administrativa, a gerência de anexos, as ferramentas de deploy, os plugins e o
  uso com o
  <a href="http://pages.github.io">github pages</a>, mas acho que pode ficar pra
  outro post. esse já tá meio grande demais. então até mais, vejo vocês outro
  dia o/
</p>
