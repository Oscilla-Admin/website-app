import { writable } from 'svelte/store';

export const isPageLoading = writable(false);

export const startPageLoader = () => {
    isPageLoading.set(true);
};

export const stopPageLoader = () => {
    // On laisse toujours un petit délai pour la fluidité
    setTimeout(() => {
        isPageLoading.set(false);
    }, 1200);
};
