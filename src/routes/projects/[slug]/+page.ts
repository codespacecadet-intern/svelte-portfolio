import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/portfolio';

export function load({ params }) {
	const project = projects.find((entry) => entry.slug === params.slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return { project };
}
