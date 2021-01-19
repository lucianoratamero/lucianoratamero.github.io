<script context="module" lang="ts">
  import { postsByPage, pageRange } from "../_posts";
  export function preload(page) {
    return {
      posts: postsByPage(page.params.pageNumber - 1),
      pageNumber: parseInt(page.params.pageNumber),
      pageRange,
    };
  }
</script>

<script lang="ts">
  import { afterUpdate } from "svelte";
  import { stores } from "@sapper/app";
  import ScrollTop from "../../../components/ScrollTop.svelte";
  import PaginatedPosts from "../../../components/PaginatedPosts.svelte";

  export let posts: { slug: string; title: string; html: any }[];
  export let pageRange, pageNumber;

  const { page } = stores();

  afterUpdate(() => {
    // fix svelte:head's buggy hydration
    const titleTags = document.getElementsByTagName("title");
    Array.from(titleTags).map((tag, i) => {
      if (i > 0) {
        tag.remove();
      }
    })
  });
</script>

<svelte:head>
  <title>Recent posts - Page {pageNumber} - luciano@ratamero.com</title>
  <meta
    name="description"
    content="Luciano Ratamero's recent blog posts - Page {pageNumber}" />
</svelte:head>

{#key $page}
  <ScrollTop />
{/key}
<PaginatedPosts {posts} {pageNumber} {pageRange} />
