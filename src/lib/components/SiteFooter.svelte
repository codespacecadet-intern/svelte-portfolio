<script lang="ts">
	import { profile } from "$lib/data/portfolio";

	const iconPaths: Record<string, string> = {
		Facebook:
			"M13.5 21v-7h2.3l.4-2.7h-2.7V9.6c0-.78.22-1.3 1.34-1.3H16.3V5.9c-.25-.03-1.1-.1-2.08-.1-2.06 0-3.47 1.26-3.47 3.57v1.99H8.4V14h2.35v7h2.75Z",
		WhatsApp:
			"M12 2.2c-5.41 0-9.8 4.29-9.8 9.58 0 1.69.45 3.34 1.29 4.8L2 22l5.63-1.47a10.01 10.01 0 0 0 4.37 1c5.4 0 9.8-4.29 9.8-9.58 0-5.29-4.4-9.75-9.8-9.75Zm0 17.56a8.3 8.3 0 0 1-4.22-1.14l-.3-.18-3.34.87.89-3.24-.2-.33a8.05 8.05 0 0 1-1.24-4.26c0-4.5 3.76-8.16 8.41-8.16 4.63 0 8.4 3.66 8.4 8.16 0 4.5-3.77 8.28-8.4 8.28Zm4.61-6.18c-.25-.12-1.47-.71-1.69-.79-.23-.08-.4-.12-.57.12-.17.25-.65.79-.8.95-.15.17-.3.19-.55.06-.25-.12-1.04-.38-1.98-1.2-.73-.64-1.22-1.44-1.37-1.68-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.57-1.36-.78-1.86-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.85-.88 2.07 0 1.22.9 2.4 1.02 2.56.13.17 1.77 2.8 4.39 3.81.62.27 1.1.43 1.48.55.62.19 1.18.16 1.62.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z",
		Instagram:
			"M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 1.8A3.8 3.8 0 0 0 3.8 7.6v8.8a3.8 3.8 0 0 0 3.8 3.8h8.8a3.8 3.8 0 0 0 3.8-3.8V7.6a3.8 3.8 0 0 0-3.8-3.8H7.6Zm8.95 1.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 6.85A5.15 5.15 0 1 1 6.85 12 5.16 5.16 0 0 1 12 6.85Zm0 1.8A3.35 3.35 0 1 0 15.35 12 3.35 3.35 0 0 0 12 8.65Z",
		YouTube:
			"M21.8 8.2a2.78 2.78 0 0 0-1.95-1.97C18.1 5.75 12 5.75 12 5.75s-6.1 0-7.85.48A2.78 2.78 0 0 0 2.2 8.2c-.47 1.76-.47 3.8-.47 3.8s0 2.04.47 3.8a2.78 2.78 0 0 0 1.95 1.97c1.75.48 7.85.48 7.85.48s6.1 0 7.85-.48a2.78 2.78 0 0 0 1.95-1.97c.47-1.76.47-3.8.47-3.8s0-2.04-.47-3.8ZM9.75 15.13V8.87L15.25 12l-5.5 3.13Z",
	};
</script>

<footer class="site-footer">
	<p>
		Built with SvelteKit, accessibility discipline, and product-level
		frontend care.
	</p>
	<nav aria-label="Social media links" class="social-links">
		{#each profile.footerSocials as social}
			<a
				href={social.url}
				target="_blank"
				rel="noreferrer"
				aria-label={social.label}
				title={social.label}
			>
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path d={iconPaths[social.label]} />
				</svg>
			</a>
		{/each}
	</nav>
</footer>

<style>
	.site-footer {
		margin-top: 5rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--border-strong);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.site-footer p {
		margin: 0;
		color: var(--text-soft);
	}

	.social-links {
		display: flex;
		gap: 0.85rem;
		justify-content: center;
	}

	.social-links a {
		width: 2.8rem;
		height: 2.8rem;
		display: inline-grid;
		place-items: center;
		border-radius: 50%;
		border: 1px solid var(--border-strong);
		background: color-mix(in oklab, var(--surface-strong) 78%, transparent);
		color: var(--text-main);
		text-decoration: none;
		transition:
			transform 180ms ease,
			border-color 180ms ease,
			background 180ms ease;
	}

	.social-links a:hover {
		transform: translateY(-2px);
		border-color: color-mix(
			in oklab,
			var(--accent) 55%,
			var(--border-strong)
		);
	}

	svg {
		width: 1.2rem;
		height: 1.2rem;
		fill: currentColor;
	}
</style>
