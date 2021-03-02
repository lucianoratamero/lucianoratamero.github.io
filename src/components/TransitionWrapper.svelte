<script lang="ts">
  import { fade } from "svelte/transition";
  import { stores } from "@sapper/app";
  export let disableTransition;
  const { page } = stores();
</script>

{#if disableTransition}
  <section class="transition-wrapper">
    <slot />
  </section>
{:else}
  {#key $page}
    <section class="transition-wrapper" in:fade>
      <slot />
    </section>
  {/key}
{/if}
