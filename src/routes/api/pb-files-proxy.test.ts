import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { GET } from './pb-files/[collectionId]/[recordId]/[filename]/+server';

const { mockEnv } = vi.hoisted(() => ({
	mockEnv: { PB_URL: undefined as string | undefined }
}));

vi.mock('$env/dynamic/private', () => ({
	env: mockEnv
}));

describe('PocketBase file proxy route', () => {
	beforeEach(() => {
		mockEnv.PB_URL = 'https://pocketbase.oscilla.test/';
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('throws a 500 error when PB_URL is missing', async () => {
		mockEnv.PB_URL = undefined;

		await expect(
			GET({
				params: { collectionId: 'col', recordId: 'rec', filename: 'file.jpg' },
				fetch: vi.fn()
			} as never)
		).rejects.toMatchObject({ status: 500 });
	});

	it('fetches the upstream file with a normalized PocketBase URL', async () => {
		const fetchMock = vi.fn().mockResolvedValue(
			new Response('image-content', {
				status: 200,
				headers: {
					'content-type': 'image/jpeg',
					'cache-control': 'public, max-age=3600'
				}
			})
		);

		const response = await GET({
			params: { collectionId: 'col', recordId: 'rec', filename: 'file.jpg' },
			fetch: fetchMock
		} as never);

		expect(fetchMock).toHaveBeenCalledWith(
			'https://pocketbase.oscilla.test/api/files/col/rec/file.jpg'
		);
		expect(response.status).toBe(200);
		expect(response.headers.get('content-type')).toBe('image/jpeg');
		expect(response.headers.get('cache-control')).toBe('public, max-age=3600');
		expect(await response.text()).toBe('image-content');
	});

	it('propagates the upstream error status', async () => {
		const fetchMock = vi.fn().mockResolvedValue(new Response('missing', { status: 404 }));

		await expect(
			GET({
				params: { collectionId: 'col', recordId: 'rec', filename: 'missing.jpg' },
				fetch: fetchMock
			} as never)
		).rejects.toMatchObject({ status: 404 });
		expect(fetchMock).toHaveBeenCalledOnce();
	});
});
