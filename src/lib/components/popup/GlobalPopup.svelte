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
		class="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md md:p-4"
		onclick={closePopup}
		role="button"
		tabindex="0"
		onkeydown={(e) => {
			if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') closePopup();
		}}
		transition:fade={{ duration: 600 }}
	>
		<div
			class="relative z-[10001] flex max-h-[calc(100dvh-2rem)] w-full max-w-[95%] cursor-default flex-col rounded-2xl bg-white p-5 shadow-2xl md:h-[80vh] md:max-w-[85vw] md:p-10 lg:max-w-[1200px]"
			onclick={(e) => e.stopPropagation()}
			role="dialog"
			aria-modal="true"
			tabindex="-1"
			onkeydown={(e) => e.stopPropagation()}
			in:scale={{ duration: 600, start: 0.94, opacity: 0, easing: cubicOut }}
			out:scale={{ duration: 450, start: 0.96, opacity: 0, easing: cubicOut }}
		>
			<div class="mb-4 flex shrink-0 items-start justify-between md:mb-8">
				<h2 class="text-xl leading-tight font-black text-gray-900 md:text-4xl">
					{typeof $popupStore.title === 'string'
						? $popupStore.title
						: $popupStore.title?.[locale] || 'Détails'}
				</h2>
				<button
					onclick={closePopup}
					class="-mr-2 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900"
					aria-label="Fermer la fenêtre"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-7 w-7 md:h-10 md:w-10"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<div class="flex min-h-0 flex-1 flex-col overflow-y-auto md:overflow-hidden">
				{#if $popupStore.content && $popupStore.data}
					{@render $popupStore.content($popupStore.data)}
				{/if}
			</div>
		</div>
	</div>
{/if}
