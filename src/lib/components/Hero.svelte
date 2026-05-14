<script lang="ts">
	import { profile } from '$lib/data/portfolio';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<section class="hero" id="top" aria-labelledby="hero-title">
	<div class="hero-copy">
		<p class="eyebrow">Interactive Portfolio / SvelteKit / 2026</p>
		<h1 id="hero-title">{profile.name}</h1>
		<p class="title">{profile.title} + Interaction Designer</p>
		<p class="intro">{profile.introduction}</p>

		<div class="hero-cta">
			<a class="button primary" href="#projects">Explore projects</a>
			<a class="button tertiary" href="/resume">View resume</a>
			<a class="button secondary" href={profile.resumeUrl} download>Download resume</a>
		</div>

		<nav aria-label="Social links" class="hero-links">
			{#each profile.socials as social}
				<a href={social.url} target="_blank" rel="noreferrer">{social.label}</a>
			{/each}
		</nav>

		<ThemeToggle />
	</div>

	<div class="hero-panel" aria-hidden="true">
		<div class="halo halo-a"></div>
		<div class="halo halo-b"></div>
		<div class="grid-card">
			<div class="card-top">
				<span>runtime</span>
				<span>sveltekit://portfolio</span>
			</div>
			<div class="signal-list">
				<div>
					<strong>Animation quality</strong>
					<span>Orchestrated, GPU-friendly, reduced-motion aware</span>
				</div>
				<div>
					<strong>Accessibility</strong>
					<span>Semantic landmarks, keyboard flows, visible focus</span>
				</div>
				<div>
					<strong>Performance</strong>
					<span>Modular data, lazy media, clean bundle strategy</span>
				</div>
			</div>
			<div class="status-bar">
				<span>Build confidence</span>
				<span>Production ready</span>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
		gap: clamp(2rem, 4vw, 4rem);
		align-items: center;
		min-height: 88vh;
		padding-top: 3.25rem;
	}

	.hero-copy {
		display: grid;
		gap: 1.25rem;
	}

	.eyebrow,
	.title,
	.intro {
		margin: 0;
	}

	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.24em;
		font-size: 0.78rem;
		color: var(--text-soft);
	}

	h1 {
		margin: 0;
		font-size: clamp(3.75rem, 10vw, 7.5rem);
		line-height: 0.88;
		max-width: 8ch;
	}

	.title {
		font-size: clamp(1.1rem, 2vw, 1.4rem);
		color: var(--accent-soft);
	}

	.intro {
		max-width: 42rem;
		font-size: 1.08rem;
		color: var(--text-muted);
	}

	.hero-cta,
	.hero-links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.9rem;
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
		transition:
			transform 180ms ease,
			box-shadow 180ms ease,
			background 180ms ease;
	}

	.primary {
		background: linear-gradient(135deg, var(--accent), var(--accent-2));
		color: #09111f;
		box-shadow: 0 20px 40px color-mix(in oklab, var(--accent) 28%, transparent);
	}

	.secondary {
		background: var(--surface-strong);
		color: var(--text-main);
		border: 1px solid var(--border-strong);
	}

	.tertiary {
		background: color-mix(in oklab, var(--surface) 78%, transparent);
		color: var(--text-main);
		border: 1px solid color-mix(in oklab, var(--accent) 34%, var(--border-strong));
	}

	.button:hover {
		transform: translateY(-2px);
	}

	.hero-links a {
		color: var(--text-main);
		text-decoration: none;
		border-bottom: 1px solid transparent;
	}

	.hero-links a:hover {
		border-color: currentColor;
	}

	.hero-panel {
		position: relative;
		min-height: 28rem;
		display: grid;
		place-items: center;
	}

	.halo {
		position: absolute;
		inset: auto;
		border-radius: 50%;
		filter: blur(24px);
		opacity: 0.65;
		pointer-events: none;
	}

	.halo-a {
		width: 15rem;
		height: 15rem;
		background: color-mix(in oklab, var(--accent) 65%, transparent);
		top: 1.5rem;
		right: 3rem;
		animation: float 7s ease-in-out infinite;
	}

	.halo-b {
		width: 11rem;
		height: 11rem;
		background: color-mix(in oklab, var(--accent-2) 55%, transparent);
		bottom: 2.5rem;
		left: 1rem;
		animation: float 8.5s ease-in-out infinite reverse;
	}

	.grid-card {
		position: relative;
		z-index: 1;
		width: min(100%, 32rem);
		padding: 1.2rem;
		border: 1px solid var(--border-strong);
		border-radius: 1.75rem;
		background:
			linear-gradient(180deg, color-mix(in oklab, var(--surface-strong) 92%, transparent), transparent),
			var(--surface);
		backdrop-filter: blur(22px);
		box-shadow: var(--shadow);
		display: grid;
		gap: 1rem;
	}

	.card-top,
	.status-bar {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		font-size: 0.84rem;
		color: var(--text-soft);
	}

	.signal-list {
		display: grid;
		gap: 0.8rem;
	}

	.signal-list div {
		display: grid;
		gap: 0.35rem;
		padding: 1rem;
		border-radius: 1.1rem;
		background: color-mix(in oklab, var(--surface-strong) 88%, transparent);
		border: 1px solid var(--border);
	}

	.signal-list strong {
		font-size: 1rem;
	}

	.signal-list span {
		color: var(--text-muted);
	}

	@keyframes float {
		0%,
		100% {
			transform: translate3d(0, 0, 0);
		}
		50% {
			transform: translate3d(0, -18px, 0);
		}
	}

	@media (max-width: 900px) {
		.hero {
			grid-template-columns: 1fr;
			min-height: auto;
		}

		.hero-panel {
			order: -1;
			min-height: 22rem;
		}

		h1 {
			max-width: 100%;
		}
	}
</style>
