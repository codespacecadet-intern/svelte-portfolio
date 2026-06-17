<script lang="ts">
	import { goto } from '$app/navigation';
	import { profile, projects } from '$lib/data/portfolio';
	import { preferences } from '$lib/stores/preferences.svelte';
	import { onMount } from 'svelte';

	type Command = {
		id: string;
		label: string;
		hint: string;
		run: () => void;
	};

	let open = $state(false);
	let query = $state('');
	let activeIndex = $state(0);
	let searchInput = $state<HTMLInputElement | null>(null);

	const baseCommands = (): Command[] => [
		{
			id: 'projects',
			label: 'Jump to projects',
			hint: 'Scroll navigation',
			run: () => goto('/#projects')
		},
		{
			id: 'contact',
			label: 'Jump to contact',
			hint: 'Scroll navigation',
			run: () => goto('/#contact-shell')
		},
		{
			id: 'hiring',
			label: 'Jump to hiring signal',
			hint: 'Recruiter path',
			run: () => goto('/#hiring')
		},
		{
			id: 'theme',
			label: preferences.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
			hint: 'Display',
			run: () => preferences.toggleTheme()
		},
		{
			id: 'motion',
			label: preferences.reducedMotion ? 'Enable motion' : 'Reduce motion',
			hint: 'Accessibility',
			run: () => preferences.toggleMotion()
		},
		{
			id: 'email',
			label: 'Send email',
			hint: profile.email,
			run: () => window.open(`mailto:${profile.email}`, '_self')
		},
		...projects.map((project) => ({
			id: project.slug,
			label: `Open ${project.title}`,
			hint: 'Project case study',
			run: () => goto(`/projects/${project.slug}`)
		}))
	];

	const filteredCommands = $derived.by(() => {
		const lowerQuery = query.toLowerCase().trim();
		const all = baseCommands();

		if (!lowerQuery) return all;
		return all.filter((command) =>
			`${command.label} ${command.hint}`.toLowerCase().includes(lowerQuery)
		);
	});

	const closePalette = () => {
		open = false;
		query = '';
		activeIndex = 0;
	};

	const runActive = () => {
		const selected = filteredCommands[activeIndex];
		if (!selected) return;
		selected.run();
		closePalette();
	};

	onMount(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			const shortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k';
			if (shortcut) {
				event.preventDefault();
				open = !open;
				if (open) queueMicrotask(() => searchInput?.focus());
				return;
			}

			if (!open) return;

			if (event.key === 'Escape') closePalette();
			if (event.key === 'ArrowDown') {
				event.preventDefault();
				activeIndex = Math.min(activeIndex + 1, filteredCommands.length - 1);
			}
			if (event.key === 'ArrowUp') {
				event.preventDefault();
				activeIndex = Math.max(activeIndex - 1, 0);
			}
			if (event.key === 'Enter') {
				event.preventDefault();
				runActive();
			}
		};

		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	});
</script>

<button type="button" class="palette-trigger" onclick={() => (open = true)}>
	Command palette
	<span>Ctrl/Cmd + K</span>
</button>

{#if open}
	<div class="palette-backdrop" role="presentation" onclick={closePalette}></div>
	<div
		class="palette"
		role="dialog"
		aria-modal="true"
		aria-labelledby="palette-title"
	>
		<div class="palette-header">
			<h2 id="palette-title">Command palette</h2>
			<button type="button" onclick={closePalette}>Close</button>
		</div>
		<input
			bind:this={searchInput}
			bind:value={query}
			type="text"
			placeholder="Search actions, sections, and projects"
			aria-label="Search commands"
		/>
		<ul class="palette-results">
			{#each filteredCommands as command, index (command.id)}
				<li>
					<button
						type="button"
						class:active={index === activeIndex}
						onmouseenter={() => (activeIndex = index)}
						onclick={() => {
							activeIndex = index;
							runActive();
						}}
					>
						<span>{command.label}</span>
						<small>{command.hint}</small>
					</button>
				</li>
			{/each}
			{#if filteredCommands.length === 0}
				<li class="empty">No matching commands.</li>
			{/if}
		</ul>
	</div>
{/if}

<style>
	.palette-trigger {
		border: 1px solid var(--border-strong);
		background: color-mix(in oklab, var(--surface-strong) 82%, transparent);
		color: var(--text-main);
		border-radius: 0.5rem;
		padding: 0.8rem 1rem;
		font: inherit;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
	}

	.palette-trigger span {
		color: var(--text-soft);
		font-size: 0.88rem;
	}

	.palette-backdrop {
		position: fixed;
		inset: 0;
		background: rgba(5, 11, 21, 0.55);
		backdrop-filter: blur(10px);
		z-index: 39;
	}

	.palette {
		position: fixed;
		inset: 12vh auto auto 50%;
		transform: translateX(-50%);
		width: min(92vw, 42rem);
		padding: 1rem;
		border-radius: 0.75rem;
		border: 1px solid var(--border-strong);
		background: var(--surface);
		box-shadow: var(--shadow);
		z-index: 40;
		display: grid;
		gap: 0.9rem;
	}

	.palette-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.palette-header h2 {
		margin: 0;
		font-size: 1.1rem;
	}

	.palette-header button,
	input,
	.palette-results button {
		font: inherit;
	}

	input {
		width: 100%;
		border-radius: 0.5rem;
		border: 1px solid var(--border);
		background: var(--surface-strong);
		color: var(--text-main);
		padding: 0.95rem 1rem;
	}

	.palette-results {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 0.45rem;
		max-height: min(50vh, 24rem);
		overflow: auto;
	}

	.palette-results button {
		width: 100%;
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		text-align: left;
		padding: 0.95rem 1rem;
		border-radius: 0.5rem;
		border: 1px solid transparent;
		background: transparent;
		color: var(--text-main);
		cursor: pointer;
	}

	.palette-results button.active,
	.palette-results button:hover {
		border-color: var(--border-strong);
		background: color-mix(in oklab, var(--surface-strong) 88%, transparent);
	}

	small,
	.empty {
		color: var(--text-soft);
	}
</style>
