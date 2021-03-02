<script>
  import { onMount } from "svelte";

  import range from "../../range";
  import Bubble from "./Bubble.svelte";

  let numberOfBubbles;

  onMount(() => {
    numberOfBubbles = Math.ceil(
      window.innerHeight > window.innerWidth
        ? window.innerHeight / 2
        : window.innerWidth / 2
    );
  });
</script>

<div class="brad-frost-bubbles">
  <!--
    Thanks Brad Frost for the inspiration :]
    Check him out at https://bradfrost.com/
  -->
  {#if numberOfBubbles}
    {#each range(numberOfBubbles) as _, i}
      <Bubble />
    {/each}
  {/if}
</div>
