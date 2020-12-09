<script context="module" lang="ts">
  export function preload() {
    return this.fetch(`blog.json`)
      .then((r: { json: () => any }) => r.json())
      .then((posts: { slug: string; title: string; html: any }[]) => {
        return { posts };
      });
  }
</script>

<script lang="ts">
  export let posts: { slug: string; title: string; html: any }[];
</script>

<svelte:head>
  <title>recent posts - luciano@ratamero.com</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
  {/each}
</ul>

<style>
  ul {
    margin: 0 0 1em 0;
    padding: 0;
  }
  ul,
  li {
    list-style: none;
  }
  li {
    margin: 0.4rem 0;
  }
</style>
