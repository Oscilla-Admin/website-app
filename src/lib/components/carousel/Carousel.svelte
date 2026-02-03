<script lang="ts">
    import type { Snippet } from 'svelte';
	import { openPopup, closePopup } from '$lib/utils/popup';

    interface Props {
        items: any[];
        children: Snippet<[any]>;
        popupContent?: Snippet<[any]>;
        initialItemId?: string | null;
    }

    let { items, children, popupContent, initialItemId = null }: Props = $props();
    let selectedItem = $state<any>(null);

    // Ouverture automatique si initialItemId est présent
    $effect(() => {
        if (initialItemId && items.length > 0) {
            const item = items.find(i => i.id === initialItemId);
            if (item && popupContent) {
                selectedItem = item;
                // On utilise le store global pour ouvrir la popup
                setTimeout(() => {
                    openPopup(
                        item.title?.fr || item.name?.fr || "Détails",
                        popupContent,
                        item
                    );
                }, 500);

                // On nettoie l'URL
                const url = new URL(window.location.href);
                url.searchParams.delete('activity');
                window.history.replaceState({}, '', url);
            }
        }
    });

    const handlePopup = (item: any) => {
        if (popupContent) {
            selectedItem = item;
            openPopup(
                item.title?.fr || item.name?.fr || "Détails",
                popupContent,
                item
            );
        }
    }
</script>

<div class="flex overflow-x-auto snap-x snap-mandatory gap-6 w-full pb-6 px-4 no-scrollbar">
    {#each items as item}
        {#if popupContent}
            <button 
                class="snap-start flex-none w-[85%] md:w-[45%] lg:w-[30%] text-left hover:cursor-pointer" 
                onclick={() => { handlePopup(item) }}
                type="button"
            >
                {@render children(item)}
            </button>
        {:else}
            <div class="snap-start flex-none w-[85%] md:w-[45%] lg:w-[30%]">
                {@render children(item)}
            </div>
        {/if}
    {/each}
</div>

<style>
    /* Pour cacher la barre de scroll tout en gardant le scroll */
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>