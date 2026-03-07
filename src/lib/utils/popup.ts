import { writable } from 'svelte/store';
import type { Snippet } from 'svelte';

interface PopupState {
    isOpen: boolean;
    title: any; // Peut être une string ou un objet de trad
    content: Snippet<[any]> | null;
    data: any | null;
}

export const popupStore = writable<PopupState>({
    isOpen: false,
    title: '',
    content: null,
    data: null
});

export const openPopup = (title: any, content: Snippet<[any]>, data: any) => {
    popupStore.set({
        isOpen: true,
        title,
        content,
        data
    });
};

export const closePopup = () => {
    popupStore.update(state => ({ ...state, isOpen: false }));
    setTimeout(() => {
        popupStore.update(state => {
            if (!state.isOpen) {
                return { ...state, content: null, title: '', data: null };
            }
            return state;
        });
    }, 600);
};
