import { json } from '@sveltejs/kit';
import { getNews } from '$lib/utils/db';

export async function GET() {
    try {
        const news = await getNews();
        return json(news);
    } catch (error) {
        return json([]);
    }
}
