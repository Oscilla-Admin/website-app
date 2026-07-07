<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import { onMount } from 'svelte';
	import * as m from '$paraglide/messages.js';
	import { getLocale } from '$paraglide/runtime.js';
	import { COLORS } from '$lib/utils/colors';

	let { siteContent = {} } = $props();
	const locale = getLocale();

	let opacity = $state(0);

	onMount(() => {
		// Fade in au chargement
		setTimeout(() => {
			opacity = 1;
		}, 100);
	});
</script>

<div
	id="accueil"
	class="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-out"
	style="background-image: url('/hero_bg.webp'); background-color: #222222; background-blend-mode: multiply; opacity: {opacity}; filter: contrast(0.90) brightness(1.35);"
>
	<div class="pointer-events-none absolute inset-0 z-[5] bg-black/22"></div>

	<div
		class="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 pt-10 pb-12 md:pt-28 md:pt-32 md:pb-16"
	>
		<div class="mr-6 flex w-full justify-center text-3xl font-black md:mr-17 md:mb-60 md:text-4xl">
			<Logo
				src="/tempLogo.png"
				alt="Oscilla Logo"
				size="max-w-[220px] md:max-w-[800px] h-auto xl:mr-20"
			/>
		</div>
		<p
			class="!text-justify-none relative z-20 -mt-12 mt-10 w-full !text-center text-center text-xl italic drop-shadow-lg md:-mt-24 md:max-w-none md:items-center md:pb-28 md:text-4xl"
			style="color: {COLORS.white}; font-weight: 600 !important;"
		>
			{siteContent.hero_tagline?.[locale] || m.hero_tagline()}
		</p>
	</div>
	<div
		class="pointer-events-none absolute inset-x-0 bottom-0 z-[6] h-36 bg-gradient-to-b from-transparent via-black/45 via-65% to-white md:h-60"
	></div>
</div>
