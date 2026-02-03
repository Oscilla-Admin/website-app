<script lang="ts">
	import Logo from "$lib/components/Logo.svelte";
	import { onMount } from "svelte";
	import * as m from '$paraglide/messages.js';

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
	class="relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat w-full transition-opacity duration-700 ease-out"
	style="background-image: url('/hero_bg.png'); opacity: {opacity};"
>
	<div class="flex flex-col items-center justify-center w-full h-full pt-32 pb-16 md:pt-40 md:pb-20 px-4">
		<h1 class="text-3xl md:text-4xl font-bold w-full flex justify-center mb-4">
            <Logo src="/tempLogo.png" alt="Oscilla Logo" size="w-full max-w-[260px] md:max-w-[600px] h-auto" />
        </h1>
		<p class="text-lg md:text-2xl font-bold italic text-center w-full px-2 md:max-w-none">{m.hero_tagline()}</p>
	</div>
    <!-- Dégradé vers le bas pour transitionner avec la section suivante -->
    <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
</div>