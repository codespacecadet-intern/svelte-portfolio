<script lang="ts">
	import { projectCategories } from '$lib/data/portfolio';

	let {
		value,
		onSelect
	}: { value: string; onSelect: (category: string) => void } = $props();
</script>

<div class="filters" role="tablist" aria-label="Project categories">
	{#each projectCategories as category}
		<button
			type="button"
			role="tab"
			aria-selected={value === category.id}
			class:selected={value === category.id}
			onclick={() => onSelect(category.id)}
		>
			{category.label}
		</button>
	{/each}
</div>

<style>
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	button {
		border: 1px solid var(--border);
		background: var(--surface-strong);
		color: var(--text-main);
		border-radius: 999px;
		padding: 0.72rem 1rem;
		font: inherit;
		cursor: pointer;
	}

	.selected {
		background: color-mix(in oklab, var(--accent) 22%, var(--surface));
		border-color: color-mix(in oklab, var(--accent) 65%, var(--border-strong));
	}
</style>
