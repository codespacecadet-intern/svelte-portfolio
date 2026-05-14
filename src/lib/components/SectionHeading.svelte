<script lang="ts">
	let { eyebrow, title, copy }: { eyebrow: string; title: string; copy: string } = $props();
</script>

<header class="section-heading">
	<p>{eyebrow}</p>
	<h2>{title}</h2>
	<p>{copy}</p>
</header>

<style>
	.section-heading {
		display: grid;
		gap: 0.75rem;
		max-width: 40rem;
	}

	.section-heading p:first-child {
		margin: 0;
		text-transform: uppercase;
		letter-spacing: 0.22em;
		font-size: 0.76rem;
		color: var(--text-soft);
	}

	h2 {
		margin: 0;
		font-size: clamp(2rem, 3vw, 3.5rem);
		line-height: 0.96;
	}

	.section-heading p:last-child {
		margin: 0;
		color: var(--text-muted);
		font-size: 1.02rem;
	}
</style>
