<script>
  import { onMount } from "svelte";

  let radius = Math.round(Math.random() * 40) + 8;
  let zIndex = Math.round(Math.random() * 10);

  let leftPercentage = window.innerHeight * Math.random() * 100 / window.innerHeight;
  let topPercentage = 100 - Math.cbrt(leftPercentage / 100) * 100;

  topPercentage = topPercentage * Math.random();
  leftPercentage = leftPercentage * Math.random();

  let bgColor;
  let colors;

  onMount(() => {
    const docComputedStyle = getComputedStyle(document.querySelector(".theme"));
    colors = [
      docComputedStyle.getPropertyValue("--background-color"),
      docComputedStyle.getPropertyValue("--font-color"),
      docComputedStyle.getPropertyValue("--link-color"),
      docComputedStyle.getPropertyValue("--accent-color"),
      docComputedStyle.getPropertyValue("--code-bg-color"),
    ];
    onMouseEnter();
  });

  function onMouseEnter() {
    bgColor = colors[Math.floor(Math.random() * colors.length)];
  }

  $: randomStyles = `
    top: calc(${topPercentage}vh - ${radius}px);
    left: calc(${leftPercentage}vw - ${radius}px);
    width: ${radius}px;
    height: ${radius}px;
    z-index: ${zIndex};
    background-color: ${bgColor}
  `;
</script>

<div style={randomStyles} on:mouseenter={onMouseEnter} />

<style>
  div {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    border: 3px solid #000;
  }
</style>
