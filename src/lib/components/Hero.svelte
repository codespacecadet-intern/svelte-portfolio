<script lang="ts">
	import { platformStats, profile, systemSignals } from '$lib/data/portfolio';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<section class="hero" id="top" aria-labelledby="hero-title">
	<div class="hero-copy">
		<p class="eyebrow">Secure frontend systems / SvelteKit portfolio / 2026</p>
		<h1 id="hero-title">{profile.name}</h1>
		<p class="title">{profile.title} for product teams building serious web software.</p>
		<p class="intro">{profile.introduction}</p>

		<div class="hero-cta">
			<a class="button primary" href="#projects">Inspect work</a>
			<a class="button secondary" href="/resume">View resume</a>
			<a class="button tertiary" href={`mailto:${profile.email}`}>Start hiring conversation</a>
		</div>

		<nav aria-label="Social links" class="hero-links">
			{#each profile.heroSocials as social}
				<a href={social.url} target="_blank" rel="noreferrer">{social.label}</a>
			{/each}
		</nav>

		<ThemeToggle />
	</div>

	<div class="ops-console" aria-label="Frontend operations profile">
		<div class="console-top">
			<div>
				<span class="window-label">agent.profile</span>
				<strong>{profile.availability}</strong>
			</div>
			<span class="live-dot">Live</span>
		</div>

		<div class="identity-block">
			<span>Candidate signal</span>
			<strong>Frontend systems engineer</strong>
			<p>Command surfaces, secure UX patterns, responsive dashboards, and production-minded interaction detail.</p>
		</div>

		<div class="signal-grid">
			{#each systemSignals as signal}
				<div class="signal">
					<span>{signal.label}</span>
					<strong>{signal.value}</strong>
					<small>{signal.status}</small>
				</div>
			{/each}
		</div>

		<div class="terminal" aria-label="Portfolio build telemetry">
			<div class="terminal-bar">
				<span></span>
				<span></span>
				<span></span>
				<p>portfolio/security-agent</p>
			</div>
			<pre><code>$ verify candidate --focus frontend
accessibility: visible
performance: lean
interfaces: product-grade
status: ready_for_interview</code></pre>
		</div>
	</div>

	<div class="proof-strip" aria-label="Portfolio engineering signals">
		{#each platformStats as stat}
			<div>
				<span>{stat.label}</span>
				<strong>{stat.value}</strong>
				<p>{stat.detail}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.hero {
		display: grid;
		grid-template-columns: minmax(0, 1.02fr) minmax(22rem, 0.98fr);
		gap: clamp(1.5rem, 4vw, 3.5rem);
		align-items: center;
		min-height: 88vh;
		padding-top: 3rem;
	}

	.hero-copy {
		display: grid;
		gap: 1.15rem;
	}

	.eyebrow,
	.title,
	.intro {
		margin: 0;
	}

	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.16em;
		font-size: 0.75rem;
		color: var(--text-soft);
	}

	h1 {
		margin: 0;
		font-size: clamp(3.25rem, 9vw, 7rem);
		line-height: 0.9;
		max-width: 8ch;
		letter-spacing: 0;
	}

	.title {
		max-width: 42rem;
		font-size: clamp(1.15rem, 2vw, 1.45rem);
		color: var(--accent-soft);
	}

	.intro {
		max-width: 43rem;
		font-size: 1.06rem;
		color: var(--text-muted);
	}

	.hero-cta,
	.hero-links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 3rem;
		padding: 0.82rem 1.08rem;
		border-radius: 0.8rem;
		text-decoration: none;
		font-weight: 700;
		transition:
			transform 180ms ease,
			border-color 180ms ease,
			background 180ms ease;
	}

	.primary {
		background: var(--accent);
		color: #08111a;
		box-shadow: 0 18px 42px color-mix(in oklab, var(--accent) 22%, transparent);
	}

	.secondary,
	.tertiary {
		color: var(--text-main);
		border: 1px solid var(--border-strong);
		background: color-mix(in oklab, var(--surface-strong) 78%, transparent);
	}

	.tertiary {
		border-color: color-mix(in oklab, var(--accent-2) 45%, var(--border-strong));
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

	.ops-console {
		position: relative;
		display: grid;
		gap: 1rem;
		padding: clamp(1rem, 2vw, 1.25rem);
		border: 1px solid var(--border-strong);
		border-radius: 1rem;
		background:
			linear-gradient(180deg, color-mix(in oklab, var(--surface-strong) 92%, transparent), var(--surface)),
			repeating-linear-gradient(90deg, transparent 0 32px, color-mix(in oklab, var(--accent) 7%, transparent) 32px 33px);
		box-shadow: var(--shadow);
		overflow: hidden;
	}

	.ops-console::before {
		content: '';
		position: absolute;
		inset: 0;
		background:
			linear-gradient(90deg, transparent, color-mix(in oklab, var(--accent) 10%, transparent), transparent),
			linear-gradient(180deg, transparent 0 52%, color-mix(in oklab, var(--accent-2) 8%, transparent) 52% 53%, transparent 53%);
		pointer-events: none;
	}

	.console-top,
	.identity-block,
	.signal,
	.terminal {
		position: relative;
		z-index: 1;
	}

	.console-top {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		align-items: start;
		padding-bottom: 0.9rem;
		border-bottom: 1px solid var(--border);
	}

	.console-top div,
	.identity-block {
		display: grid;
		gap: 0.35rem;
	}

	.window-label,
	.identity-block span,
	.signal span,
	.signal small {
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-size: 0.68rem;
		color: var(--text-soft);
	}

	.console-top strong,
	.identity-block strong,
	.signal strong {
		color: var(--text-main);
	}

	.live-dot {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.45rem 0.65rem;
		border-radius: 999px;
		border: 1px solid color-mix(in oklab, var(--accent) 44%, var(--border-strong));
		background: color-mix(in oklab, var(--accent) 13%, transparent);
		color: var(--accent-soft);
		font-size: 0.82rem;
		font-weight: 700;
	}

	.live-dot::before {
		content: '';
		width: 0.48rem;
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--accent);
		box-shadow: 0 0 0 5px color-mix(in oklab, var(--accent) 14%, transparent);
	}

	.identity-block {
		padding: 1rem;
		border: 1px solid var(--border);
		border-radius: 0.85rem;
		background: color-mix(in oklab, var(--surface) 76%, transparent);
	}

	.identity-block strong {
		font-size: clamp(1.45rem, 3vw, 2.35rem);
		line-height: 1;
	}

	.identity-block p {
		margin: 0;
		color: var(--text-muted);
	}

	.signal-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.8rem;
	}

	.signal {
		display: grid;
		gap: 0.32rem;
		min-height: 7rem;
		padding: 0.9rem;
		border: 1px solid var(--border);
		border-radius: 0.8rem;
		background: color-mix(in oklab, var(--surface-strong) 76%, transparent);
	}

	.signal small {
		align-self: end;
		color: var(--accent-soft);
	}

	.terminal {
		overflow: hidden;
		border: 1px solid var(--border);
		border-radius: 0.85rem;
		background: #071018;
	}

	.terminal-bar {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.65rem 0.8rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		color: #94a9bb;
	}

	.terminal-bar span {
		width: 0.55rem;
		aspect-ratio: 1;
		border-radius: 50%;
		background: #da6b5f;
	}

	.terminal-bar span:nth-child(2) {
		background: #e2b85c;
	}

	.terminal-bar span:nth-child(3) {
		background: #78d29b;
	}

	.terminal-bar p {
		margin: 0 0 0 0.35rem;
		font-size: 0.78rem;
	}

	pre {
		margin: 0;
		padding: 0.9rem;
		overflow: auto;
		color: #cde7dc;
		font: 0.88rem/1.65 ui-monospace, SFMono-Regular, Consolas, monospace;
	}

	.proof-strip {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.9rem;
	}

	.proof-strip div {
		display: grid;
		gap: 0.35rem;
		min-height: 7rem;
		padding: 1rem;
		border: 1px solid var(--border-strong);
		border-radius: 0.9rem;
		background: color-mix(in oklab, var(--surface-strong) 76%, transparent);
	}

	.proof-strip span {
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-size: 0.7rem;
		color: var(--text-soft);
	}

	.proof-strip strong {
		font-size: 1.12rem;
	}

	.proof-strip p {
		margin: 0;
		color: var(--text-muted);
	}

	@media (max-width: 920px) {
		.hero {
			grid-template-columns: 1fr;
			min-height: auto;
		}

		h1 {
			max-width: 100%;
		}
	}

	@media (max-width: 680px) {
		.signal-grid,
		.proof-strip {
			grid-template-columns: 1fr;
		}
	}
</style>
