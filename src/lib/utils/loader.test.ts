import { get } from 'svelte/store';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { isPageLoading, startPageLoader, stopPageLoader } from './loader';

describe('page loader store', () => {
	beforeEach(() => {
		vi.useFakeTimers();
		isPageLoading.set(false);
	});

	afterEach(() => {
		vi.useRealTimers();
		isPageLoading.set(false);
	});

	it('starts the page loader immediately', () => {
		startPageLoader();

		expect(get(isPageLoading)).toBe(true);
	});

	it('stops the page loader after the transition delay', () => {
		isPageLoading.set(true);

		stopPageLoader();

		expect(get(isPageLoading)).toBe(true);

		vi.advanceTimersByTime(1199);
		expect(get(isPageLoading)).toBe(true);

		vi.advanceTimersByTime(1);
		expect(get(isPageLoading)).toBe(false);
	});
});
