<script lang="ts">
    import type { Snippet } from 'svelte';
	import Popup from '../popup/Popup.svelte';

    interface Props {
        items: any[];
        children: Snippet<[any]>;
        popupContent?: Snippet<[any]>;
        initialItemId?: string | null;
    }

    let { items, children, popupContent, initialItemId = null }: Props = $props();
    let selectedItem = $state<any>(null);
    let isOpen = $state(false);

    // Ouverture automatique si initialItemId est présent
    $effect(() => {
        if (initialItemId && items.length > 0) {
            const item = items.find(i => i.id === initialItemId);
            if (item) {
                selectedItem = item;
                // Petit délai pour laisser la page charger avant d'ouvrir la popup
                setTimeout(() => {
                    isOpen = true;
                }, 500);
            }
        }
    });

    const handlePopup = (item: any) => {
        if (selectedItem === item) {
            // Si on clique sur l'item déjà sélectionné, on ferme
            handleClose();
        } else {
            // Sinon, on ouvre avec le nouvel item
            selectedItem = item;
            // Un micro-délai pour forcer Svelte à voir le changement d'état après le montage
            // et déclencher la transition d'ouverture (fade/scale)
            setTimeout(() => {
                isOpen = true;
            }, 30);
        }
    }
    
    const handleClose = () => {
        isOpen = false;
        // On ne met pas selectedItem à null tout de suite pour laisser la transition de fermeture se faire avec les données
        setTimeout(() => {
            if (!isOpen) selectedItem = null;
        }, 600); // Correspond à la durée la plus longue de transition (fade: 600ms)
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

{#if selectedItem}
    <Popup 
        title={selectedItem.title?.fr || selectedItem.name?.fr || "Détails"} 
        isOpen={isOpen} 
        onClose={handleClose}
    >
        <!-- Contenu de la popup : on peut réutiliser le snippet ou faire un affichage custom -->
        <div class="p-4">
            {#if popupContent}
                {@render popupContent(selectedItem)}
            {/if}
        </div>
    </Popup>
{/if}

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