<script lang="ts">
	import { locales, getLocale, setLocale, type Locale } from '$paraglide/runtime.js';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
    import { COLORS } from '$lib/utils/colors';

	let { isTransparent = false }: { isTransparent?: boolean } = $props();

	let isOpen = $state(false);
	const currentLocale = getLocale();

	const flags = {
		fr: '/flags/fr.svg',
		en: '/flags/gb.svg',
		// ca: '/flags/ca.svg'
	} as Record<Locale, string>;

	const labels = {
		fr: 'Français',
		en: 'English',
		// ca: 'Català'
	} as Record<Locale, string>;

	// On filtre le catalan pour ne pas l'afficher dans le menu
	const activeLocales = locales.filter(l => l !== 'ca');

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
		class="flex items-center gap-2 p-2 rounded transition-colors cursor-pointer {isTransparent ? 'bg-transparent hover:bg-white/10' : 'hover:bg-gray-100'}"
        style="color: {isTransparent ? COLORS.white : COLORS.black};"
		aria-label="Sélectionner la langue"
		aria-expanded={isOpen}
	>
		<img src={flags[currentLocale]} alt={labels[currentLocale]} class="w-10 h-7 object-cover rounded-sm border border-gray-100 shadow-sm" />
		<ChevronDown size={20} class="opacity-50" />
	</button>

	{#if isOpen}
		<div 
			class="fixed md:absolute top-[60px] md:top-full right-4 md:right-0 rounded-lg shadow-xl border overflow-hidden z-[100] min-w-[140px] {isTransparent ? 'bg-black/60 backdrop-blur-md border-white/10' : 'bg-white border-gray-200'}"
			onclick={(e) => e.stopPropagation()}
		>
			{#each activeLocales as locale}
				<button
					onclick={() => handleLocaleChange(locale)}
					class="flex items-center gap-3 w-full px-3 py-2 transition-colors {isTransparent ? 'hover:bg-white/10 text-white' : 'hover:bg-gray-50 text-gray-700'} {locale === currentLocale ? (isTransparent ? 'bg-white/20' : 'bg-gray-50') : ''}"
				>
					<img src={flags[locale]} alt={labels[locale]} class="w-7 h-5 object-cover rounded-sm border {isTransparent ? 'border-white/20' : 'border-gray-50'}" />
					<span class="text-sm font-medium">{labels[locale]}</span>
				</button>
			{/each}
		</div>
	{/if}
</div>
