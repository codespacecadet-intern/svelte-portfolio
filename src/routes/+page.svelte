<script lang="ts">
	import { inView } from '$lib/actions/in-view';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ProjectFilter from '$lib/components/ProjectFilter.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import { capabilityGroups, profile, projects } from '$lib/data/portfolio';

	let activeCategory = $state('all');

	const visibleProjects = $derived.by(() =>
		activeCategory === 'all'
			? projects
			: projects.filter((project) => project.category === activeCategory)
	);
</script>

<svelte:head>
	<title>{profile.name} | Frontend Engineer Portfolio</title>
	<meta
		name="description"
		content="A SvelteKit portfolio for Abdulahad Sheid, a frontend engineer building secure-feeling product interfaces, dashboards, command surfaces, and accessible web apps."
	/>
</svelte:head>

<a class="skip-link" href="#main-content">Skip to content</a>

<div class="shell">
	<SiteHeader />

	<main id="main-content">
		<Hero />

		<section class="section" id="projects" aria-labelledby="projects-title">
			<div class="reveal" use:inView>
				<SectionHeading
					eyebrow="Project inspection"
					title="Work that shows product judgement, interface systems, and frontend execution."
					copy="Each project is presented like a technical signal: what it does, the interface challenge, the stack, and the product impact."
				/>
			</div>

			<div class="section-toolbar reveal" use:inView={{ delay: 120 }}>
				<ProjectFilter value={activeCategory} onSelect={(category) => (activeCategory = category)} />
				<p>{visibleProjects.length} active case studies</p>
			</div>

			<div class="project-stack">
				{#each visibleProjects as project, index (project.slug)}
					<div class="reveal" use:inView={{ delay: index * 80 }}>
						<ProjectCard {project} />
					</div>
				{/each}
			</div>
		</section>

		<section class="section" id="craft" aria-labelledby="craft-title">
			<div class="reveal" use:inView>
				<SectionHeading
					eyebrow="Engineering console"
					title="The portfolio is built to feel like the tools I like shipping."
					copy="Quietly dense, keyboard-aware, responsive, accessible, and written around reusable SvelteKit components rather than one-off page decoration."
				/>
			</div>

			<div class="capability-grid">
				{#each capabilityGroups as group, index}
					<article class="capability reveal" use:inView={{ delay: index * 90 }}>
						<div>
							<span>0{index + 1}</span>
							<h3>{group.title}</h3>
						</div>
						<p>{group.copy}</p>
						<ul>
							{#each group.items as item}
								<li>{item}</li>
							{/each}
						</ul>
					</article>
				{/each}
			</div>
		</section>

		<section class="section hiring-strip" id="hiring" aria-labelledby="hiring-title">
			<div class="reveal" use:inView>
				<p class="eyebrow">Hiring signal</p>
				<h2 id="hiring-title">Looking for frontend roles where UI quality, speed, and trust matter.</h2>
			</div>
			<div class="hiring-grid">
				<div class="hiring-copy reveal" use:inView={{ delay: 80 }}>
					<p>
						I am strongest where product interfaces need to look polished, communicate state clearly,
						and stay usable across mobile, tablet, and desktop. The next deepening phase will turn
						each project into a richer technical case study.
					</p>
					<div class="hiring-actions">
						<a href="/resume">Read resume</a>
						<a href={profile.resumeUrl} download>Download resume</a>
						<a href={`mailto:${profile.email}`}>Email me</a>
					</div>
				</div>
				<ul class="readiness reveal" use:inView={{ delay: 140 }}>
					{#each profile.highlights as highlight}
						<li>{highlight}</li>
					{/each}
				</ul>
			</div>
		</section>

		<section class="section contact-shell" id="contact-shell" aria-labelledby="contact-title">
			<div class="reveal" use:inView>
				<SectionHeading
					eyebrow="Contact"
					title="Send a role, project brief, or interview invite."
					copy="The contact flow validates and sanitizes input in the browser, then opens a prefilled email so no secrets or messages are stored in the frontend."
				/>
			</div>

			<div class="contact-grid">
				<div class="contact-panel reveal" use:inView={{ delay: 80 }}>
					<h3 id="contact-title">Direct channel</h3>
					<p>
						Available for frontend engineering roles, product UI work, dashboards, dev tools,
						and secure-feeling customer interfaces.
					</p>
					<a href={`mailto:${profile.email}`}>{profile.email}</a>
				</div>
				<div class="reveal" use:inView={{ delay: 150 }}>
					<ContactForm />
				</div>
			</div>
		</section>
	</main>

	<SiteFooter />
</div>

<style>
	.section-toolbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.25rem 0 0;
	}

	.section-toolbar p {
		margin: 0;
		color: var(--text-soft);
		font-size: 0.92rem;
	}

	.project-stack {
		display: grid;
		gap: 1rem;
		padding-top: 1.25rem;
	}

	.capability-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
		padding-top: 1.4rem;
	}

	.capability,
	.contact-panel,
	.hiring-strip {
		border: 1px solid var(--border-strong);
		border-radius: 1rem;
		background: color-mix(in oklab, var(--surface-strong) 76%, transparent);
		box-shadow: var(--shadow-soft);
	}

	.capability {
		display: grid;
		align-content: start;
		gap: 1rem;
		min-height: 22rem;
		padding: 1rem;
	}

	.capability div {
		display: grid;
		gap: 0.5rem;
	}

	.capability span,
	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-size: 0.72rem;
		color: var(--text-soft);
	}

	.capability h3,
	.contact-panel h3,
	.hiring-strip h2,
	.hiring-copy p {
		margin: 0;
	}

	.capability h3 {
		font-size: 1.35rem;
	}

	.capability p,
	.contact-panel p,
	.hiring-copy p,
	.readiness {
		color: var(--text-muted);
	}

	.capability ul,
	.readiness {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.capability li,
	.readiness li {
		padding: 0.5rem 0.7rem;
		border: 1px solid var(--border);
		border-radius: 0.65rem;
		background: color-mix(in oklab, var(--surface) 78%, transparent);
	}

	.hiring-strip {
		padding: clamp(1.25rem, 3vw, 2rem);
	}

	.hiring-strip h2 {
		max-width: 58rem;
		font-size: clamp(2rem, 4vw, 4rem);
		line-height: 0.98;
	}

	.hiring-grid,
	.contact-grid {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		gap: 1rem;
		padding-top: 1.25rem;
	}

	.hiring-copy {
		display: grid;
		align-content: start;
		gap: 1rem;
	}

	.hiring-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.hiring-actions a {
		display: inline-flex;
		align-items: center;
		min-height: 2.75rem;
		padding: 0.75rem 0.95rem;
		border-radius: 0.75rem;
		border: 1px solid var(--border-strong);
		color: var(--text-main);
		text-decoration: none;
		background: color-mix(in oklab, var(--surface) 80%, transparent);
	}

	.contact-panel {
		display: grid;
		align-content: start;
		gap: 1rem;
		padding: clamp(1.2rem, 2vw, 1.5rem);
	}

	.contact-panel p,
	.contact-panel a {
		margin: 0;
		color: var(--text-muted);
	}

	.contact-panel a {
		color: var(--text-main);
	}

	@media (max-width: 920px) {
		.capability-grid,
		.hiring-grid,
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 700px) {
		.section-toolbar {
			align-items: start;
			flex-direction: column;
		}
	}
</style>
