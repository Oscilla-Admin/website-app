<script lang="ts">
	import { locales, getLocale, setLocale, type Locale } from '$paraglide/runtime.js';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import { COLORS } from '$lib/utils/colors';

	let { isTransparent = false }: { isTransparent?: boolean } = $props();

	let isOpen = $state(false);
	const currentLocale = getLocale();

	const flags = {
		fr: '/flags/fr.svg',
		en: '/flags/gb.svg'
		// ca: '/flags/ca.svg'
	} as Record<Locale, string>;

	const labels = {
		fr: 'Français',
		en: 'English'
		// ca: 'Català'
	} as Record<Locale, string>;

	// On filtre le catalan pour ne pas l'afficher dans le menu
	const activeLocales = locales.filter((l) => l !== 'ca');

	function handleLocaleChange(locale: Locale) {
		setLocale(locale);
		isOpen = false;
		window.location.reload();
	}

	function toggleDropdown(e: MouseEvent) {
		e.stopPropagation();
		isOpen = !isOpen;
	}

	function closeDropdown() {
		isOpen = false;
	}
</script>

<svelte:window onclick={closeDropdown} />

<div class="relative">
	<button
		onclick={toggleDropdown}
		class="flex cursor-pointer items-center gap-1.5 rounded p-1.5 transition-colors {isTransparent
			? 'bg-transparent hover:bg-white/10'
			: 'hover:bg-gray-100'}"
		style="color: {isTransparent ? COLORS.white : COLORS.black};"
		aria-label="Sélectionner la langue"
		aria-expanded={isOpen}
	>
		<img
			src={flags[currentLocale]}
			alt={labels[currentLocale]}
			class="h-5 w-8 rounded-sm border border-gray-100 object-cover shadow-sm"
		/>
		<ChevronDown size={16} class="opacity-50" />
	</button>

	{#if isOpen}
		<div
			class="fixed top-[60px] right-4 z-[100] min-w-[140px] overflow-hidden rounded-lg border shadow-xl md:absolute md:top-full md:right-0 {isTransparent
				? 'border-white/10 bg-black/60 backdrop-blur-md'
				: 'border-gray-200 bg-white'}"
			onclick={(e) => e.stopPropagation()}
			role="presentation"
		>
			{#each activeLocales as locale}
				<button
					onclick={() => handleLocaleChange(locale)}
					class="flex w-full items-center gap-3 px-3 py-2 transition-colors {isTransparent
						? 'text-white hover:bg-white/10'
						: 'text-gray-700 hover:bg-gray-50'} {locale === currentLocale
						? isTransparent
							? 'bg-white/20'
							: 'bg-gray-50'
						: ''}"
				>
					<img
						src={flags[locale]}
						alt={labels[locale]}
						class="h-5 w-7 rounded-sm border object-cover {isTransparent
							? 'border-white/20'
							: 'border-gray-50'}"
					/>
					<span class="text-sm font-medium">{labels[locale]}</span>
				</button>
			{/each}
		</div>
	{/if}
</div>
