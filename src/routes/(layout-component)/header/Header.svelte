<script lang="ts">
	import Logo from "$lib/components/Logo.svelte";
	import NavBar from "./components/NavBar.svelte";
    
    // État pour savoir si on a scrollé
    let isScrolled = $state(false);

    // Fonction pour détecter le scroll
    function handleScroll() {
        isScrolled = window.scrollY > 20; // Se déclenche après 20px de scroll
    }
</script>

<svelte:window onscroll={handleScroll} />

<header class="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
    {isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'}">
    
    <div class="container mx-auto px-4 flex justify-between items-center">
        <Logo src="/tempLogo.png" alt="Oscilla Logo" />
	    <NavBar />
    </div>
</header>