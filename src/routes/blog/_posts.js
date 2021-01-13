// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
    title: "sapper: notas sobre o meu site novo",
    slug: "sapper-notas-sobre-o-meu-site-novo",
    date: "2021-01-12",
    html: `
    <p>
      faz pouco mais de seis meses que eu comecei a estudar e me envolver com
      <a rel="noopener" target="_blank" href="https://svelte.dev">svelte</a>. desde
      então, me encanta o quão pouco esforço e tempo é necessário pra fazer
      basicamente o que quiser no front. mas o projeto que me ganhou mesmo foi o
      <a rel="noopener" target="_blank" href="https://sapper.svelte.dev">sapper</a>.
      ele traz todos (<strong>TODOS</strong>) os benefícios de frameworks como o
      nextjs e o gatsby, mas com muito menos complicação.
    </p>

    <p>
      como de lei, tomei a descoberta do sapper como oportunidade de rescrever meu
      site e tirar da gaveta o plano de ter algum lugar online pra prototipar novos
      estudos de front. aqui ficam minhas anotações de soluções e problemas de ter
      usado o sapper pra um site novo!
    </p>
    `,
  },
  {
    title: "Python para desenvolvedores JavaScript",
    slug: "python-para-desenvolvedores-javascript",
    date: "2017-06-08",
    html: `
    <p>
      logo depois de ter lido
      <a
        href="https://dev.to/underdogio/python-for-javascript-developers"
        target="_blank" rel="noopener">esse post</a>, eu percebi que as poucas dificuldades que
      tive durante minha adaptação de javascript pra python (há anos) nunca foram
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
    `,
  },
  {
    title: "#ajudaLuciano - como escrever um post de blog",
    slug: "ajudaluciano-como-escrever-um-post-de-blog",
    date: "2019-07-03",
    html: `
      <p><strong>Escrever texto é muito difícil.</strong> Pra nós programadores, as coisas muitas vezes fazem total sentido
        dentro da nossa cabeça de uma maneira intuitiva. Mesmo assim, <strong>colocar as ideias no papel</strong> parece ser
        uma <strong>tarefa monumental</strong>. Eu, no entanto, nunca tive muito problema: sou formado em jornalismo
        (<strong>muahaha &gt;:D</strong>). Vim aqui compartilhar com vocês algumas das coisas que me ajudam a escrever um post
        ou formatar uma palestra. Vamos lá!</p>
    `,
  },
  {
    title: "#ajudaLuciano - distros linux da vez (23/02/2016)",
    slug: "ajudaluciano-distros-linux-da-vez-23022016",
    date: "2016-02-23",
    html: `
      <p>gostei demais do feedback sobre o post de ontem, pessoal! por isso, e pelo fato dos meus amigos encherem o saco pra
        ter algo chamado #ajudaLuciano no blog, trago pra vocês o primeiro post do #ajudaLuciano.</p>
      <p>pretendo que essa série de posts seja de assuntos que vocês tragam pra mim, pra que eu dê minha opinião ou faça um
        tutorial de alguma coisa.</p>
      <p>sem mais delongas, vou falar dessa vez sobre as distros linux da vez. vamos lá o/</p>
    `,
  },
  {
    title: "#ajudaLuciano - virtualenv e virtualenvwrapper: como eu uso",
    slug: "ajudaluciano-virtualenv-e-virtualenvwrapper-como-eu-uso",
    date: "2017-12-28",
    html: `
      <p>
        como eu sou (pessimamente) conhecido por customizar (demais) meu computador de
        trabalho com scripts, aliases e o que for, faz um tempo que o pessoal tem me
        cobrado um post sobre como eu uso virtualenv e virtualenvwrapper. aqui vão
        algumas dicas de como eu uso ambos pra facilitar minha vida como
        desenvolvedor, principalmente nesse mundo de python 2/3, angular, react,
        docker, neo4j e afins. ;)
      </p>
    `,
  },
  {
    title: "Desacoplando a lógica de componentes React",
    slug: "desacoplando-a-logica-de-componentes-react",
    date: "2019-07-23",
    html: `
    <p>Sempre que há um novo projeto baseado em React, grande parte dos devs frontend irão passar pelo ritual de
    configuração inicial. Padrões de implementação de estilos, desacoplamento de componentes e estrutura de diretórios
    irão emergir - <strong>nem sempre pro bem</strong>
      </p>
    `,
  },
  {
    title: "git e github parte 1: o que são e como usar?",
    slug: "git-e-github-parte-1-o-que-sao-e-como-usar",
    date: "2016-02-14",
    html: `
    <p>hoje eu tava conversando com uns amigos sobre git e github e percebemos um problema: não temos atualmente um lugar com conteúdo sobre os dois em português, principalmente para leigos ou iniciantes. depois de pegar com o pessoal uns pontos importantes, decidi fazer alguns posts sobre o assunto, para servir de referência. aí vamos nós o/</p>
    `,
  },
  {
    title: "git e github parte 2: conceitos básicos para trabalhar com git",
    slug: "git-e-github-parte-2-conceitos-basicos-para-trabalhar-com-git",
    date: "2016-02-18",
    html: `
    <p>
      eis que voltamos para a parte 2 dos posts sobre git e github! dessa vez, vou
      discutir alguns conceitos básicos necessários para quem quer trabalhar com
      git. se ainda não leu o primeiro post,
      <a
        href="http://www.ratamero.com/blog/git-e-github-parte-1-o-que-sao-e-como-usar/">façam
        o favor</a>, porque não vou explicar de novo (#ranzinza). então vamos lá!
    </p>
    `,
  },
  {
    title: "git e github parte 3: boas práticas de organização de branches",
    slug: "git-e-github-parte-3-boas-praticas-de-organizacao-de-branches",
    date: "2016-02-19",
    html: `
    <p>
      chegamos à parte 3 dos posts sobre git e github! nos
      <a
        href="http://www.ratamero.com/blog/git-e-github-parte-1-o-que-sao-e-como-usar/">outros</a>
      <a
        href="http://www.ratamero.com/blog/git-e-github-parte-2-conceitos-basicos-para-trabalhar-com-git/">dois</a>,
      falei sobre o que são o git e o github e slguns conceitos básicos pra começar
      a usar o git. hoje, vou falar mais sobre algumas boas práticas pra organização
      de branches, baseado nas sugestões do
      <a href="https://github.com/nvie/gitflow">git flow</a>.
    </p>
    `,
  },
  {
    title: "#halp - virtualenv and virtualenvwrapper",
    slug: "halp-virtualenv-and-virtualenvwrapper",
    date: "2017-12-28",
    html: `
    <p>
      since I am known for (over)customizing my work pc with scripts, aliases and
      whatnot, there's always someone asking me for tips on how I use virtualenv and
      virtualenvwrapper. so here we go: get ready for a hack or two that make my
      life as a python developer waaay easier! ;)
    </p>
    `,
  },
  {
    title: "Lektor: gerador de sites estáticos escrito em Python",
    slug: "lektor-gerador-de-sites-estaticos-escrito-em-python",
    date: "2016-02-02",
    html: `
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
    `,
  },
  {
    title: "Lektor parte 2: deploy, macros, admin e plugins",
    slug: "lektor-parte-2-deploy-macros-admin-e-plugins",
    date: "2016-02-03",
    html: `
    <p>
      agora que já expliquei o básico de como utilizar o Lektor pra desenvolver seu
      site estático, vou começar a explicar alguns aspectos mais avançados. não
      pretendo ser muito detalhista, mas fiquem a vontade para pedir mais
      informações nos comentários. aí vai!
    </p>
    `,
  },
  {
    title: "Linux para leigos: por que usar linux?",
    slug: "linux-para-leigos-por-que-usar-linux",
    date: "2016-06-21",
    html: `
    <p>
      agora que já expliquei o básico de como utilizar o Lektor pra desenvolver seu
      site estático, vou começar a explicar alguns aspectos mais avançados. não
      pretendo ser muito detalhista, mas fiquem a vontade para pedir mais
      informações nos comentários. aí vai!
    </p>
    `,
  },
  {
    title: "Mantendo o estado global de uma maneira sã com rel-events",
    slug: "mantendo-o-estado-global-de-uma-maneira-sa-com-rel-events",
    date: "2019-09-19",
    html: `
    <p>
      Manter uma aplicação react grande e complexa não é um trabalho pra amadores.
      Não importa o que você escolher para lidar com a máquina de estados da
      aplicação, é quase certo de que é algo difícil de aprender, como redux, ou
      realmente complicado, como fazer uma camada de serviços na mão. Com o objetivo
      de fazer com que novas pessoas possam entrar fácil nos projetos, a galera da
      Labcodes decidiu que tava na hora de dar mais atenção e uma verdadeira solução
      pra esse tipo de problema. Nossa resposta foi criar a biblioteca
      <a href="https://github.com/labcodes/rel-events">rel-events</a>.
    </p>
    `,
  },
  {
    title: "O estado atual do desenvolvimento frontend",
    slug: "o-estado-atual-do-desenvolvimento-frontend",
    date: "2016-10-27",
    html: `
    <p>
      <small><em>ou
          <strong>parem de usar javascript pra tudo, caceta</strong>.</em></small><br />a
      web definitivamente mudou desde quando eu era criança. tudo era bem mais
      engessado, muito por conta da imaturidade, da falta de ferramentas e de
      processamento. sou, como a grande maioria que ainda faz a web, de uma época
      anterior ao google, anterior ao git. uma época de frames, gifs brilhantes,
      comic sans EVERYWHERE. a época do flash. e digo que não sinto a
      <strong>menor</strong>
      falta de grande parte disso. mas sinto que tá na hora de a gente ter uma
      conversinha sobre o estado atual do desenvolvimento frontend.
    </p>
    `,
  },
  {
    title:
      "porque eu trabalho remotamente — mas não culpo quem não contrata gente como eu",
    slug:
      "porque-eu-trabalho-remotamente-mas-nao-culpo-quem-nao-contrata-gente-como-eu",
    date: "2017-01-24",
    html: `
    <p>
      eu trabalho remoto. eu amo. é a vida que sempre quis: poucas horas, a hora que
      quiser, em uma empresa que me valoriza. demorei seis anos pra chegar aqui e me
      parece um caminho sem volta. no entanto, toda vez que vejo um post
      exaltando — não, mais do que isso,
      <strong>exigindo </strong>— que as empresas contratem funcionários remotos,
      sempre tenho vontade de escrever textão; eis que estou aqui, pra falar um
      bocado sobre minha experiência e seus prós e contras, pra ver se o povo para
      com esse mimimi. vambora.
    </p>
    `,
  },
  {
    title: "usando streamlabs com OBS no linux",
    slug: "usando-streamlabs-com-obs-no-linux",
    date: "2019-01-04",
    html: `
    <p>
      ultimamente eu ando assistindo a muitos canais no twitch durante meu tempo
      livre. mesmo que tenha algo pra fazer ou só esteja cansado demais pra pensar,
      acabo sempre deixando uma aba aberta; mas é sempre com algo relacionado a
      algum jogo eletrônico. pensando nisso, tenho tido bastante vontade de começar
      a fazer streams de desenvolvimento de código.
    </p>
    `,
  },
  {
    title: "using streamlabs and obs on linux",
    slug: "using-streamlabs-and-obs-on-linux",
    date: "2019-01-03",
    html: `
    <p>
      lately I've been watching a lot of streams on twitch. even if I'm doing
      something or just want to turn my brain off, I always leave a tab open; but
      the streams are always related to video games. with that in mind, I was
      thinking about streaming some coding sessions for a change.
    </p>
    `,
  },
];

posts.forEach((post) => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

const PAGE_SIZE = 5;

export const orderPostsByDate = (posts) =>
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

export function paginate(posts) {
  let paginatedPosts = {};

  posts.map((post, i) => {
    let pageIndex = Math.floor(i / PAGE_SIZE);

    if (!paginatedPosts[pageIndex]) {
      paginatedPosts[pageIndex] = [];
    }

    paginatedPosts[pageIndex].push(post);
  });

  return paginatedPosts;
}

const orderedPosts = orderPostsByDate(posts);

export const paginatedPosts = paginate(orderedPosts);
export const numberOfPages = Object.keys(paginatedPosts).length;
export const postsByPage = (index) => paginatedPosts[index];
export const pageRange = Array(numberOfPages)
  .fill()
  .map((_, idx) => idx + 1);

export default posts;
