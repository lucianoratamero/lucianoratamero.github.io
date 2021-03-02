<script>
  import { onMount } from "svelte";

  import range from "../range";

  let currentNodes = [];
  let canvas, width, height, context, showRaindrops, frame;

  function randomFromInterval(min, max) {
    // min and max included
    return Math.random() * (max - min + 1) + min;
  }

  function build() {
    let baseNumberofParticles = window.innerWidth / 3;
    let particlesRange = range(
      parseInt(baseNumberofParticles * randomFromInterval(0.2, 0.4))
    );
    console.log(particlesRange.length);

    currentNodes = particlesRange.map(() => setupNode());
  }

  function setupNode() {
    let size = Math.ceil(Math.random() * 20);
    let delay = Math.random() * 100 * size;
    return {
      yPosition: -delay,
      size,
      xPosition: parseInt(Math.random() * window.innerWidth),
    };
  }

  function draw(node) {
    context.strokeStyle = "rgba(61, 131, 155, 0.5)";
    context.lineWidth = Math.floor(node.size / 6);
    context.beginPath();
    context.moveTo(node.xPosition, node.yPosition);
    context.lineTo(node.xPosition, node.yPosition + node.size);
    context.closePath();
    context.stroke();
  }

  onMount(() => {
    width = window.innerWidth;
    height = window.innerHeight;
    context = canvas.getContext("2d");
    frame = requestAnimationFrame(loop);

    build();

    setTimeout(() => (showRaindrops = true), 2000);

    window.addEventListener('resize', build, false)

    function loop() {
      frame = requestAnimationFrame(loop);
      context.clearRect(0, 0, width, height);

      currentNodes = currentNodes.map((node, i) => {
        if (node.yPosition < height) {
          node.yPosition = node.yPosition + node.size * 1.2;
        } else {
          node = setupNode();
        }
        draw(node);
        return node;
      });
    }
  });
</script>

<canvas
  style={`opacity: ${showRaindrops ? 1 : 0}`}
  bind:this={canvas}
  {width}
  {height} />

<style>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    transition: opacity 4s ease-in-out;
  }
</style>
