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

<PaginatedPosts {posts} {pageNumber} {pageRange} />
