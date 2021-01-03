<script>
  import streamlabsobslinux from "../../../img/usando-streamlabs-com-obs-no-linux/streamlabs-obs-linux.png";
  import widgetboxurl from "../../../img/usando-streamlabs-com-obs-no-linux/widget-box-url.png";
  import obslinuxbrowser from "../../../img/usando-streamlabs-com-obs-no-linux/obs-linuxbrowser.png";
  import addinput from "../../../img/usando-streamlabs-com-obs-no-linux/add-input.png";
  import configlinuxbrowser from "../../../img/usando-streamlabs-com-obs-no-linux/config-linux-browser.png";
  import testalert from "../../../img/usando-streamlabs-com-obs-no-linux/test-alert.png";
</script>

<svelte:head>
  <title>usando streamlabs com OBS no linux - luciano@ratamero.com</title>
  <meta
    name="description"
    content="nesse post, mostro como usar o Streamlabs com alertas de follow, sub e bits, dentro do OBS em uma distro Linux. chega mais :]" />
  <meta
    name="keywords"
    content="Luciano Ratamero, streamlabs,obs,linux,alertas" />
</svelte:head>

<h1><mark>usando streamlabs com OBS no linux</mark></h1>

<p class="meta">2019-01-04</p>
<a href={streamlabsobslinux}>
  <figure>
    <img src={streamlabsobslinux} alt="Logo do Streamlabs, do Linux e do OBS" />
  </figure>
</a>

<p>
  <strong>edit: as versões de grande parte das distros, além da snap, já vêm com
    suporte a Linux Browser, então verifique antes de ler o post!</strong>
</p>

<p>
  ultimamente eu ando assistindo a muitos canais no twitch durante meu tempo
  livre. mesmo que tenha algo pra fazer ou só esteja cansado demais pra pensar,
  acabo sempre deixando uma aba aberta; mas é sempre com algo relacionado a
  algum jogo eletrônico. pensando nisso, tenho tido bastante vontade de começar
  a fazer streams de desenvolvimento de código.
</p>
<p>
  mas se é pra fazer streams, é importante se manter em contato com quem tá ali
  contigo, te assistindo ou seguindo, e se faz necessário o uso de alertas
  visuais e sonoros pra certas interações do usuário, como novos assinantes ou
  doadores. pra suprir essa demanda, o pessoal da
  <a href="https://streamlabs.com">streamlabs</a>
  oferece
  <a href="https://github.com/stream-labs/streamlabs-obs/">sua versão open
    source</a>
  do Open Broadcaster Studio, o famoso
  <a href="https://obsproject.com/">OBS</a>, com suas alterações, facilitando a
  vida de quem faz transmissões ao-vivo.
</p>
<p>só tem um problema: <strong>não funciona no linux</strong>.</p>
<h3>sempre há um jeitinho</h3>
<p>
  pra esses casos, o streamlabs oferece uma url pra uma página que exibe esses
  alertas - o que chamam de
  <strong>Alert Box</strong>. pra você achar o endereço do seu, faça login no
  streamlabs, clique em
  <strong>Widgets</strong>, depois em
  <strong>Alert Box</strong>. nessa página, você terá a opção de copiar a url da
  página de alertas.
</p>
<a href={widgetboxurl}>
  <figure>
    <img
      src={widgetboxurl}
      alt="Lugar do site onde achamos a URL da página de alertas" />
  </figure>
</a>
<p>
  com isso em mãos, tudo que a gente precisa fazer é abrir uma página web dentro
  do OBS como uma fonte de vídeo. é aí que entra o pulo do gato.
</p>
<h3>obs-linuxbrowser</h3>
<a href={obslinuxbrowser}>
  <figure><img src={obslinuxbrowser} alt="obslinuxbrowser no Github" /></figure>
</a>
<p>
  o usuário
  <a href="https://github.com/bazukas/">bazukas</a>
  publicou no github esse plugin lindo que faz todo o trabalho, o
  <a href="https://github.com/bazukas/obs-linuxbrowser/">obs-linuxbrowser</a>. o
  plugin usa o chromium por baixo dos panos pra conseguir usar uma página web
  como input de vídeo no OBS - e esse sim funciona no linux!
</p>
<p>
  supondo que você já tenha o OBS instalado, pra usar o plugin, é só baixar a
  versão mais nova da
  <a href="https://github.com/bazukas/obs-linuxbrowser/releases">página de
    releases</a>
  e descompactar ela pra pasta de plugins do OBS. essa pasta geralmente fica em
  <code>~/.config/obs-studio/plugins</code>.
</p>
<p>resumindo:</p>
<ul>
  <li>baixe o plugin</li>
  <li><code>mkdir -p ~/.config/obs-studio/plugins/</code></li>
  <li>
    <code>tar -zxvf linuxbrowser0.5.2-obs21.1.2-64bit.tgz -C
      ~/.config/obs-studio/plugins/</code>
  </li>
</ul>
<p>
  com isso, uma nova opção de fonte irá aparecer no menu de fontes do OBS,
  chamada
  <strong>Linux Browser</strong>.
</p>
<figure>
  <a href={addinput}>
    <img src={addinput} alt="Onde clicar para adicionar o Input" />
  </a>
</figure>
<p>
  basta adicionar clicando no +, selecionar
  <strong>Linux Browser</strong>
  e colocar como url a sua url de
  <strong>Alert Box</strong>.
</p>
<figure>
  <a href={configlinuxbrowser}>
    <img src={configlinuxbrowser} alt="Tela de config do Linux Browser" />
  </a>
</figure>
<p>
  vale a pena também testar e ver se ela aparece no OBS; comigo funcionou de
  primeira!
</p>
<figure>
  <a href={testalert}> <img src={testalert} alt="Teste dos alertas" /> </a>
</figure>
<p>
  por hoje é só! se tiverem dicas ou sugestões pra melhorar esse texto, só me
  cutucar nos comentários. abraços!
</p>
