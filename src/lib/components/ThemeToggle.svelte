<script lang="ts">
	import { preferences } from '$lib/stores/preferences.svelte';
</script>

<div class="controls" aria-label="Display controls">
	<button
		type="button"
		class="control icon-control"
		onclick={() => preferences.toggleTheme()}
		aria-label={preferences.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
		title={preferences.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
	>
		{#if preferences.theme === 'dark'}
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path
					d="M12 4.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V5.5a.75.75 0 0 1 .75-.75Zm0 12.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V18a.75.75 0 0 1 .75-.75Zm7.25-5.25a.75.75 0 0 1-.75.75H17a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM7 12.75H5.5a.75.75 0 0 1 0-1.5H7a.75.75 0 0 1 0 1.5Zm8.359-4.609a.75.75 0 0 1 0-1.06l1.06-1.061a.75.75 0 1 1 1.061 1.06l-1.06 1.061a.75.75 0 0 1-1.061 0Zm-7.778 7.778a.75.75 0 0 1 0-1.06l1.06-1.061a.75.75 0 1 1 1.061 1.06l-1.06 1.061a.75.75 0 0 1-1.061 0Zm8.839 1.061-1.06-1.061a.75.75 0 0 1 1.06-1.06l1.061 1.06a.75.75 0 0 1-1.06 1.061Zm-7.778-7.778L7.58 8.14A.75.75 0 1 1 8.64 7.08L9.702 8.14a.75.75 0 0 1-1.06 1.061ZM12 8.25A3.75 3.75 0 1 1 8.25 12 3.754 3.754 0 0 1 12 8.25Zm0 1.5A2.25 2.25 0 1 0 14.25 12 2.253 2.253 0 0 0 12 9.75Z"
				/>
			</svg>
		{:else}
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path
					d="M14.989 3.35a.75.75 0 0 1 .816.99 7.49 7.49 0 0 0 9.492 9.493.75.75 0 0 1 .99.815A9.003 9.003 0 1 1 14.989 3.35Z"
					transform="translate(-2 -2) scale(0.92)"
				/>
			</svg>
		{/if}
	</button>
	<button type="button" class="control" onclick={() => preferences.toggleMotion()}>
		{preferences.reducedMotion ? 'Enable motion' : 'Reduce motion'}
	</button>
</div>

<style>
	.controls {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}

	.control {
		border: 1px solid var(--border-strong);
		background: color-mix(in oklab, var(--surface-strong) 80%, transparent);
		color: var(--text-main);
		border-radius: 0.5rem;
		padding: 0.72rem 1rem;
		font: inherit;
		cursor: pointer;
		transition:
			transform 180ms ease,
			border-color 180ms ease,
			background 180ms ease;
	}

	.control:hover {
		transform: translateY(-2px);
		border-color: var(--accent);
	}

	.icon-control {
		position: relative;
		width: 3.15rem;
		height: 3.15rem;
		padding: 0;
		border-radius: 0.5rem;
		display: inline-grid;
		place-items: center;
		background:
			linear-gradient(
				135deg,
				color-mix(in oklab, var(--surface-strong) 84%, transparent),
				color-mix(in oklab, var(--surface) 92%, transparent)
			);
		box-shadow:
			inset 0 1px 0 color-mix(in oklab, white 12%, transparent),
			0 12px 30px color-mix(in oklab, var(--accent) 10%, transparent);
		overflow: hidden;
	}

	.icon-control::before {
		content: '';
		position: absolute;
		inset: 0.3rem;
		border-radius: 0.35rem;
		background:
			radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 58%),
			transparent;
		opacity: 0.95;
		pointer-events: none;
	}

	.icon-control svg {
		position: relative;
		z-index: 1;
		width: 1.28rem;
		height: 1.28rem;
		fill: currentColor;
		transition:
			transform 180ms ease,
			opacity 180ms ease;
	}

	.icon-control:hover svg {
		transform: rotate(10deg) scale(1.06);
	}

	.icon-control:focus-visible {
		outline-offset: 4px;
	}
</style>
