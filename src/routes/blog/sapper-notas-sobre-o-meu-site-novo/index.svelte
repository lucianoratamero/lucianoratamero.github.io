<script>
  import tippy from "sveltejs-tippy";
  import PostMeta from "../../../components/PostMeta.svelte";
  import MetaTags from "../../../components/MetaTags.svelte";

  let el;
  $: text = el && el.textContent;
</script>

<svelte:head>
  <MetaTags
    title="sapper: notas sobre o meu site novo"
    description="ter feito o site novo com sapper me abriu os olhos pro novo mundo do svelte e de como fazer páginas acessíveis e leves. chega mais pra ver minhas notas sobre a migração do conteúdo :]"
    keywords="svelte, sapper, javascript, frontend, SSG, SEO" />
</svelte:head>

<h1><mark>sapper: notas sobre o meu site novo</mark></h1>
<PostMeta date="2021-01-11" {text} />

<article bind:this={el}>
  <p>
    faz pouco mais de seis meses que eu comecei a estudar e me envolver com
    <a rel="noopener" target="_blank" href="https://svelte.dev">svelte</a>.
    desde então, me encanta o quão pouco esforço e tempo é necessário pra fazer
    basicamente o que quiser no front. mas o projeto que me ganhou mesmo foi o
    <a
      rel="noopener"
      target="_blank"
      href="https://sapper.svelte.dev">sapper</a>. ele traz todos (<strong>TODOS</strong>)
    os benefícios de frameworks como o nextjs e o gatsby, mas com muito menos
    complicação.
  </p>

  <p>
    como de lei, tomei a descoberta do sapper como oportunidade de rescrever meu
    site e tirar da gaveta o plano de ter algum lugar online pra prototipar
    novos estudos de front. aqui ficam minhas anotações de soluções e problemas
    de ter usado o sapper pra um site novo!
  </p>

  <hr />

  <h2 id="ascoisasboas">as coisas boas</h2>

  <h3 id="heranadosvelte">herança do svelte</h3>

  <p>
    primeiro de tudo, o sapper é um framework para aplicações svelte, e só isso
    já é motivo mais do que o suficiente pra adotar. não só isso, mas é um
    produto do mesmo time, com os mesmos valores. o sapper é rápido, gera
    pouquíssimo código e, por padrão, só envia pro front o código estritamente
    necessário, além de prover uma estrutura intuitiva para roteamento, baseado
    na árvore de diretórios.
  </p>

  <p>
    isso significa que ele atende uma das minhas maiores necessidades, que era
    usar um framework que gerasse páginas estáticas (<a
      href="https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/">SSG</a>),
    mas que não tivesse um backend (ou seja, usasse SSG em vez de
    <a
      href="https://medium.com/@baphemot/whats-server-side-rendering-and-do-i-need-it-cb42dc059b38">SSR</a>).
    isso é ótimo para
    <span
      class="tip"
      use:tippy={{ content: '<strong>Search Engine Optimization</strong>: otimização para motores de busca. fácil do google achar, basicamente.', allowHTML: true }}>SEO</span>,
    ou seja, a base de um bom blog.
  </p>

  <p>
    essas limitações vieram por conta desse site estar hospedado no github
    pages, mas acho essas necessidades interessantes pra estressar um pouco os
    limites de uma ferramenta. coube como uma luva. :]
  </p>

  <h3 id="velocidadededesenvolvimento">velocidade de desenvolvimento</h3>

  <p>
    trabalhar com svelte é lindo demais. com pouco tempo e código, é fácil
    prototipar o que quiser no front, e raramente é necessário fazer grandes
    refatorações. o sapper, por consequência, é beeeem fácil de usar.
  </p>

  <p>
    demorei umas 8 vezes mais pra fazer o CSS (com os temas light e dark) e pra
    migrar os posts do meu antigo site pra cá do que efetivamente implementando
    o site. nunca tive uma barreira que me fez ficar pensando "nossa, fazer essa
    funcionalidade aqui é impossível". pelo contrário, todos os desafios que
    tive foram pouco complicados, e ter um compilador do lado me dizendo o que
    eu fiz de errado é maravilhoso.
  </p>

  <h3 id="acessibilidade">acessibilidade</h3>

  <p>
    quando falo de ter uma aplicação acessível, não tô falando só sobre UI,
    sobre ela ser facilmente legível para leitores de tela ou ser fácil de usar.
    acessibilidade também passa por sua app ser leve o suficiente para
    dispositivos lentos ou antigos, assim como possível de ser acessada offline
    (caso você já tenha visitado a página) e disponível para pessoas com
    javascript desabilitado.
  </p>

  <p>
    o fato do sapper vir com configurações para
    <a
      rel="noopener"
      target="_blank"
      href="https://web.dev/what-are-pwas/">PWA</a>
    prontas, com o mínimo de esforço para customização, e de a entrega ser em
    páginas HTML estáticas fez com que eu não tivesse que pensar ou implementar
    nada na mão (fora a paginação, que vou falar sobre mais tarde).
  </p>

  <h3 id="baseadoemjs">baseado em js</h3>

  <p>
    apesar do svelte ser uma linguagem feita em cima do HTML, ele se integra
    facilmente com a plataforma javascript - e, por consequência, o sapper
    também. isso torna possível integrações com inúmeras ferramentas, que ficam
    disponíveis de forma fácil através do npm.
  </p>

  <p>
    quer estudar D3? quer testar ORMs pra indexedDB? ou implementar aquele web
    component doideira? instala as dependências via npm, importa no componente e
    usa. só isso.
  </p>

  <h2 id="ascoisasnotoboas">as coisas não tão boas</h2>

  <h3 id="ferramentasnotomaduras">ferramentas não tão maduras</h3>

  <p>
    o sapper e o svelte (na versão 3, a atual) são mais novos em comparação com
    outras ferramentas parecidas. com isso, algumas coisas, como
    internacionalização e minificação de imagens, ainda não estão integradas no
    próprio framework.
  </p>

  <p>
    no entanto, ferramentas pra esses propósitos já existem no ecossistema do
    svelte. seria mais uma questão de investir tempo pra integrar.
    internacionalização, por exemplo, tem uma prioridade razoavelmente baixa pra
    mim; mas a minificação de imagens já tá sendo feita, mesmo que através de
    <a
      href="https://github.com/lucianoratamero/lucianoratamero.github.io/blob/src/compressImages.js">um
      script meio bosta e sem testes</a>.
  </p>

  <h3 id="osappernovemcomcomponentesprapaginao">
    o sapper não vem com componentes pra paginação
  </h3>

  <p>
    enquanto seria fácil de fazer paginação via js, minha limitação
    (autoimposta, diga-se de passagem) de permitir acesso com js desabilitado me
    fez gastar um bocado de tempo entendendo como o sapper funciona um pouco
    mais a fundo, pra que as páginas se incrementassem automaticamente depois de
    eu adicionar um post.
  </p>

  <p>
    muito por conta disso que eu acabei fazendo
    <a
      rel="noopener"
      target="_blank"
      href="https://www.youtube.com/watch?v=9i0aDJ56TNU">um vídeo no youtube de
      como implementar essa paginação no sapper</a>
    (que aliás já tá meio defasado). no fim das contas, foram umas 5 horas
    investidas nisso, o que acho um tempo bem razoável pra uma funcionalidade
    desse tamanho.
  </p>

  <h3 id="osappertcomosdiascontados">o sapper tá com os dias contados</h3>

  <p>
    pro bem e pro mal, o sapper entrou em modo de manutenção faz uns dois meses.
    sim, é um projeto novo que vai parar de receber funcionalidades novas.
  </p>

  <p>
    o motivo disso é que a galera do time do svelte vai tornar o próprio svelte
    capaz de fazer as coisas que o sapper hoje faz, o que é uma ótima notícia.
    também prometeram um caminho de migração razoavelmente facilitado pra quem
    tem aplicações sapper, então não vi muito motivo pra adiar meu site novo.
  </p>

  <p>quando o svelte kit chegar, faço outro post com as minhas impressões :]</p>

  <hr />

  <p>
    enfim, essas foram minhas notas sobre refazer tudo com svelte/sapper. o
    código fonte tá
    <a
      href="https://github.com/lucianoratamero/lucianoratamero.github.io/tree/src"
      rel="noopener"
      target="_blank">lá no github</a>, razoavelmente documentado. tem alguma
    dúvida ou curiosidade? fala comigo no
    <a
      rel="noopener"
      target="_blank"
      href="https://twitter.com/lucianoratamero">twitter</a>. quer saber mais
    sobre svelte? entra no
    <a rel="noopener" target="_blank" href="https://t.me/sveltebrasil">grupo da
      svelte brasil no telegram</a>. valeu, e até a próxima o/
  </p>
</article>
