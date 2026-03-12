import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';

export async function GET({ params, fetch }) {
    const { collectionId, recordId, filename } = params;
    const baseUrl = env.PB_URL?.replace(/\/$/, '');

    if (!baseUrl) {
        throw error(500, 'PB_URL is not configured');
    }

    const upstreamUrl = `${baseUrl}/api/files/${collectionId}/${recordId}/${filename}`;
    const response = await fetch(upstreamUrl);

    if (!response.ok) {
        throw error(response.status, `PocketBase file proxy error: ${response.status}`);
    }

    const headers = new Headers();
    const contentType = response.headers.get('content-type');
    const cacheControl = response.headers.get('cache-control');

    if (contentType) headers.set('content-type', contentType);
    if (cacheControl) headers.set('cache-control', cacheControl);

    return new Response(response.body, {
        status: response.status,
        headers
    });
}
