import { json } from '@sveltejs/kit';
import { getTechnicalTools } from '$lib/utils/db';
import { technicalTools as staticTechnicalTools } from '$lib/data/technicals_tools';

export async function GET() {
    try {
        const tools = await getTechnicalTools();
        return json(tools.length > 0 ? tools : staticTechnicalTools);
    } catch (error) {
        return json(staticTechnicalTools);
    }
}
