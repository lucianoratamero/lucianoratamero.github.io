<script lang="ts">
  export let href: string;
  export let onNewTab: boolean;

  function scrollTo({ target }) {
    document.querySelector(target.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<a
  on:click|preventDefault={scrollTo}
  target={onNewTab ? '_blank' : undefined}
  rel={onNewTab ? 'noopener noreferrer' : undefined}
  {href}><slot /></a>
