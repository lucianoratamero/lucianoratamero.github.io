<script lang="ts">
import { onMount } from "svelte";


  export let segment: string;

  onMount(() => {
    // fix svelte:head's buggy hydration
    const titleTags = document.getElementsByTagName('title');
    if (titleTags.length > 1) {
      titleTags[0].remove();
    }
  });
</script>

<article class="blog-post">
  <slot {segment} />
</article>
