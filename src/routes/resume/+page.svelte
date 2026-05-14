<script lang="ts">
	import { profile } from '$lib/data/portfolio';
</script>

<svelte:head>
	<title>{profile.name} | Resume</title>
	<meta
		name="description"
		content="View and download the resume of Abdulahad Sheid, a frontend engineer focused on polished, interactive web experiences."
	/>
</svelte:head>

<div class="shell resume-shell">
	<a class="back-link" href="/">Back to portfolio</a>

	<header class="resume-hero">
		<div>
			<p class="eyebrow">Resume / Frontend Engineer</p>
			<h1>{profile.name}</h1>
			<p class="summary">{profile.subtitle}</p>
		</div>
		<div class="resume-actions">
			<a class="button primary" href={profile.resumeUrl} download>Download resume</a>
			<a class="button secondary" href={`mailto:${profile.email}`}>Contact me</a>
		</div>
	</header>

	<section class="resume-document" aria-labelledby="resume-document-title">
		<div class="resume-top">
			<h2 id="resume-document-title">Resume preview</h2>
			<p>Frontend Engineer / Software Developer</p>
		</div>

		<div class="resume-meta">
			<span>Abuja, Nigeria</span>
			<span>{profile.email}</span>
			<span>+234 (810) 498 9187</span>
		</div>

		<div class="resume-section">
			<h3>Professional Summary</h3>
			<p>
				Frontend Engineer and Software Developer focused on building responsive,
				interactive, and user-centered web applications. I enjoy translating product ideas
				into polished interfaces with strong usability, responsive behavior, and clean
				implementation.
			</p>
		</div>

		<div class="resume-section">
			<h3>Core Skills</h3>
			<ul class="pill-list">
				<li>Frontend Development</li>
				<li>React</li>
				<li>SvelteKit</li>
				<li>JavaScript</li>
				<li>Tailwind CSS</li>
				<li>Firebase</li>
				<li>Framer Motion</li>
				<li>Responsive UI</li>
				<li>Git/GitHub</li>
			</ul>
		</div>

		<div class="resume-section">
			<h3>Internship Experience</h3>
			<div class="entry">
				<div class="entry-head">
					<strong>HNG Tech</strong>
					<span>April 2026 - Present</span>
				</div>
				<p>Frontend / Software Engineering Intern</p>
				<ul>
					<li>Participating in real-time engineering training and live product delivery workflows.</li>
					<li>Strengthening practical software production and collaboration through Git/GitHub.</li>
					<li>Building production-oriented frontend projects with emphasis on usability and delivery discipline.</li>
				</ul>
			</div>
		</div>

		<div class="resume-section">
			<h3>Selected Projects</h3>
			<div class="entry">
				<strong>SkySwift Booking Website</strong>
				<p>React, Tailwind CSS, Firebase, React Router, Framer Motion, EmailJS</p>
			</div>
			<div class="entry">
				<strong>MoneyMap Fintech Web App</strong>
				<p>React, Tailwind CSS, Firebase, Context API, Chart.js</p>
			</div>
			<div class="entry">
				<strong>Nova SaaS</strong>
				<p>React, Tailwind CSS, Framer Motion, Chart.js</p>
			</div>
			<div class="entry">
				<strong>Resume Builder</strong>
				<p>React, Tailwind CSS, Firebase, React Router, Framer Motion</p>
			</div>
		</div>

		<div class="resume-section grid">
			<div>
				<h3>Education</h3>
				<p><strong>B.Sc. Physics</strong></p>
				<p>Federal University Lokoja, Kogi State, Nigeria</p>
			</div>
			<div>
				<h3>Certifications</h3>
				<p>Frontend Certification, W3Schools</p>
				<p>HTML, CSS, and JavaScript, W3Schools</p>
			</div>
		</div>
	</section>
</div>

<style>
	.resume-shell {
		padding-bottom: 4rem;
	}

	.back-link {
		display: inline-flex;
		margin: 2rem 0 1rem;
		color: var(--text-main);
	}

	.resume-hero {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 1.5rem;
		align-items: end;
		margin-bottom: 1.5rem;
	}

	.eyebrow,
	.summary,
	.resume-top p,
	.resume-meta,
	.entry p,
	.resume-section > p,
	.resume-section li,
	.grid p {
		color: var(--text-muted);
	}

	.eyebrow {
		margin: 0;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		font-size: 0.8rem;
	}

	h1 {
		margin: 0.35rem 0 0.6rem;
		font-size: clamp(3rem, 8vw, 5.5rem);
		line-height: 0.9;
	}

	.summary {
		margin: 0;
		max-width: 44rem;
	}

	.resume-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.85rem;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 3rem;
		padding: 0.85rem 1.2rem;
		border-radius: 999px;
		text-decoration: none;
		font-weight: 600;
	}

	.primary {
		background: linear-gradient(135deg, var(--accent), var(--accent-2));
		color: #09111f;
	}

	.secondary {
		background: var(--surface-strong);
		color: var(--text-main);
		border: 1px solid var(--border-strong);
	}

	.resume-document {
		padding: clamp(1.25rem, 2vw, 2rem);
		border-radius: 1.75rem;
		border: 1px solid var(--border-strong);
		background: color-mix(in oklab, var(--surface-strong) 82%, transparent);
		box-shadow: var(--shadow-soft);
		display: grid;
		gap: 1.5rem;
	}

	.resume-top {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 1rem;
		align-items: end;
	}

	.resume-top h2,
	.resume-top p,
	.resume-section h3,
	.resume-section p {
		margin: 0;
	}

	.resume-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--border);
	}

	.resume-section {
		display: grid;
		gap: 0.8rem;
	}

	.pill-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.7rem;
	}

	.pill-list li {
		padding: 0.45rem 0.75rem;
		border-radius: 999px;
		border: 1px solid var(--border);
		background: var(--surface);
	}

	.entry {
		display: grid;
		gap: 0.35rem;
		padding: 1rem;
		border-radius: 1.1rem;
		background: color-mix(in oklab, var(--surface) 84%, transparent);
		border: 1px solid var(--border);
	}

	.entry-head {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 0.75rem;
	}

	.entry ul {
		margin: 0;
		padding-left: 1.2rem;
		display: grid;
		gap: 0.5rem;
	}

	.grid {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (max-width: 820px) {
		.resume-hero,
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
