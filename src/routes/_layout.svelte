<script>
  import "./_layout/reset.css";
  import "./_layout/base.css";
  import "./_layout/dark.css";
  import "./_layout/light.css";
  import { tomorrowNightBright } from "svelte-highlight/styles";

  import Nav from "../components/Nav.svelte";
  import theme from "../stores/theme";
  import TransitionWrapper from "../components/TransitionWrapper.svelte";
  import { onMount } from "svelte";
  import { derived } from "svelte/store";
  import { stores } from "@sapper/app";
  import { fixHeightOnChrome } from "../utils";
  import { Circle2 } from "svelte-loading-spinners";
  import BradFrostBubbles from "../components/backgrounds/brad-frost-bubbles/BradFrostBubbles.svelte";

  const { preloading } = stores();
  const delayedPreloading = derived(preloading, (currentPreloading, set) => {
    setTimeout(() => set(currentPreloading), 250);
  });

  export let segment;
  let bradFrostThemeEnabled;

  let darkThemeEnabled = $theme === "dark";

  onMount(() => {
    fixHeightOnChrome();
    bradFrostThemeEnabled = Math.random() > 0.9;

    $theme =
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
  {@html tomorrowNightBright}
</svelte:head>

<section
  class="theme"
  class:dark-theme={$theme === 'dark'}
  class:light-theme={$theme === 'light'}>
  <section
    class="loading-overlay"
    class:loading-overlay--show={$preloading && $delayedPreloading}>
    <Circle2 />
  </section>

  {#if bradFrostThemeEnabled}
    <BradFrostBubbles />
  {/if}

  <TransitionWrapper disableTransition={bradFrostThemeEnabled}>
    <main class:brad-frost={bradFrostThemeEnabled}>
      <slot />
    </main>
  </TransitionWrapper>

  <Nav {segment} />
</section>

<style>
  .loading-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    height: 100%;
    width: 100%;
    background: var(--loading-overlay-color);
    z-index: 1;
    left: -9999px;
    top: 0;
    opacity: 0;
    transition: opacity 0.8s;
  }

  .loading-overlay--show {
    left: 0;
    opacity: 1;
  }
</style>
