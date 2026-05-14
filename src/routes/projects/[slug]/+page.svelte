<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.project.title} | Case Study</title>
	<meta name="description" content={data.project.description} />
</svelte:head>

<div class="shell">
	<a class="back-link" href="/#projects">Back to portfolio</a>

	<article class="case-study">
		<header class="hero">
			<div>
				<p>{data.project.year} / {data.project.category}</p>
				<h1>{data.project.title}</h1>
				<p class="tagline">{data.project.tagline}</p>
				<p class="description">{data.project.description}</p>
			</div>
			<div class="actions">
				<a href={data.project.liveUrl} target="_blank" rel="noreferrer">Live demo</a>
				<a href={data.project.repoUrl} target="_blank" rel="noreferrer">GitHub repo</a>
			</div>
		</header>

		<div class="visual">
			<img src={data.project.image} alt={data.project.imageAlt} />
		</div>

		<section class="details">
			<div class="panel">
				<h2>Challenge</h2>
				<p>{data.project.challenge}</p>
			</div>
			<div class="panel">
				<h2>Impact</h2>
				<p>{data.project.impact}</p>
			</div>
		</section>

		<section class="panel">
			<h2>Tech stack</h2>
			<ul class="stack">
				{#each data.project.technologies as item}
					<li>{item}</li>
				{/each}
			</ul>
		</section>

		<section class="panel">
			<h2>Delivery metrics</h2>
			<ul class="metrics">
				{#each data.project.metrics as metric}
					<li>{metric}</li>
				{/each}
			</ul>
		</section>
	</article>
</div>

<style>
	.back-link {
		display: inline-flex;
		margin: 2rem 0 1rem;
		color: var(--text-main);
	}

	.case-study {
		display: grid;
		gap: 1.25rem;
		padding-bottom: 4rem;
	}

	.hero {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 1rem;
		align-items: end;
	}

	.hero p {
		margin: 0;
		color: var(--text-muted);
	}

	h1 {
		margin: 0.25rem 0 0.75rem;
		font-size: clamp(2.8rem, 7vw, 5.5rem);
		line-height: 0.92;
	}

	.tagline {
		color: var(--accent-soft) !important;
		font-size: 1.1rem;
	}

	.description {
		max-width: 44rem;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
	}

	.actions a,
	.stack li,
	.metrics li {
		text-decoration: none;
	}

	.actions a {
		border: 1px solid var(--border-strong);
		background: var(--surface-strong);
		color: var(--text-main);
		padding: 0.85rem 1rem;
		border-radius: 999px;
	}

	.visual,
	.panel {
		border: 1px solid var(--border-strong);
		border-radius: 1.5rem;
		background: color-mix(in oklab, var(--surface-strong) 82%, transparent);
		box-shadow: var(--shadow-soft);
	}

	.visual {
		overflow: clip;
	}

	.visual img {
		display: block;
		width: 100%;
	}

	.details {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.25rem;
	}

	.panel {
		padding: 1.2rem;
	}

	.stack,
	.metrics {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		list-style: none;
		padding: 0;
	}

	.stack li,
	.metrics li {
		padding: 0.5rem 0.8rem;
		border-radius: 999px;
		background: var(--surface);
		border: 1px solid var(--border);
	}

	@media (max-width: 800px) {
		.hero,
		.details {
			grid-template-columns: 1fr;
		}
	}
</style>
