import { activities as staticActivities } from '$lib/data/activities';
import { technicalTools as staticTechnicalTools } from '$lib/data/technicals_tools';
import { projects as staticProjects } from '$lib/data/projects';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch }) => {
	try {
		const [resActivities, resTools, resProjects, resContent, resNews] = await Promise.all([
			fetch('/api/activities'),
			fetch('/api/technical-tools'),
			fetch('/api/projects'),
			fetch('/api/site-content'),
			fetch('/api/news')
		]);

		const activities = resActivities.ok ? await resActivities.json() : staticActivities;
		const technicalTools = resTools.ok ? await resTools.json() : staticTechnicalTools;
		const projects = resProjects.ok ? await resProjects.json() : staticProjects;
		const siteContent = resContent.ok ? await resContent.json() : {};
		const news = resNews.ok ? await resNews.json() : [];

		return {
			activities,
			technicalTools,
			projects,
			siteContent,
			news
		};
	} catch (error) {
		console.error('API fetch error:', error);
		return {
			activities: staticActivities,
			technicalTools: staticTechnicalTools,
			projects: staticProjects,
			siteContent: {},
			news: []
		};
	}
};
