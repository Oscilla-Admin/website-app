import { json } from '@sveltejs/kit';
import { getProjects } from '$lib/utils/db';
import { projects as staticProjects } from '$lib/data/projects';

export async function GET() {
    try {
        const projects = await getProjects();
        return json(projects.length > 0 ? projects : staticProjects);
    } catch (error) {
        return json(staticProjects);
    }
}
