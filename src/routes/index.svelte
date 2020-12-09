<script lang="ts">
  import Icon from "svelte-awesome/components/Icon.svelte";
  import {
    faTwitch,
    faTwitter,
    faLastfm,
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
  import eu from "../img/eu.jpg";
  import eu3x from "../img/eu-3x.jpg";

  function _calculateAge(birthday: Date) {
    // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  const age = _calculateAge(new Date("1989-06-15"));
</script>

<svelte:head>
  <title>luciano@ratamero.com - welcome!</title>
  <meta name="description" content="Luciano Ratamero's personal website" />
</svelte:head>

<h1><mark>Hi :]</mark></h1>

<figure>
  <img
    src={eu}
    srcset={`${eu} 1x, ${eu3x} 2x`}
    alt="Luciano wearing raccoon pajamas" />
</figure>

<p>welcome to my site!</p>

<p>Luciano Ratamero here o/</p>
<p>I'm {age}, brazilian, programmer, he/him</p>
<p>
  currently based in Recife, Brazil, working as a Senior JS/Python dev at
  <a
    href="https://labcodes.com.br/"
    rel="noopener noreferrer"
    target="_blank">Labcodes</a>
</p>

<p>thanks for stopping by!</p>

<section class="social-icons">
  <a href="https://twitter.com/lucianoratamero"><Icon scale={2} data={faTwitter} /></a>
  <a href="https://www.linkedin.com/in/luciano-ratamero-06b98b32/"><Icon scale={2} data={faLinkedin} /></a>
  <a href="https://github.com/lucianoratamero/"><Icon scale={2} data={faGithub} /></a>
  <a href="http://lastfm.com/user/lucianoratamero"><Icon scale={2} data={faLastfm} /></a>
  <a href="https://twitch.tv/lucianoisstreaming"><Icon scale={2} data={faTwitch} /></a>
</section>

<style>
  h1,
  figure,
  p,
  .social-icons {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 3.4rem;
  }

  figure {
    margin: 0.8rem auto;
  }

  img {
    width: 100%;
    max-width: 200px;
    height: 100%;
    max-height: 200px;
    border-radius: 0.4rem;
  }

  p {
    margin: 0.25em auto;
  }

  .social-icons {
    margin-top: 0.8em;
  }

  @media (min-width: 480px) {
    p {
      margin: 0.4em auto;
    }
  }
</style>
