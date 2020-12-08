<script lang="ts">
  import { fade } from "svelte/transition";
  import { stores } from "@sapper/app";
  const { page } = stores();
</script>

{#key $page}
  <section class="transition-wrapper" in:fade>
    <slot />
  </section>
{/key}
