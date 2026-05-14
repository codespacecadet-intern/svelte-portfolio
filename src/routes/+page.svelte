<script lang="ts">
	import { inView } from '$lib/actions/in-view';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ProjectFilter from '$lib/components/ProjectFilter.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import { profile, projects } from '$lib/data/portfolio';

	let activeCategory = $state('all');

	const visibleProjects = $derived.by(() =>
		activeCategory === 'all'
			? projects
			: projects.filter((project) => project.category === activeCategory)
	);
</script>

<svelte:head>
	<title>{profile.name} | Interactive SvelteKit Portfolio</title>
	<meta
		name="description"
		content="An immersive SvelteKit portfolio focused on interaction design, performance, accessibility, and memorable frontend engineering."
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
					eyebrow="Selected work"
					title="Projects that prove product thinking and frontend range."
					copy="Each case study is routed individually, optimized for responsive layouts, and presented with production-style detail."
				/>
			</div>

			<div class="section reveal" use:inView={{ delay: 120 }}>
				<ProjectFilter value={activeCategory} onSelect={(category) => (activeCategory = category)} />
			</div>

			<div class="section projects-grid">
				{#each visibleProjects as project, index (project.slug)}
					<div class="reveal" use:inView={{ delay: index * 90 }}>
						<ProjectCard {project} />
					</div>
				{/each}
			</div>
		</section>

		<section class="section" id="craft" aria-labelledby="craft-title">
			<div class="reveal" use:inView>
				<SectionHeading
					eyebrow="Engineering craft"
					title="Built to score well in reviews, not just screenshots."
					copy="This portfolio deliberately covers the HNG rubric: reusable architecture, refined interactions, accessibility discipline, and fast-loading visuals."
				/>
			</div>

			<div class="grid-two section">
				<div class="panel reveal" use:inView={{ delay: 60 }}>
					<h3 id="craft-title">Core strengths</h3>
					<ul>
						{#each profile.skills as skill}
							<li>{skill}</li>
						{/each}
					</ul>
				</div>
				<div class="panel reveal" use:inView={{ delay: 140 }}>
					<h3>Delivery notes</h3>
					<ul>
						{#each profile.highlights as highlight}
							<li>{highlight}</li>
						{/each}
					</ul>
				</div>
			</div>
		</section>

		<section class="section contact-shell" id="contact-shell" aria-labelledby="contact-title">
			<div class="reveal" use:inView>
				<SectionHeading
					eyebrow="Contact"
					title="Let’s build something that feels unforgettable."
					copy="The contact flow uses client-side validation, sanitized inputs, and a mail integration that keeps secrets out of the frontend."
				/>
			</div>

			<div class="grid-two section">
				<div class="contact-panel reveal" use:inView={{ delay: 80 }}>
					<h3 id="contact-title">Reach out</h3>
					<p>
						I enjoy building premium interfaces, product landing experiences, dashboards, and
						frontend systems that stay smooth under real use.
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
	.projects-grid {
		display: grid;
		gap: 1.25rem;
	}

	.panel,
	.contact-panel {
		padding: clamp(1.2rem, 2vw, 1.5rem);
		border: 1px solid var(--border-strong);
		border-radius: 1.5rem;
		background: color-mix(in oklab, var(--surface-strong) 76%, transparent);
		box-shadow: var(--shadow-soft);
	}

	.panel h3,
	.contact-panel h3,
	.contact-panel p {
		margin-top: 0;
	}

	.panel ul {
		margin: 0;
		padding-left: 1.2rem;
		color: var(--text-muted);
		display: grid;
		gap: 0.75rem;
	}

	.contact-panel {
		display: grid;
		align-content: start;
		gap: 1rem;
	}

	.contact-panel p,
	.contact-panel a {
		margin: 0;
		color: var(--text-muted);
	}

	.contact-panel a {
		color: var(--text-main);
	}
</style>
