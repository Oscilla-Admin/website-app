import { json } from '@sveltejs/kit';
import { checkDBConnection } from '$lib/utils/db_test';

export async function GET() {
    const status = await checkDBConnection();
    return json(status);
}
