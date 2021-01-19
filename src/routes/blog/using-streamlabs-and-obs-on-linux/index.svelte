<script>
  import streamlabsobslinux from "../../../img/usando-streamlabs-com-obs-no-linux/streamlabs-obs-linux.png";
  import widgetboxurl from "../../../img/usando-streamlabs-com-obs-no-linux/widget-box-url.png";
  import obslinuxbrowser from "../../../img/usando-streamlabs-com-obs-no-linux/obs-linuxbrowser.png";
  import addinput from "../../../img/usando-streamlabs-com-obs-no-linux/add-input.png";
  import configlinuxbrowser from "../../../img/usando-streamlabs-com-obs-no-linux/config-linux-browser.png";
  import testalert from "../../../img/usando-streamlabs-com-obs-no-linux/test-alert.png";
  import PostMeta from "../../../components/PostMeta.svelte";
  import MetaTags from "../../../components/MetaTags.svelte";

  let el;
  $: text = el && el.textContent;
</script>

<svelte:head>
  <MetaTags
    title="using streamlabs and OBS on linux"
    description="in this post, I'll show you how to use Streamlabs with alerts for follows, subs and bits, using OBS on Linux :]"
    keywords="streamlabs,obs,linux,alerts" />
</svelte:head>

<h1><mark>using streamlabs and OBS on linux</mark></h1>

<PostMeta date="2019-01-03" {text} />

<article bind:this={el}>
  <a href={streamlabsobslinux}>
    <img src={streamlabsobslinux} alt="Logos from Streamlabs, Linux and OBS" />
  </a>

  <p>
    <strong>edit: most linux distros and alternative installations (like snap)
      currently already ship with Linux Browser enabled. be sure to check before
      following this guide!</strong>
  </p>

  <p>
    lately I've been watching a lot of streams on twitch. even if I'm doing
    something or just want to turn my brain off, I always leave a tab open; but
    the streams are always related to video games. with that in mind, I was
    thinking about streaming some coding sessions for a change.
  </p>
  <p>
    but if you're streaming, it's important to keep an eye on people chatting
    and watching, so it nice to have a couple of alerts for certain user
    interactions, like who followed you or subscribed to you, for example. for
    that, people from
    <a href="https://streamlabs.com">streamlabs</a>
    offer
    <a href="https://github.com/stream-labs/streamlabs-obs/">their open sourced
      version</a>
    of the famous Open Broadcaster Studio - aka
    <a href="https://obsproject.com/">OBS</a>
    - with their own tweaks, to make it easy to handle stream related alerts.
  </p>
  <p>the only catch: <strong>it doesn't work on linux</strong>.</p>
  <h3>there's always a way</h3>
  <p>
    for these cases, streamlabs offers an url to a private web page that shows
    these alerts: the
    <strong>Alert Box</strong>. if you want to find the url to yours, log into
    streamlabs, click on
    <strong>Widgets</strong>, then
    <strong>Alert Box</strong>
    and you'll have the option to copy the url to your Alert Box page.
  </p>
  <a href={widgetboxurl}>
    <img src={widgetboxurl} alt="Where to find the Alert Box URL" />
  </a>
  <p>
    with that, all we need is to have OBS treat this web page as a real input
    device. it's here that the magic happens.
  </p>
  <h3>obs-linuxbrowser</h3>
  <a href={obslinuxbrowser}>
    <img src={obslinuxbrowser} alt="obs-linuxbrowser on Github" />
  </a>
  <p>
    the user
    <a href="https://github.com/bazukas/">bazukas</a>
    has published this beautiful plugin that does all the grunt work for us:
    <a href="https://github.com/bazukas/obs-linuxbrowser/">obs-linuxbrowser</a>.
    this plugin uses chromium behind the scenes to render any web page as an OBS
    input - and yeah,
    <strong>it works on linux</strong>.
  </p>
  <p>
    with OBS installed, to use the pugin, you only need to download the latest
    version from their
    <a href="https://github.com/bazukas/obs-linuxbrowser/releases">releases page</a>
    and unpack it to your OBS' plugins directory. the default directory is
    <code>~/.config/obs-studio/plugins</code>.
  </p>
  <p>tldr:</p>
  <ul>
    <li>download the plugin</li>
    <li><code>mkdir -p ~/.config/obs-studio/plugins/</code></li>
    <li>
      <code>tar -zxvf linuxbrowser0.5.2-obs21.1.2-64bit.tgz -C
        ~/.config/obs-studio/plugins/</code>
    </li>
  </ul>
  <p>
    with that done, a new source type will appear in the add sources menu on
    OBS, called
    <strong>Linux Browser</strong>.
  </p>
  <a href={addinput}>
    <img src={addinput} alt="How to add an input on OBS" />
  </a>
  <p>
    you just need to add it by clicking on +, then
    <strong>Linux Browser</strong>
    and put your
    <strong>Alert Box</strong>
    url in the URL field.
  </p>
  <a href={configlinuxbrowser}>
    <img src={configlinuxbrowser} alt="Config Linux Browser screen" />
  </a>
  <p>
    you could test if the alerts are appearing on OBS by going to streamlabs and
    clicking the test buttons!
  </p>
  <a href={testalert}> <img src={testalert} alt="Sample of a test alert" /> </a>
  <p>
    that's it for today! if you have any tips or suggestions on how to improve
    this post, just ping me in the comments section. see you!
  </p>
</article>
