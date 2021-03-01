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
        href="blog/page/1">blog</a>
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
    position: fixed;
    z-index: 12;
    bottom: 0.8rem;
    max-width: calc(100vw - 2.8rem);

    left: 0;
    right: 0;
    margin: 0.8rem auto 0;

    border-radius: 0.6rem;
    background-color: var(--nav-bg-color);
    box-shadow: var(--base-box-shadow);
    transition: box-shadow var(--transition-duration);
  }

  @media (min-width: 480px) {
    nav {
      max-width: 24rem;
      bottom: 1.4rem;
    }
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
    justify-content: center;
  }

  a {
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    padding: 0.4rem 0.8rem;
    overflow: hidden;
    position: relative;
    transition: color 0.2s ease-in;
  }

  @media (min-width: 480px) {
    a {
      font-size: 1.4rem;
      padding: 0.8rem 1.6rem;
    }
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
