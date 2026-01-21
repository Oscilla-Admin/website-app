import { paraglideMiddleware } from '$paraglide/server.js';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	return paraglideMiddleware(event.request, ({ request, locale }) => {
		event.locals.locale = locale;
		return resolve(event);
	});
};
