<script context="module" lang="ts">
  import { postsByPage, pageRange } from "./_posts";
  export function preload() {
    return { posts: postsByPage(0), pageNumber: 1, pageRange };
  }
</script>

<script lang="ts">
  import PaginatedPosts from "../../components/PaginatedPosts.svelte";

  export let posts: { slug: string; title: string; html: any }[];
  export let pageRange, pageNumber;
</script>

<svelte:head>
  <title>Recent posts - luciano@ratamero.com</title>
  <meta name="description" content="Luciano Ratamero's recent blog posts" />
</svelte:head>

<PaginatedPosts {posts} {pageNumber} {pageRange} />
