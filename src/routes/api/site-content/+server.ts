import { json } from '@sveltejs/kit';
import { getSiteContent } from '$lib/utils/db';

export async function GET() {
    try {
        const content = await getSiteContent();
        return json(content);
    } catch (error) {
        return json({});
    }
}
