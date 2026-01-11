<script lang="ts">
    import type { Snippet } from 'svelte';

    // On utilise les snippets de Svelte 5 pour passer le contenu de chaque slide
    let { items, children }: { items: any[], children: Snippet<[any]> } = $props();
</script>

<div class="flex overflow-x-auto snap-x snap-mandatory gap-6 w-full pb-6 px-4 no-scrollbar">
    {#each items as item}
        <div class="snap-start flex-none w-[85%] md:w-[45%] lg:w-[30%]">
            <!-- On rend le snippet pour chaque item -->
            {@render children(item)}
        </div>
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