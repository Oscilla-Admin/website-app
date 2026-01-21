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
	class="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat w-full transition-opacity duration-700 ease-out"
	style="background-image: url('/hero_bg.png'); opacity: {opacity};"
>
	<div class="flex flex-col items-center justify-center w-full h-full pt-40 pb-8">
		<h1 class="text-4xl font-bold"><Logo src="/tempLogo.png" alt="Oscilla Logo" size="w-100 h-100" /></h1>
		<p class="text-2xl font-bold italic">{m.hero_tagline()}</p>
	</div>
</div>