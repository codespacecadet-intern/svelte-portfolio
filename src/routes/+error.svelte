<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="shell error-shell">
	<p>{page.status}</p>
	<h1>That route could not be loaded.</h1>
	<p>The page may have moved, or the link may be broken.</p>
	<a href="/">Return home</a>
</div>

<style>
	.error-shell {
		min-height: 100vh;
		display: grid;
		align-content: center;
		gap: 1rem;
	}

	p,
	h1 {
		margin: 0;
	}

	a {
		color: var(--text-main);
	}
</style>
