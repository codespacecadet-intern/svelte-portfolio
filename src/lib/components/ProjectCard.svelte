<script lang="ts">
	import type { Project } from '$lib/data/portfolio';

	let { project }: { project: Project } = $props();
</script>

<article class="project-card">
	<div class="visual">
		<img src={project.image} alt={project.imageAlt} loading="lazy" />
	</div>
	<div class="content">
		<div class="meta">
			<span>{project.year}</span>
			<span>{project.category}</span>
		</div>
		<h3>{project.title}</h3>
		<p class="tagline">{project.tagline}</p>
		<p>{project.description}</p>
		<ul class="stack" aria-label={`${project.title} technologies`}>
			{#each project.technologies as item}
				<li>{item}</li>
			{/each}
		</ul>
		<div class="actions">
			<a href={`/projects/${project.slug}`}>Open case study</a>
			<a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo</a>
			<a href={project.repoUrl} target="_blank" rel="noreferrer">GitHub</a>
		</div>
	</div>
</article>

<style>
	.project-card {
		display: grid;
		grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
		gap: 1.2rem;
		padding: 1.1rem;
		background: color-mix(in oklab, var(--surface-strong) 78%, transparent);
		border: 1px solid var(--border-strong);
		border-radius: 1.5rem;
		box-shadow: var(--shadow-soft);
		transition:
			transform 220ms ease,
			border-color 220ms ease;
	}

	.project-card:hover {
		transform: translateY(-4px);
		border-color: color-mix(in oklab, var(--accent) 58%, var(--border-strong));
	}

	.visual {
		border-radius: 1.15rem;
		overflow: clip;
		border: 1px solid var(--border);
		min-height: 16rem;
		background: var(--surface);
	}

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.content {
		display: grid;
		gap: 0.85rem;
	}

	.meta,
	.actions,
	.stack {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}

	.meta {
		font-size: 0.82rem;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: var(--text-soft);
	}

	h3,
	p {
		margin: 0;
	}

	.tagline {
		font-size: 1.05rem;
		color: var(--accent-soft);
	}

	.content p:last-of-type {
		color: var(--text-muted);
	}

	.stack {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.stack li {
		padding: 0.4rem 0.7rem;
		border-radius: 999px;
		border: 1px solid var(--border);
		background: var(--surface);
		font-size: 0.88rem;
	}

	.actions a {
		color: var(--text-main);
		text-decoration: none;
		border-bottom: 1px solid transparent;
	}

	.actions a:hover {
		border-color: currentColor;
	}

	@media (max-width: 860px) {
		.project-card {
			grid-template-columns: 1fr;
		}
	}
</style>
