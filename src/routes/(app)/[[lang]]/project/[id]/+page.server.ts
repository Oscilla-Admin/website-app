import { error } from '@sveltejs/kit';
import { projects as staticProjects } from '$lib/data/projects';
import { activities as staticActivities } from '$lib/data/activities';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	try {
        // On passe par l'API interne pour récupérer tous les projets
        const res = await fetch('/api/projects');
        if (!res.ok) throw new Error();
        
        const projects = await res.json();
		const project = projects.find((p: any) => p.id === params.id);

		if (!project) {
            // Fallback statique si non trouvé en DB
            const staticProject = staticProjects.find((p) => p.id === params.id);
            if (!staticProject) throw error(404, 'Projet non trouvé');
            
            return {
                project: staticProject,
                activity: staticActivities.find(a => a.id === staticProject.activityId)
            };
		}

        // Trouver l'activité via l'API interne
        const resAct = await fetch('/api/activities');
        const activities = resAct.ok ? await resAct.json() : staticActivities;
        const activity = activities.find((a: any) => a.id === project.activityId);

		return {
			project,
			activity
		};
	} catch (err) {
        const staticProject = staticProjects.find((p) => p.id === params.id);
        if (!staticProject) throw error(404, 'Projet non trouvé');

        return {
            project: staticProject,
            activity: staticActivities.find(a => a.id === staticProject.activityId)
        };
	}
};
