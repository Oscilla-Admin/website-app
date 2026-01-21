import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects';
import { activities } from '$lib/data/activities';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const project = projects.find((p) => p.id === params.id);

	if (!project) {
		throw error(404, 'Projet non trouvé');
	}

	// Récupérer l'activité liée
	const activity = activities.find((a) => a.id === project.activityId);

	return {
		project,
		activity
	};
};
