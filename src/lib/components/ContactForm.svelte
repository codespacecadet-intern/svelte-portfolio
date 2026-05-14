<script lang="ts">
	import { profile } from '$lib/data/portfolio';
	import { sanitizeText } from '$lib/utils/sanitize';

	type Status = 'idle' | 'error' | 'success';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let status = $state<Status>('idle');
	let feedback = $state('');

	const submitForm = () => {
		const safeName = sanitizeText(name);
		const safeEmail = sanitizeText(email);
		const safeMessage = sanitizeText(message);

		if (!safeName || !safeEmail || !safeMessage) {
			status = 'error';
			feedback = 'Please complete all fields before sending.';
			return;
		}

		const mailto = new URL(`mailto:${profile.email}`);
		mailto.searchParams.set('subject', `Portfolio inquiry from ${safeName}`);
		mailto.searchParams.set(
			'body',
			`Name: ${safeName}\nEmail: ${safeEmail}\n\nMessage:\n${safeMessage}`
		);

		status = 'success';
		feedback = 'Opening your email client with a prefilled message.';
		window.location.href = mailto.toString();
	};
</script>

<form
	class="contact-form"
	id="contact"
	onsubmit={(event) => {
		event.preventDefault();
		submitForm();
	}}
	aria-describedby="contact-feedback"
>
	<div class="field">
		<label for="name">Name</label>
		<input id="name" bind:value={name} name="name" autocomplete="name" />
	</div>
	<div class="field">
		<label for="email">Email</label>
		<input id="email" bind:value={email} name="email" type="email" autocomplete="email" />
	</div>
	<div class="field">
		<label for="message">Message</label>
		<textarea id="message" bind:value={message} name="message" rows="6"></textarea>
	</div>
	<div class="actions">
		<button type="submit">Start the conversation</button>
		<a href={`mailto:${profile.email}`}>Or email directly</a>
	</div>
	<p id="contact-feedback" class:success={status === 'success'} class:error={status === 'error'}>
		{feedback || 'Your message stays on-device until you choose to send it through your email client.'}
	</p>
</form>

<style>
	.contact-form {
		display: grid;
		gap: 1rem;
		padding: clamp(1.2rem, 2vw, 1.5rem);
		border-radius: 1.5rem;
		border: 1px solid var(--border-strong);
		background: color-mix(in oklab, var(--surface-strong) 80%, transparent);
		box-shadow: var(--shadow-soft);
	}

	.field {
		display: grid;
		gap: 0.45rem;
	}

	label {
		font-weight: 600;
	}

	input,
	textarea {
		width: 100%;
		border-radius: 1rem;
		border: 1px solid var(--border);
		background: var(--surface);
		color: var(--text-main);
		font: inherit;
		padding: 0.85rem 1rem;
	}

	textarea {
		resize: vertical;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.8rem;
	}

	button {
		border: 0;
		background: linear-gradient(135deg, var(--accent), var(--accent-2));
		color: #09111f;
		border-radius: 999px;
		padding: 0.9rem 1.1rem;
		font: inherit;
		font-weight: 700;
		cursor: pointer;
	}

	a {
		color: var(--text-main);
	}

	p {
		margin: 0;
		color: var(--text-soft);
	}

	.success {
		color: color-mix(in oklab, var(--accent) 75%, white);
	}

	.error {
		color: #ff9b9b;
	}
</style>
