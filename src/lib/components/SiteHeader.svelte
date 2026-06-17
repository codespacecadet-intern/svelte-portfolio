<script lang="ts">
	import CommandPalette from '$lib/components/CommandPalette.svelte';
</script>

<header class="site-header">
	<a class="brand" href="#top">AS</a>
	<nav aria-label="Primary navigation">
		<a href="#projects">Projects</a>
		<a href="#craft">Craft</a>
		<a href="#hiring">Hiring</a>
		<a href="#contact-shell">Contact</a>
	</nav>
	<CommandPalette />
</header>

<style>
	.site-header {
		position: sticky;
		top: 1rem;
		z-index: 30;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.8rem 1rem;
		border: 1px solid var(--border-strong);
		border-radius: 0.75rem;
		background: color-mix(in oklab, var(--surface) 84%, transparent);
		backdrop-filter: blur(18px);
		box-shadow: var(--shadow-soft);
	}

	.brand,
	nav a {
		text-decoration: none;
		color: var(--text-main);
	}

	.brand {
		display: inline-grid;
		place-items: center;
		width: 2.5rem;
		aspect-ratio: 1;
		border-radius: 0.5rem;
		background: var(--accent);
		color: #09111f;
		font-weight: 800;
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	nav a {
		color: var(--text-soft);
	}

	nav a:hover {
		color: var(--text-main);
	}

	@media (max-width: 720px) {
		.site-header {
			align-items: start;
		}
	}
</style>
