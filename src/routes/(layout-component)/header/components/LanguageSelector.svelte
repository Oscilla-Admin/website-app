<script lang="ts">
	import { locales, getLocale, setLocale, type Locale } from '$paraglide/runtime.js';
	import { ChevronDown } from 'lucide-svelte';

	let isOpen = $state(false);
	const currentLocale = getLocale();

	const flags: Record<Locale, string> = {
		fr: '/flags/fr.svg',
		en: '/flags/gb.svg',
		ca: '/flags/ca.svg'
	};

	const labels: Record<Locale, string> = {
		fr: 'Français',
		en: 'English',
		ca: 'Català'
	};

	function handleLocaleChange(locale: Locale) {
		setLocale(locale);
		isOpen = false;
		window.location.reload();
	}

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function closeDropdown() {
		isOpen = false;
	}
</script>

<div class="relative">
	<button
		onclick={toggleDropdown}
		onblur={() => setTimeout(closeDropdown, 150)}
		class="flex items-center gap-2 p-1.5 rounded hover:bg-black/5 transition-colors cursor-pointer"
		aria-label="Sélectionner la langue"
		aria-expanded={isOpen}
	>
		<img src={flags[currentLocale]} alt={labels[currentLocale]} class="w-8 h-5.5 object-cover rounded-sm border border-gray-100 shadow-sm" />
		<ChevronDown size={16} class="opacity-50" />
	</button>

	{#if isOpen}
		<div class="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 min-w-[140px]">
			{#each locales as locale}
				<button
					onclick={() => handleLocaleChange(locale)}
					class="flex items-center gap-3 w-full px-3 py-2 hover:bg-gray-50 transition-colors {locale === currentLocale ? 'bg-gray-50' : ''}"
				>
					<img src={flags[locale]} alt={labels[locale]} class="w-7 h-5 object-cover rounded-sm border border-gray-50" />
					<span class="text-sm text-gray-700 font-medium">{labels[locale]}</span>
				</button>
			{/each}
		</div>
	{/if}
</div>
