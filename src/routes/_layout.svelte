<script>
  import "./_layout/reset.css";
  import "./_layout/base.css";
  import "./_layout/dark.css";
  import "./_layout/light.css";
  import { vs2015 } from "svelte-highlight/styles";

  import Nav from "../components/Nav.svelte";
  import theme from "../stores/theme";
  import TransitionWrapper from "../components/TransitionWrapper.svelte";
  import { onMount } from "svelte";
  import { fixHeightOnChrome } from "../utils";

  export let segment;

  let darkThemeEnabled = $theme === "dark";

  onMount(() => {
    fixHeightOnChrome();

    $theme =
      window &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  });

  $: {
    if (darkThemeEnabled) $theme = "dark";
    else $theme = "light";
  }
</script>

<svelte:head>
  {@html vs2015}
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400&display=auto"
    rel="stylesheet" />
  <link
    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=auto"
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
