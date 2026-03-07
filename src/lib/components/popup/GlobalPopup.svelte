<script lang="ts">
    import { popupStore, closePopup } from '$lib/utils/popup';
    import { fade, scale } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import { getLocale } from '$paraglide/runtime.js';

    const locale = getLocale();

    // Bloque le scroll de la page quand la popup est ouverte
    $effect(() => {
        if ($popupStore.isOpen) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
    
        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    });
</script>

{#if $popupStore.isOpen}
    <div 
        class="fixed inset-0 z-[10000] bg-black/70 backdrop-blur-md flex items-center justify-center p-6 md:p-4"
        onclick={closePopup}
        role="button"
        tabindex="0"
        onkeydown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') closePopup();
        }}
        transition:fade={{ duration: 600 }}
    >
        <div 
            class="bg-white p-6 md:p-10 rounded-2xl shadow-2xl max-w-[95%] md:max-w-[85vw] lg:max-w-[1200px] max-h-[98vh] w-full min-h-[50vh] relative cursor-default z-[10001] flex flex-col"
            onclick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            tabindex="-1"
            onkeydown={(e) => e.stopPropagation()} 
            in:scale={{ duration: 600, start: 0.94, opacity: 0, easing: cubicOut }}
            out:scale={{ duration: 450, start: 0.96, opacity: 0, easing: cubicOut }}
        >
            <div class="flex justify-between items-start mb-6 md:mb-8 shrink-0">
                <h2 class="text-2xl md:text-4xl font-black text-gray-900 leading-tight">
                    {typeof $popupStore.title === 'string' ? $popupStore.title : ($popupStore.title?.[locale] || "Détails")}
                </h2>
                <button
                    onclick={closePopup} 
                    class="p-2 -mr-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Fermer la fenêtre"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            
            <div class="overflow-y-auto pr-2 custom-scrollbar">
                {#if $popupStore.content && $popupStore.data}
                    {@render $popupStore.content($popupStore.data)}
                {/if}
            </div>
        </div>
    </div>
{/if}
