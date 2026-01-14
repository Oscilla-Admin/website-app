<script lang="ts">
    import type { Snippet } from 'svelte';
	import Popup from '../popup/Popup.svelte';

    interface Props {
        items: any[];
        children: Snippet<[any]>;
        popupContent?: Snippet<[any]>;
    }

    let { items, children, popupContent }: Props = $props();
    let selectedItem = $state<any>(null);
    let isOpen = $state(false);

    const handlePopup = (item: any) => {
        if (selectedItem === item) {
            // Si on clique sur l'item déjà sélectionné, on ferme
            selectedItem = null;
            isOpen = false;
        } else {
            // Sinon, on ouvre avec le nouvel item
            selectedItem = item;
            isOpen = true;
        }
    }
    
    const handleClose = () => {
        selectedItem = null;
        isOpen = false;
    }
</script>

<div class="flex overflow-x-auto snap-x snap-mandatory gap-6 w-full pb-6 px-4 no-scrollbar">
    {#each items as item}
        {#if popupContent}
            <button 
                class="snap-start flex-none w-[85%] md:w-[45%] lg:w-[30%] text-left" 
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
        title={selectedItem.title?.fr || "Détails"} 
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