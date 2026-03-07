/**
 * Gère le défilement latéral du carrousel
 * @param container L'élément HTML du conteneur de défilement
 * @param direction La direction du défilement ('left' ou 'right')
 */
export function scrollCarousel(container: HTMLElement | null, direction: 'left' | 'right') {
    if (!container) return;

    // On récupère la largeur d'un item (le premier enfant direct)
    const firstItem = container.firstElementChild as HTMLElement;
    if (!firstItem) return;

    const itemWidth = firstItem.offsetWidth;
    const gap = 24; // Correspond à gap-6 (1.5rem = 24px)
    const scrollAmount = itemWidth + gap;

    container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
    });
}
