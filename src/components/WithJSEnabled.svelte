<script>
	let show = false;

	setTimeout(() => {
		show = true;
	}, 0);
</script>

{#if show}
	<slot />
{/if}
