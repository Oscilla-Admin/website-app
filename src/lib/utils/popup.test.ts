import { get } from 'svelte/store';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { closePopup, openPopup, popupStore } from './popup';

describe('popup store', () => {
	beforeEach(() => {
		vi.useFakeTimers();
		popupStore.set({ isOpen: false, title: '', content: null, data: null });
	});

	afterEach(() => {
		vi.useRealTimers();
		popupStore.set({ isOpen: false, title: '', content: null, data: null });
	});

	it('opens the popup with title, content and data', () => {
		const content = vi.fn() as never;
		const data = { id: 'project-1' };

		openPopup('Project', content, data);

		expect(get(popupStore)).toEqual({
			isOpen: true,
			title: 'Project',
			content,
			data
		});
	});

	it('closes immediately then clears content after the animation delay', () => {
		const content = vi.fn() as never;
		openPopup('Project', content, { id: 'project-1' });

		closePopup();

		expect(get(popupStore)).toMatchObject({ isOpen: false, title: 'Project', content });

		vi.advanceTimersByTime(599);
		expect(get(popupStore)).toMatchObject({ title: 'Project', content });

		vi.advanceTimersByTime(1);
		expect(get(popupStore)).toEqual({ isOpen: false, title: '', content: null, data: null });
	});

	it('does not clear a popup reopened before the close delay ends', () => {
		openPopup('First', vi.fn() as never, { id: 'first' });
		closePopup();
		openPopup('Second', vi.fn() as never, { id: 'second' });

		vi.advanceTimersByTime(600);

		expect(get(popupStore)).toMatchObject({
			isOpen: true,
			title: 'Second',
			data: { id: 'second' }
		});
	});
});
