import { afterEach, describe, expect, it, vi } from 'vitest';
import { getContactEmail } from './contact';

describe('getContactEmail', () => {
	afterEach(() => {
		vi.restoreAllMocks();
		vi.unstubAllGlobals();
	});

	it('returns the email from the contact API', async () => {
		const fetchMock = vi.fn().mockResolvedValue({
			json: vi.fn().mockResolvedValue({ email: 'contact@oscilla.test' })
		});
		vi.stubGlobal('fetch', fetchMock);

		await expect(getContactEmail()).resolves.toBe('contact@oscilla.test');
		expect(fetchMock).toHaveBeenCalledWith('/api/contact');
	});

	it('returns null when the request fails', async () => {
		vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network error')));
		const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);

		await expect(getContactEmail()).resolves.toBeNull();
		expect(consoleError).toHaveBeenCalledOnce();
	});
});
