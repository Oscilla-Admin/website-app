<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import NavBar from './components/NavBar.svelte';
	import { page } from '$app/state';

	// État pour savoir si on a scrollé
	let isScrolled = $state(false);

	// Vérifie si on est sur la page d'accueil (/, /fr, /en, /ca)
	let isHomePage = $derived(
		page.url.pathname === '/' ||
			page.url.pathname === '/fr' ||
			page.url.pathname === '/en' ||
			page.url.pathname === '/ca'
	);

	// Header transparent seulement sur la page d'accueil et sans scroll
	let isTransparent = $derived(isHomePage && !isScrolled);

	// Fonction pour détecter le scroll
	function handleScroll() {
		isScrolled = window.scrollY > 20; // Se déclenche après 20px de scroll
	}
</script>

<svelte:window onscroll={handleScroll} />

<header
	class="fixed top-0 left-0 z-[50] w-full py-2 transition-all duration-300 ease-out
    {isTransparent ? 'bg-transparent' : 'bg-white'}
    {isScrolled ? 'shadow-sm' : ''}"
>
	<div class="relative container mx-auto flex items-center justify-between px-2 xl:px-4">
		<Logo
			src="/tempLogo.png"
			alt="Oscilla Logo"
			href="/#accueil"
			classOverride="mb-2 mr-2 xl:mr-5 xl:mb-12"
			size="w-24 xl:w-40 h-auto xl:h-28"
		/>
		<NavBar {isTransparent} />
	</div>
</header>
