import { json } from '@sveltejs/kit';
import { getActivities } from '$lib/utils/db';
import { activities as staticActivities } from '$lib/data/activities';

export async function GET() {
    try {
        const activities = await getActivities();
        return json(activities.length > 0 ? activities : staticActivities);
    } catch (error) {
        return json(staticActivities);
    }
}
