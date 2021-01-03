<script lang="ts" context="module">
  import { numberOfPages } from "../routes/blog/_posts";
  export function preload() {
    return { numberOfPages };
  }
</script>

<script lang="ts">
  export let posts: { slug: string; title: string; html: any }[];
  export let pageRange: [number], pageNumber: number;
</script>

<h1>Recent posts</h1>

<ul class="posts">
  {#each posts as post}
    <li>
      <a rel="prefetch" href="blog/{post.slug}">
        <section class="post-summary">
          <h2><mark>{post.title}</mark></h2>
          {@html post.html}
        </section>
      </a>
    </li>
  {/each}
</ul>

<section class="paginator">
  <ul>
    <li>
      {#if pageNumber === 2}
        <a rel="prefetch" href="/blog/">&lt;</a>
      {:else if pageNumber > 2}
        <a rel="prefetch" href="/blog/page/{pageNumber - 1}">&lt;</a>
      {:else}<button disabled>&lt;</button>{/if}
    </li>

    {#each pageRange as page}
      <li>
        {#if page === 1}
          <a
            rel="prefetch"
            class:active={page === pageNumber}
            href="/blog/">{page}</a>
        {:else}
          <a
            rel="prefetch"
            class:active={page === pageNumber}
            href="/blog/page/{page}">{page}</a>
        {/if}
      </li>
    {/each}

    <li>
      {#if pageNumber < numberOfPages}
        <a rel="prefetch" href="/blog/page/{pageNumber + 1}">&gt;</a>
      {:else}<button disabled>&gt;</button>{/if}
    </li>
  </ul>
</section>

<style>
  h1 {
    margin-bottom: 1.2rem;
  }

  .posts {
    margin: 0 0 1em 0;
    padding: 0;
  }

  .posts,
  .posts li {
    list-style: none;
  }

  .posts li,
  .posts h2 {
    margin: 0;
  }

  .paginator {
    border-radius: 0.6rem;
    overflow: hidden;
    background: var(--nav-bg-color);
    box-shadow: var(--base-box-shadow);
    position: sticky;
    max-width: 480px;
    margin: 0 auto;
  }

  .paginator ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: stretch;
  }

  .paginator li {
    margin: 0;
    display: inline-flex;
    flex-grow: 1;
  }

  .paginator a,
  .paginator button {
    flex-grow: 1;
    text-align: center;
    border: 0;
    color: var(--link-color);
    padding: 0.4rem;
    position: relative;
  }

  .paginator a:visited {
    color: var(--link-color-visited);
  }

  .paginator a::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    background-color: var(--link-color);
    display: block;
    bottom: 0;
    left: 0;
    z-index: -1;
    transition: height 0.2s ease-in, background-color 0.2s ease-in;
  }

  .paginator a:hover {
    color: var(--background-color);
  }

  .paginator a:hover::after {
    height: 100%;
  }

  .paginator a:visited:hover::after {
    background-color: var(--link-color-visited);
  }

  .paginator .active,
  .paginator button:disabled {
    color: var(--background-color);
    background-color: var(--link-color);
  }

  .paginator .active:visited,
  .paginator button:disabled {
    color: var(--background-color);
    background-color: var(--link-color-visited);
  }
</style>
