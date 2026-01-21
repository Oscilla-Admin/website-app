<script lang="ts">
	import { locales, getLocale, setLocale, type Locale } from '$paraglide/runtime.js';
	import { ChevronDown } from 'lucide-svelte';

	let isOpen = $state(false);
	const currentLocale = getLocale();

	const flags: Record<Locale, string> = {
		fr: '/flags/fr.gif',
		en: '/flags/gb.gif',
		ca: '/flags/ca.gif'
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
		class="flex items-center gap-2 p-2 rounded hover:bg-white/10 transition-colors cursor-pointer"
		aria-label="Sélectionner la langue"
		aria-expanded={isOpen}
	>
		<img src={flags[currentLocale]} alt={labels[currentLocale]} class="w-10 h-7 object-cover rounded" />
		<ChevronDown size={20} class="opacity-70" />
	</button>

	{#if isOpen}
		<div class="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 min-w-[160px]">
			{#each locales as locale}
				<button
					onclick={() => handleLocaleChange(locale)}
					class="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 transition-colors {locale === currentLocale ? 'bg-gray-50' : ''}"
				>
					<img src={flags[locale]} alt={labels[locale]} class="w-8 h-6 object-cover rounded" />
					<span class="text-base text-gray-700 font-medium">{labels[locale]}</span>
				</button>
			{/each}
		</div>
	{/if}
</div>
