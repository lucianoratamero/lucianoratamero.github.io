<script lang="ts">
  export let segment: string;
</script>

<article class="blog-post">
  <slot {segment} />
</article>
