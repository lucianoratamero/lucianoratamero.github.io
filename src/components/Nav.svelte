<script lang="ts">
  export let segment: string;
</script>

<nav>
  <ul>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === undefined ? 'page' : undefined}
        href="/">about</a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">blog</a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'previous-talks' ? 'page' : undefined}
        href="previous-talks">talks</a>
    </li>
  </ul>
</nav>

<style>
  nav {
    position: sticky;
    bottom: 1.4rem;
    max-width: 400px;

    left: 0;
    right: 0;
    margin: 0.8rem auto 0;

    border-radius: 0.6rem;
    background-color: var(--nav-bg-color);
    box-shadow: var(--base-box-shadow);
    transition: box-shadow var(--transition-duration);
  }

  .hide-nav {
    bottom: -3.6rem;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: stretch;
  }

  li,
  a {
    flex-grow: 1;
    display: flex;
    text-align: center;
  }

  a {
    font-weight: 500;
    text-decoration: none;
    padding: 0.8rem 1.4rem;
    overflow: hidden;
    position: relative;
    transition: color 0.2s ease-in;
  }

  li:first-child a {
    border-top-left-radius: 0.6rem;
    border-bottom-left-radius: 0.6rem;
  }

  li:last-child a {
    border-top-right-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
  }

  a::after {
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

  a:hover,
  [aria-current] {
    color: var(--background-color);
  }

  a:hover::after {
    background-color: var(--link-color-visited);
    height: 100%;
  }

  [aria-current]::after {
    height: 100%;
  }
</style>
