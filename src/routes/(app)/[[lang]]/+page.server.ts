import { activities as staticActivities } from '$lib/data/activities';
import { technicalTools as staticTechnicalTools } from '$lib/data/technicals_tools';
import { projects as staticProjects } from '$lib/data/projects';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
    try {
        // On appelle nos propres routes API SvelteKit au lieu de taper directement dans la DB
        const [resActivities, resTools, resProjects, resContent] = await Promise.all([
            fetch('/api/activities'),
            fetch('/api/technical-tools'),
            fetch('/api/projects'),
            fetch('/api/site-content')
        ]);

        const activities = resActivities.ok ? await resActivities.json() : staticActivities;
        const technicalTools = resTools.ok ? await resTools.json() : staticTechnicalTools;
        const projects = resProjects.ok ? await resProjects.json() : staticProjects;
        const siteContent = resContent.ok ? await resContent.json() : {};

        return {
            activities,
            technicalTools,
            projects,
            siteContent
        };
    } catch (error) {
        console.error("API fetch error:", error);
        return {
            activities: staticActivities,
            technicalTools: staticTechnicalTools,
            projects: staticProjects,
            siteContent: {}
        };
    }
};
