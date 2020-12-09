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
  import PaginatedPosts from "../../../components/PaginatedPosts.svelte";

  export let posts: { slug: string; title: string; html: any }[];
  export let pageRange, pageNumber;
</script>

<PaginatedPosts {posts} {pageNumber} {pageRange} />
