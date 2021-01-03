<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
    }, 50);
  });
</script>
