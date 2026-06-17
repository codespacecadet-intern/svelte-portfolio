<script lang="ts">
	import type { Project } from '$lib/data/portfolio';

	let { project }: { project: Project } = $props();
</script>

<article class="project-card">
	<a class="visual" href={`/projects/${project.slug}`} aria-label={`Open ${project.title} case study`}>
		<img src={project.image} alt={project.imageAlt} loading="lazy" />
	</a>

	<div class="content">
		<div class="meta">
			<span>{project.year}</span>
			<span>{project.category}</span>
			<span>{project.role}</span>
		</div>

		<div class="title-row">
			<div>
				<h3>{project.title}</h3>
				<p class="tagline">{project.tagline}</p>
			</div>
			<a class="open-link" href={`/projects/${project.slug}`}>Case study</a>
		</div>

		<p class="description">{project.description}</p>

		<div class="detail-grid">
			<div>
				<span>Focus</span>
				<ul>
					{#each project.focus as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
			<div>
				<span>Signals</span>
				<ul>
					{#each project.metrics as metric}
						<li>{metric}</li>
					{/each}
				</ul>
			</div>
		</div>

		<ul class="stack" aria-label={`${project.title} technologies`}>
			{#each project.technologies as item}
				<li>{item}</li>
			{/each}
		</ul>

		<div class="actions">
			<a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo</a>
			<a href={project.repoUrl} target="_blank" rel="noreferrer">GitHub</a>
		</div>
	</div>
</article>

<style>
	.project-card {
		display: grid;
		grid-template-columns: minmax(16rem, 0.72fr) minmax(0, 1.28fr);
		gap: 1rem;
		padding: 1rem;
		background: color-mix(in oklab, var(--surface-strong) 78%, transparent);
		border: 1px solid var(--border-strong);
		border-radius: 1rem;
		box-shadow: var(--shadow-soft);
		transition:
			transform 220ms ease,
			border-color 220ms ease,
			background 220ms ease;
	}

	.project-card:hover {
		transform: translateY(-3px);
		border-color: color-mix(in oklab, var(--accent) 48%, var(--border-strong));
		background: color-mix(in oklab, var(--surface-strong) 88%, transparent);
	}

	.visual {
		display: block;
		min-height: 18rem;
		border-radius: 0.8rem;
		overflow: clip;
		border: 1px solid var(--border);
		background: var(--surface);
	}

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 260ms ease;
	}

	.project-card:hover img {
		transform: scale(1.025);
	}

	.content {
		display: grid;
		gap: 0.9rem;
	}

	.meta,
	.actions,
	.stack,
	.detail-grid ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.55rem;
	}

	.meta {
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.11em;
		color: var(--text-soft);
	}

	.meta span {
		padding: 0.35rem 0.5rem;
		border: 1px solid var(--border);
		border-radius: 0.55rem;
		background: color-mix(in oklab, var(--surface) 78%, transparent);
	}

	.title-row {
		display: flex;
		justify-content: space-between;
		align-items: start;
		gap: 1rem;
	}

	h3,
	p,
	.detail-grid ul,
	.stack {
		margin: 0;
	}

	h3 {
		font-size: clamp(1.45rem, 2.5vw, 2.35rem);
		line-height: 1;
	}

	.tagline {
		margin-top: 0.55rem;
		color: var(--accent-soft);
		font-size: 1.02rem;
	}

	.description {
		color: var(--text-muted);
	}

	.open-link,
	.actions a {
		color: var(--text-main);
		text-decoration: none;
	}

	.open-link {
		flex: 0 0 auto;
		padding: 0.62rem 0.75rem;
		border: 1px solid var(--border-strong);
		border-radius: 0.65rem;
		background: color-mix(in oklab, var(--surface) 76%, transparent);
		font-weight: 700;
	}

	.detail-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.8rem;
	}

	.detail-grid > div {
		display: grid;
		gap: 0.6rem;
		padding: 0.8rem;
		border: 1px solid var(--border);
		border-radius: 0.75rem;
		background: color-mix(in oklab, var(--surface) 74%, transparent);
	}

	.detail-grid span {
		text-transform: uppercase;
		letter-spacing: 0.11em;
		font-size: 0.68rem;
		color: var(--text-soft);
	}

	.detail-grid li,
	.stack li {
		list-style: none;
		padding: 0.42rem 0.58rem;
		border-radius: 0.55rem;
		border: 1px solid var(--border);
		background: color-mix(in oklab, var(--surface-strong) 70%, transparent);
		color: var(--text-muted);
		font-size: 0.86rem;
	}

	.stack {
		list-style: none;
		padding: 0;
	}

	.actions a {
		border-bottom: 1px solid transparent;
	}

	.actions a:hover {
		border-color: currentColor;
	}

	@media (max-width: 920px) {
		.project-card,
		.detail-grid {
			grid-template-columns: 1fr;
		}

		.visual {
			min-height: 15rem;
		}
	}

	@media (max-width: 640px) {
		.title-row {
			display: grid;
		}

		.open-link {
			width: fit-content;
		}
	}
</style>
