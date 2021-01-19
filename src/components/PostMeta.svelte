<script lang="ts">
  import Icon from "svelte-awesome/components/Icon.svelte";
  import ReadingTimer from "@untemps/svelte-readotron/src/core/ReadingTimer";
  import { faClock } from "@fortawesome/free-regular-svg-icons";

  export let date: string, text: string;
  let readingTime;

  $: if (text) {
    readingTime = new ReadingTimer().getTime(text);
  }
</script>

<p class="meta">
  {date}
  {#if readingTime}
    -
    <Icon data={faClock} scale={0.8} />
    {readingTime}
    min read
  {/if}
</p>
