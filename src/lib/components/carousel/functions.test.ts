import { describe, expect, it, vi } from 'vitest';
import { scrollCarousel } from './functions';

describe('scrollCarousel', () => {
	it('does nothing when the container is missing', () => {
		expect(() => scrollCarousel(null, 'right')).not.toThrow();
	});

	it('does nothing when the container has no first item', () => {
		const container = {
			firstElementChild: null,
			scrollBy: vi.fn()
		} as unknown as HTMLElement;

		scrollCarousel(container, 'right');

		expect(container.scrollBy).not.toHaveBeenCalled();
	});

	it('scrolls right by the first item width plus the carousel gap', () => {
		const scrollBy = vi.fn();
		const container = {
			firstElementChild: { offsetWidth: 180 },
			scrollBy
		} as unknown as HTMLElement;

		scrollCarousel(container, 'right');

		expect(scrollBy).toHaveBeenCalledWith({ left: 204, behavior: 'smooth' });
	});

	it('scrolls left by the first item width plus the carousel gap', () => {
		const scrollBy = vi.fn();
		const container = {
			firstElementChild: { offsetWidth: 180 },
			scrollBy
		} as unknown as HTMLElement;

		scrollCarousel(container, 'left');

		expect(scrollBy).toHaveBeenCalledWith({ left: -204, behavior: 'smooth' });
	});
});
