<script lang="ts">
  import cowsay from "../../../img/cowsay (cópia).gif";
  import gotodefinition from "../../../img/go-to-definition (cópia).gif";
  import workoncdvirtualenv from "../../../img/workon-cdvirtualenv (cópia).gif";
  import runapistar from "../../../img/run-apistar (cópia).gif";
  import PostMeta from "../../../components/PostMeta.svelte";
  import MetaTags from "../../../components/MetaTags.svelte";

  let el;
  $: text = el && el.textContent;
</script>

<svelte:head>
  <MetaTags
    title="#halp - virtualenv and virtualenvwrapper"
    description="Here are some basic tips on how I use virtualenv and virtualenvwrapper to facilitate my life as a python dev :]"
    keywords="#halp, virtualenv, virtualenvwrapper, help" />
</svelte:head>

<h1><mark>#halp - virtualenv and virtualenvwrapper</mark></h1>

<PostMeta date="2017-12-28" {text} />

<article bind:this={el}>
  <p>
    since I am known for (over)customizing my work pc with scripts, aliases and
    whatnot, there's always someone asking me for tips on how I use virtualenv
    and virtualenvwrapper. so here we go: get ready for a hack or two that make
    my life as a python developer waaay easier! ;)
  </p>
  <h3>what is virtualenvwrapper?</h3>
  <p>
    for those who don't know,
    <a
      href="https://virtualenvwrapper.readthedocs.io/en/latest/">virtualenvwrapper</a>
    is a
    <strong>bundle of virtualenv extensions</strong>. it provides a series of
    useful commands/scripts for dealing with virtualenvs, some of which I use
    daily.
  </p>
  <p>
    before we start, here's how virtualenvwrapper works: it separates our
    project directories from the virtualenv specific folders, like
    <code>bin</code>,
    <code>lib</code>,
    <code>include</code>
    and others, while giving us many goodies. it creates the env folders for
    each environment inside the
    <code>WORKON_HOME</code>
    dir. it's great for people who don't want to put these folders inside the
    project directory; it means that, for example, you don't need to put them
    all into gitignore.
  </p>
  <p>
    I, on the other hand, prefer
    <strong>not</strong>
    to separate the env from the project for two main reasons:
  </p>
  <ul>
    <li>
      my memory is so bad that I prefer not to have to remember where the env
      folders are;
    </li>
    <li>
      and, the best part, it makes it easier for my text editor to reach these
      library files.
    </li>
  </ul>
  <p>
    with that, my text editor is able to suggest module/class/function names
    from my libs and "Go To Definition" works properly. "Go To Definition" is a
    feature from modern text editors (such as Sublime and Atom) that opens the
    source code for any imported module/class/function directly from your code
    (and that saves me
    <strong>so much work</strong>).
  </p>
  <figure>
    <a href={gotodefinition}>
      <img
        src={gotodefinition}
        alt="Video showing Go To Definition in action" />
    </a>
  </figure>
  <p>
    so, for explanation's sake, we'll suppose everything is bundled together
    inside your project folder. cool? cool.
  </p>
  <h3>
    <code>workon</code>,
    <code>cdvirtualenv</code>
    and some other useful commands
  </h3>
  <p>
    virtualenvwrapper has a bunch of useful commands for our day-to-day life as
    python developers, so these are some I use all the time:
  </p>
  <h4><code>workon</code></h4>
  <p>
    <code>workon</code>
    activates a given virtualenv from anywhere. when you run
    <code>workon PROJECTNAME</code>, you stay at the current folder, but with
    every aspect of the env active, like the python version, installed libs,
    environment variables and everything else. it serves as an entry point for
    some other hacks I'll tell you about and, yeah, yeah, it accepts
    <em>tab completion</em>.
  </p>
  <h4><code>cdvirtualenv</code></h4>
  <p>
    extremely useful if your env and project folders are the same.
    <code>cdvirtualenv</code>
    sends you directly to the root dir of your virtualenv (so you don't need to
    remember anything). for me, the bonus of going to both my project and env
    folders without having to
    <code>cd</code>
    to it is big enough. the combo of
    <code>workon</code>
    and
    <code>cdvirtualenv</code>
    is awesome!
  </p>
  <figure>
    <a href={workoncdvirtualenv}>
      <img
        src={workoncdvirtualenv}
        alt="Video showing cdvirtualenv changing dirs" />
    </a>
  </figure>
  <p />
  <h4><code>cpvirtualenv</code></h4>
  <p>
    it copies everything virtualenv related from one env to another. rarely
    used, but, oh, it comes in handy.
  </p>
  <h4><code>cdsitepackages</code></h4>
  <p>takes you to the installed libs directory. simple, beautiful.</p>
  <h3>
    the magic of
    <code>postactivate</code>
    and
    <code>postdeactivate</code>
    scripts
  </h3>
  <p>
    so, yeah, here's the meat of the post: virtualenvwrapper executes hooks -
    simple bash scripts - for every step of activating/deactivating a
    virtualenv. you only need to create a
    <code>postactivate</code>
    and/or a
    <code>postdeactivate</code>
    file inside the
    <code>bin</code>
    folder of your env and they'll be executed when activating/deactivating the
    env.
  </p>
  <p>this gives you two big features:</p>
  <ul>
    <li>you can export/overwrite environment variables on activation;</li>
    <li>you can execute automating scripts.</li>
  </ul>
  <p>
    the first feature is self explanatory, but the second one is
    <strong>so beautiful</strong>. for example, you may run
    <code>cdvirtualenv</code>
    when activating your env, so you're taken to the project folder immediately.
    or even better: you may
    <strong>start project dependencies/fire up docker containers, or whatever
      you want</strong>. you can even make a cow tell you your evnironment
    directory.
  </p>
  <figure>
    <a href={cowsay}>
      <img alt="Video showing postactivate triggering cowsay" src={cowsay} />
    </a>
    <a href={runapistar}>
      <img
        alt="Video showing postactivate starting a python app"
        src={runapistar} />
    </a>
  </figure>
  <p>
    another interesting point is that virtualenvwrapper creates global hooks on
    your
    <code>WORKON_HOME</code>
    folder. if you edit them, whenever you activate/deactivate an env, they'll
    be executed as well. pretty cool.
  </p>
  <hr />

  <p>
    well, these are some of my tips on how I automate some dull processes using
    virtualenv and virtualenvwrapper. I hope it's been useful, and if you have
    any similar hacks for python environments, tell us in the comments! see you
    next time o/
  </p>
</article>
