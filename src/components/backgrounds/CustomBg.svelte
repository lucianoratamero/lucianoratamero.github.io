<script>
  import BradFrostBubbles from "./brad-frost-bubbles/BradFrostBubbles.svelte";
  import Raindrops from "./Raindrops.svelte";

  const availableBgs = [BradFrostBubbles, Raindrops];
  const randomBg = availableBgs[Math.floor(Math.random() * availableBgs.length)]
</script>

<svelte:component this={randomBg} />
