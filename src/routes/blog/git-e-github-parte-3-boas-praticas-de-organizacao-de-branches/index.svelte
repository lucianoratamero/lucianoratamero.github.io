<script lang="ts">
  import covergit3 from "../../../img/cover-git-3.png";
  import master from "../../../img/master.jpg";
  import develop from "../../../img/develop.jpg";
  import release from "../../../img/release.jpg";
  import hotfix from "../../../img/hotfix.jpg";
  import feature from "../../../img/feature.jpg";
  import topic from "../../../img/topic.jpg";
  import PostMeta from "../../../components/PostMeta.svelte";
  import MetaTags from "../../../components/MetaTags.svelte";

  let el;
  $: text = el && el.textContent;
</script>

<svelte:head>
  <MetaTags
    title="git e github parte 3: boas práticas de organização de branches"
    description="Esse post explica os conceitos básicos de Git e como ele interaje com o Github; tudo isso da forma mais didática possível :]"
    keywords="git, github, boas práticas, organização de branches, parte 3" />
</svelte:head>

<h1>
  <mark>git e github parte 3: boas práticas de organização de branches</mark>
</h1>

<PostMeta date="2016-02-19" {text} />

<article bind:this={el}>
  <a href={covergit3}>
    <figure>
      <img src={covergit3} alt="Ilustração com logo do git e do github" />
    </figure>
  </a>
  <p>
    chegamos à parte 3 dos posts sobre git e github! nos
    <a
      href="https://www.ratamero.com/blog/git-e-github-parte-1-o-que-sao-e-como-usar/">outros</a>
    <a
      href="https://www.ratamero.com/blog/git-e-github-parte-2-conceitos-basicos-para-trabalhar-com-git/">dois</a>,
    falei sobre o que são o git e o github e slguns conceitos básicos pra
    começar a usar o git. hoje, vou falar mais sobre algumas boas práticas pra
    organização de branches, baseado nas sugestões do
    <a href="https://github.com/nvie/gitflow">git flow</a>.
  </p>
  <hr />

  <h3>o que é o git flow?</h3>
  <p>
    o
    <strong>git flow</strong>
    é uma extensão do git que permite uma maior organização e agilidade na hora
    de lidar com o git. ele segue uma série de convenções que caracterizam
    alguns tipos de branches com responsabilidades diferentes, próprias pra cada
    etapa do processo de desenvolvimento. vou detalhar melhor o papel de cada um
    dos tipos de branch.
  </p>
  <div class="alert alert-info text-center">
    <p><strong>lembre-se:</strong></p>
    <p>
      essas são apenas
      <strong>sugestões</strong>
      minhas e das próprias convenções do git flow.
    </p>
    <p>
      o uso dessas sugestões muda de projeto a projeto, apesar dessas sugestões
      funcionarem em grande parte dos casos.
    </p>
  </div>
  <h3>branch <code>master/main</code></h3>
  <a href={master}>
    <figure>
      <img
        src={master}
        alt="Ilustração de uma branch principal, chamada master ou main" />
    </figure>
  </a>
  <p>
    o branch
    <code>master</code>
    (ou, preferivelmente,
    <code>main</code>) é o branch no qual está o código que está em
    <strong>produção</strong>, ou seja, que está sendo
    <strong>diretamente usado pelos clientes</strong>. ele é caracterizado por
    sua grande quantidade de
    <strong>tags</strong>, que refletem cada versão do projeto que foi pra uso
    corrente. nele, não se deve ter commits soltos; devemos apenas adicionar
    commits nele através de merges de branches de
    <code>release</code>
    e de
    <code>hotfix</code>.
  </p>
  <h3>branch <code>develop</code></h3>
  <a href={develop}>
    <figure>
      <img
        src={develop}
        alt="Ilustração de uma branch paralela à principal, chamada develop" />
    </figure>
  </a>
  <p>
    o branch
    <code>develop</code>
    é o que contém o código previsto para a próxima
    <code>release</code>, ou seja, o próximo código que irá pro ar. nele, também
    não devemos commitar diretamente, deixando que seu código seja fornecido
    pelos branches de
    <code>feature</code>
    e
    <code>hotfix</code>, mas essa regra é um pouco mais flexível que a do
    <code>master</code>. uma boa prática é sempre deixá-lo estável, pronto para
    ir para o ar a qualquer momento, para evitar que uma funcionalidade não vá
    pro ar por causa de instabilidade de outras.
  </p>
  <h3>branches de <code>release</code></h3>
  <a href={develop}>
    <figure>
      <img
        src={release}
        alt="Ilustração de uma branch saindo de develop e dando merge na principal" />
    </figure>
  </a>
  <p>
    os branches de
    <code>release</code>
    são aqueles que resumem o que uma nova versão do seu projeto terá. ele tem a
    responsabilidade de sair do
    <code>develop</code>, se mergear no
    <code>master</code>
    e no
    <code>develop</code>
    e, ao mergear no
    <code>master</code>, criar uma
    <code>tag</code>
    com o número da nova versão. geralmente, recebem o nome
    <code>release/[numero-da-versao]</code>. na minha experiência, acho uma má
    ideia commitar em branches de
    <code>release</code>, pelo simples motivo que, assim, temos certeza de que
    todo o código veio dos
    <code>hotfixes</code>
    e das
    <code>features</code>. dessa forma, os branches de
    <code>release</code>
    servem
    <strong>apenas como um ritual</strong>
    para que você tenha
    <strong>certeza</strong>
    do que está colocando no ar e qual é a versão desejada. é uma burocracia que
    já salvou minha vida algumas vezes. ;)
  </p>
  <h3>branches de <code>hotfix</code></h3>
  <a href={hotfix}>
    <figure>
      <img
        src={hotfix}
        alt="Ilustração de uma branch saindo da principal e dando merge na principal e na develop" />
    </figure>
  </a>
  <p>
    os branches de
    <code>hotfix</code>
    são os que são abertos na hora que algo em produção dá problema. são
    branches criados a partir do
    <code>master</code>
    e que se mergeiam novamente no
    <code>master</code>
    e no
    <code>develop</code>, já que precisamos das correções também no código que
    está sendo desenvolvido. geralmente, recebem o nome
    <code>hotfix/[numero-da-versao]</code>. eles também recebem suas próprias
    <code>tags</code>, que servem para dizer que, nesta versão, o problema x foi
    corrigido.
  </p>
  <h3>branches de <code>feature</code></h3>
  <a href={feature}>
    <figure>
      <img
        src={feature}
        alt="Ilustração de uma branch saindo da develop e dando merge na develop" />
    </figure>
  </a>
  <p>
    os branches de
    <code>feature</code>
    servem para, bem, features, né. eles partem do
    <code>develop</code>
    e mergeiam também no
    <code>develop</code>. geralmente, recebem o nome
    <code>feature/[descricao-da-funcionalidade]</code>. neles, commitamos o que
    é necessário para novas funcionalidades ficarem prontas, apesar de que eu,
    novamente, não recomendo que sejam feitos commits diretamente nele. o motivo
    disso é que, ao meu ver, features têm a tendência de terem muitos commits, o
    que deixaria difícil a revisão do código em um
    <em>pull request</em>. recomendo que, a partir dos branches de
    <code>feature</code>, sejam criados branches de
    <code>topic</code>, que terão o conteúdo de uma parte da funcionalidade, em
    um tamanho que permita a fácil revisão do código por outras pessoas.
  </p>
  <h3>branches de <code>topic</code></h3>
  <a href={topic}>
    <figure>
      <img
        src={topic}
        alt="Ilustração de uma branch saindo de uma feature e mergeando na mesma" />
    </figure>
  </a>
  <p>
    os branches de
    <code>topic</code>
    são os coringas. geralmente, recebem o nome
    <code>topic/[nome-do-topico-abordado]</code>. são usados em qualquer lugar
    em que seja legal ter mais de um tópico, para facilitar a revisão de código.
    na real, uso os branches de
    <code>topic</code>
    saindo dos de
    <code>feature</code>
    e mergeando nos mesmos, ou partindo de um branch de
    <code>hotfix</code>
    e mergeando nos mesmos. são os menores branches, feitos para serem lidos e
    revisados rapidamente.
  </p>
  <h3>e o que o git flow tem a ver com isso tudo?</h3>
  <p>
    o git flow, como eu disse, é uma extensão do git. ele cria comandos que
    servem de atalhos para os processos descritos acima. ele tem comandos para
    abrir e fechar
    <code>releases</code>,
    <code>features</code>
    e
    <code>hotfixes</code>, e é facilmente configurável. se essa organização de
    branches te interessou, acho que vale a pena dar uma olhada no
    <a href="https://github.com/nvie/gitflow">repositório deles</a>
    e ler o
    <a href="https://nvie.com/posts/a-successful-git-branching-model/">post
      sobre o workflow deles</a>. nesse post, eles detalham melhor o que é
    realmente necessário ser feito pra realizar essa proposta de organização.
  </p>
  <p>
    como sempre, qualquer dúvida ou sugestão, é só falar nos comentários. espero
    que tenham gostado dessa série de posts e que tenha sido útil :D
  </p>
  <p>eu fico por aqui, até a próxima! o/</p>
</article>
