<script>
  import Highlight from "../../../components/Highlight.svelte";
  import { django, yaml } from "svelte-highlight/languages";
  import { formatCodeString } from "../../../utils";
</script>

<svelte:head>
  <title>
    Lektor parte 2: deploy, macros, admin e plugins - luciano@ratamero.com
  </title>
  <meta
    name="description"
    content="agora que já expliquei o básico de como utilizar o Lektor pra desenvolver seu site estático, vou começar a explicar alguns aspectos mais avançados. :]" />
  <meta
    name="keywords"
    content="Luciano Ratamero, lektor, python, site estático, deploy, macros, admin, plugins" />
</svelte:head>

<h1><mark>Lektor parte 2: deploy, macros, admin e plugins</mark></h1>

<p class="meta">2016-02-03</p>
<figure>
  <a target="_blank" href="https://getlektor.com/"><img
      src="https://lucianoratamero.github.io/img/cover-lektor-2.png"
      alt="Lektor's logo" /></a>
</figure>
<p>
  agora que já expliquei o básico de como utilizar o Lektor pra desenvolver seu
  site estático, vou começar a explicar alguns aspectos mais avançados. não
  pretendo ser muito detalhista, mas fiquem a vontade para pedir mais
  informações nos comentários. aí vai!
</p>
<hr />

<h3>deploy</h3>
<p>
  sim, o Lektor vem pronto para uma série de opções para deploy facilitado:
  <a href="https://www.getlektor.com/docs/deployment/rsync/">rsync</a>,
  <a href="https://www.getlektor.com/docs/deployment/ftp/">ftp</a>,
  <a href="https://www.getlektor.com/docs/deployment/ghpages/">github pages</a>
  e, via plugin,
  <a href="https://github.com/spenczar/lektor-s3">s3</a>. isso significa que
  basta ter um local remoto para manter seus arquivos estáticos que você tem um
  site pronto, com deploy e tudo.
</p>
<p>
  o deploy dele é facilmente configurado e bem inteligente, já que ele verifica
  somente os arquivos que precisam ser alterados e os sobrescreve. para
  configurar, basta seguir
  <a
    href="https://www.getlektor.com/docs/deployment/#lektor-assisted-deployments">a
    documentação</a>
  do método escolhido e rodar
  <code>lektor build lektor deploy</code>. esse processo garante que o Lektor
  pegará a versão mais nova antes de sincronizar com o servidor.
</p>
<p>
  no meu caso, foi só (juro que foi só isso) colocar o seguinte no meu arquivo
  de projeto, o
  <code>blog.lektorproject</code>:
</p>
<Highlight
  language={yaml}
  code={formatCodeString(`
[servers.ghpages]
target = ghpages+https://lucianoratamero/blog
`)} />
<p>
  não cheguei a ver os outros, mas
  <strong>duvido</strong>
  que sejam muito mais complicados que isso.
</p>
<h3>macros</h3>
<p>
  quando você tiver brincado o suficiente com os modelos do Lektor, você vai
  sentir falta de iteradores de template. um exemplo clássico é uma página de
  resumo dos posts de um blog, como a que eu tenho na home desse aqui.
</p>
<p>
  pra isso, existem as macros. elas são templates com lógicas embutidas. mais
  fácil de explicar mostrando um exemplo.
</p>

<Highlight
  language={django}
  code={formatCodeString(`
{% macro render_blog_post(post, from_index=false) %}
  <div class="blog-post">
  {% if from_index %}
    <h2><a href="{{ post|url }}">{{ post.title }}</a></h2>
  {% else %}
    <h2>{{ post.title }}</h2>
  {% endif %}
  <p class="meta">
    {{ post.pub_date }}
  </p>
  {{ post.body }}
  </div>
{% endmacro %}
`)} />
<p>
  o papel dessa macro é receber um objeto
  <code>post</code>
  e formatá-lo de acordo com o template. ele é usado pelo template de blog da
  seguinte forma:
</p>

<Highlight
  language={django}
  code={formatCodeString(`
{% extends "layout.html" %}
{% from "macros/blog.html" import render_blog_post %}
{% from "macros/pagination.html" import render_pagination %}

{% block title %}
  {% if this.title %}{{ this.title }}{% else %}olar{% endif %}
{% endblock %}

{% block body %}
  {% for child in this.pagination.items %}
    {{ render_blog_post(child, from_index=true) }}
  {% endfor %}

  {{ render_pagination(this.pagination) }}
{% endblock %}
`)} />
<p>
  vemos assim que só é necessário importar a macro criada e passar os objetos
  corretos. pra saber quais objetos e como usá-los, é só dar uma olhada na
  documentação da
  <a href="https://www.getlektor.com/docs/api/db/">API de tratamento de dados</a>
  do Lektor.
