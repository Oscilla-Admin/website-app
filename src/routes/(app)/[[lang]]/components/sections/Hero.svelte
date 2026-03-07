<script lang="ts">
	import Logo from "$lib/components/Logo.svelte";
	import { onMount } from "svelte";
	import * as m from '$paraglide/messages.js';
	import { getLocale } from '$paraglide/runtime.js';
    import { COLORS } from "$lib/utils/colors";

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
	class="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat w-full transition-opacity duration-700 ease-out overflow-hidden"
	style="background-image: url('/hero_bg.png'); background-color: #222222; background-blend-mode: multiply; opacity: {opacity}; filter: contrast(0.90) brightness(1.35);"
>
	<div class="absolute inset-0 bg-black/22 pointer-events-none z-[5]"></div>
	
	<div class="relative z-10 flex flex-col items-center justify-center w-full h-full pt-10 md:pt-28 pb-12 md:pt-32 md:pb-16 px-4">
		<h1 class="text-3xl md:text-4xl font-black w-full flex justify-center md:mb-60 mr-6 md:mr-17">
			<Logo src="/tempLogo.png" alt="Oscilla Logo" size="max-w-[220px] md:max-w-[800px] h-auto xl:mr-20" />
        </h1>
		<p 
	            class="relative z-20 text-xl md:text-4xl italic text-center w-full mt-10 md:pb-28 md:items-center md:max-w-none !text-center !text-justify-none drop-shadow-lg -mt-12 md:-mt-24"
	            style="color: {COLORS.white}; font-weight: 600 !important;"
	        >
			{siteContent.hero_tagline?.[locale] || m.hero_tagline()}
		</p>
	</div>
	<div class="absolute inset-x-0 bottom-0 h-36 md:h-60 bg-gradient-to-b from-transparent via-black/45 via-65% to-white pointer-events-none z-[6]"></div>
</div>
