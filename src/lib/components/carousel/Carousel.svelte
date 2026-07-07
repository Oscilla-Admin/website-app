<script lang="ts">
	import type { Snippet } from 'svelte';
	import { openPopup } from '$lib/utils/popup';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { scrollCarousel } from './functions';

	interface Props {
		items: any[];
		children: Snippet<[any]>;
		popupContent?: Snippet<[any]>;
		initialItemId?: string | null;
	}

	let { items, children, popupContent, initialItemId = null }: Props = $props();
	let carouselContainer = $state<HTMLElement | null>(null);

	// Ouverture automatique si initialItemId est présent
	$effect(() => {
		if (initialItemId && items.length > 0) {
			const item = items.find((i) => i.id === initialItemId);
			if (item && popupContent) {
				// On utilise le store global pour ouvrir la popup
				setTimeout(() => {
					openPopup(item.title || item.name || 'Détails', popupContent, item);
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
			openPopup(item.title || item.name || 'Détails', popupContent, item);
		}
	};

	const handleCardKeydown = (event: KeyboardEvent, item: any) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handlePopup(item);
		}
	};
</script>

<div class="group relative w-full">
	<!-- Flèches de navigation -->
	<button
		class="absolute top-1/2 left-0 z-10 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 p-2 opacity-0 shadow-md transition-opacity group-hover:opacity-100 hover:bg-white disabled:hidden md:flex"
		onclick={() => scrollCarousel(carouselContainer, 'left')}
		aria-label="Précédent"
		type="button"
	>
		<ChevronLeft class="h-6 w-6" />
	</button>

	<button
		class="absolute top-1/2 right-0 z-10 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 p-2 opacity-0 shadow-md transition-opacity group-hover:opacity-100 hover:bg-white disabled:hidden md:flex"
		onclick={() => scrollCarousel(carouselContainer, 'right')}
		aria-label="Suivant"
		type="button"
	>
		<ChevronRight class="h-6 w-6" />
	</button>

	<!-- Conteneur défilant -->
	<div
		bind:this={carouselContainer}
		class="no-scrollbar flex w-full snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6"
	>
		{#each items as item}
			{#if popupContent}
				<div
					class="w-[85%] flex-none snap-start text-left hover:cursor-pointer md:w-[45%] lg:w-[30%]"
					onclick={() => {
						handlePopup(item);
					}}
					onkeydown={(event) => handleCardKeydown(event, item)}
					role="button"
					tabindex="0"
				>
					{@render children(item)}
				</div>
			{:else}
				<div class="w-[85%] flex-none snap-start md:w-[45%] lg:w-[30%]">
					{@render children(item)}
				</div>
			{/if}
		{/each}
	</div>
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