</p>
<h3>admin</h3>
<p>
  ah, sim, o Lektor, quando usado localmente, oferece uma interface
  administrativa pra edição e criação de conteúdo. pra usá-la, basta rodar o
  servidor com
  <code>lektor server</code>, acessar a página
  <code>localhost:5000</code>
  e clicar no ícone do lápis do canto da tela.
</p>
<figure>
  <img
    src="https://lucianoratamero.github.io/img/acessando-o-admin.jpg"
    alt="Mostrando o link do admin no topo direito da tela" />
</figure>
<p>isso te levará pra uma página do admin similar à essa:</p>
<figure>
  <img
    src="https://lucianoratamero.github.io/img/admin.jpg"
    alt="Exemplo de página de admin" />
</figure>
<p>
  todas as alterações feitas nela refletirão nos seus arquivos do projeto e
  vice-versa. fica na sua preferência utilizar a interface administrativa ou
  editar os arquivos
  <code>content.lr</code>
  diretamente. :) mais um pouco e já poderemos colocar isso na mão dos próprios
  clientes!
</p>
<h3>plugins</h3>
<p>
  como o Lektor é bem documentado e extensível, ficou fácil pra (pequena)
  comunidade criar plugins que adicionam novos comportamentos. vocês devem ter
  notado que uso o disqus como plataforma de comentários, e não tive trabalho
  quase nenhum pra colocá-lo no blog, quase nenhum
  <strong>mesmo</strong>.
</p>
<p>
  pra usar um plugin, é só procurar na
  <a href="https://www.getlektor.com/docs/plugins/">página de plugins do Lektor</a>
  o plugin que quer usar e seguir a própria documentação. vou demonstrar pra
  vocês como foi fácil colocar o
  <a href="https://github.com/lektor/lektor-disqus-comments">plugin de
    comentários do disqus</a>.
</p>
<p>
  o que eu fiz foi abrir o aquivo
  <code>blog.lektorproject</code>
  na raiz do meu projeto (o nome do arquivo varia com o nome do projeto) e
  colocar as seguintes linhas:
</p>
<Highlight
  language={yaml}
  code={formatCodeString(`
[packages]
lektor-disqus-comments = 0.1
`)} />
<p>
  isso fez com que, quando eu rodasse
  <code>lektor server</code>
  ou
  <code>lektor build</code>, ele detectasse minha intenção, instalasse as
  dependências e ficasse pronto pra usar o plugin.
</p>
<p>
  depois disso, fui no
  <a href="https://publishers.disqus.com/engage?utm_source=Home-Nav">disqus</a>
  e criei uma comunidade pro blog (é bem autoexplicativo o processo, não me
  demorou dois minutos).
</p>
<p>
  com o nome da comunidade em mãos, criei uma pasta
  <code>configs/</code>
  na raiz do projeto com um arquivo
  <code>disqus-comments.ini</code>
  dentro. nesse arquivo, só precisei declarar o shortname da comunidade.
</p>
<pre><code>shortname = lucianoratamerosblog</code></pre>
<p>
  com o disqus configurado, escolhi o template de blog-post pra habilitar os
  comentários e os coloquei assim:
</p>

<Highlight
  language={django}
  code={formatCodeString(`
{% extends "layout.html" %}
{% from "macros/blog.html" import render_blog_post %}
{% block title %}{{ this.title }}{% endblock %}
{% block tags %}{{ this.tags }}{% endblock %}
{% block body %}
  {{ render_blog_post(this) }}
  <div class="comments">{{ render_disqus_comments() }}</div>
{% endblock %}
`)} />
<p>
  só precisei botar mesmo a div de comentários. daí foi recarregar a página e
  voilá, tudo funcionando
  <strong>lindamente</strong>.
</p>
<hr />

<p>
  enfim, espero ter abordado um pouco melhor alguns detalhes e features
  interessantes do Lektor. caso tenham alguma pergunta ou dúvida, só mandarem
  ver nos comentários. é isso por enquanto, minha gente, vejo vocês na próxima!
  o/
</p>
