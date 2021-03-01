<script>
  import { onMount } from "svelte";
  import Bubble from "./Bubble.svelte";

  function range(start, stop, step) {
    if (typeof stop == "undefined") {
      // one param defined
      stop = start;
      start = 0;
    }

    if (typeof step == "undefined") {
      step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
      return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
      result.push(i);
    }

    return result;
  }

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
