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
				<p class="eyebrow">{data.project.year} / {data.project.category} / {data.project.role}</p>
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
				<span>Challenge</span>
				<h2>Problem space</h2>
				<p>{data.project.challenge}</p>
			</div>
			<div class="panel">
				<span>Impact</span>
				<h2>Delivery result</h2>
				<p>{data.project.impact}</p>
			</div>
		</section>

		<section class="panel">
			<span>Technical focus</span>
			<h2>Interface priorities</h2>
			<ul class="metrics">
				{#each data.project.focus as item}
					<li>{item}</li>
				{/each}
			</ul>
		</section>

		<section class="panel">
			<span>Stack</span>
			<h2>Tools and implementation</h2>
			<ul class="stack">
				{#each data.project.technologies as item}
					<li>{item}</li>
				{/each}
			</ul>
		</section>

		<section class="panel">
			<span>Signals</span>
			<h2>What to inspect</h2>
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
		gap: 1rem;
		padding-bottom: 4rem;
	}

	.hero {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 1rem;
		align-items: end;
	}

	.eyebrow {
		margin: 0;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-size: 0.74rem;
		color: var(--text-soft);
	}

	h1 {
		margin: 0.4rem 0 0.75rem;
		font-size: clamp(2.7rem, 7vw, 5.5rem);
		line-height: 0.92;
	}

	.tagline,
	.description {
		margin: 0;
	}

	.tagline {
		color: var(--accent-soft);
		font-size: 1.12rem;
	}

	.description {
		max-width: 48rem;
		margin-top: 0.7rem;
		color: var(--text-muted);
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.7rem;
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
		padding: 0.8rem 0.95rem;
		border-radius: 0.5rem;
	}

	.visual,
	.panel {
		border: 1px solid var(--border-strong);
		border-radius: 0.75rem;
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
		gap: 1rem;
	}

	.panel {
		display: grid;
		gap: 0.8rem;
		padding: 1rem;
	}

	.panel span {
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-size: 0.7rem;
		color: var(--text-soft);
	}

	.panel h2,
	.panel p {
		margin: 0;
	}

	.panel p {
		color: var(--text-muted);
	}

	.stack,
	.metrics {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.stack li,
	.metrics li {
		padding: 0.48rem 0.65rem;
		border-radius: 0.5rem;
		background: var(--surface);
		border: 1px solid var(--border);
		color: var(--text-muted);
	}

	@media (max-width: 800px) {
		.hero,
		.details {
			grid-template-columns: 1fr;
		}
	}
</style>
