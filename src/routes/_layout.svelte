<script lang="ts">
  import "./_layout/reset.css";
  import "./_layout/base.css";
  import "./_layout/dark.css";
  import "./_layout/light.css";
  import { vs2015 } from "svelte-highlight/styles";

  import Nav from "../components/Nav.svelte";
  import theme from "../stores/theme";
  import TransitionWrapper from "../components/TransitionWrapper.svelte";

  export let segment: string;
</script>

<svelte:head>
  {@html vs2015}
  <title>luciano@ratamero.com</title>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400&display=swap"
    rel="stylesheet" />
  <link
    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
    rel="stylesheet" />
</svelte:head>

<section
  class="theme"
  class:dark-theme={$theme === 'dark'}
  class:light-theme={$theme === 'light'}>
  <TransitionWrapper>
    <main>
      <slot />
    </main>
  </TransitionWrapper>

  <Nav {segment} />
</section>
