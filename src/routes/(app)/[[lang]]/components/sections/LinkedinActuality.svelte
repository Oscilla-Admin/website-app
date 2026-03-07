<script lang="ts">
	import { COLORS } from '$lib/utils/colors';
	import { m } from '$paraglide/messages';

    // Si tu as besoin d'un script externe (souvent le cas pour les widgets)
    import { onMount } from 'svelte';

    onMount(() => {
        // Ici on pourrait charger le script LinkedIn dynamiquement si besoin
    });
</script>

<svelte:head>
    <script src="https://widgets.sociablekit.com/linkedin-page-posts/widget.js" defer></script>
</svelte:head>

<section id="actualites" class="py-24 w-full scroll-mt-32 overflow-hidden relative">
    <div class="bg-[var(--bg-color)] absolute inset-0" style="--bg-color: {COLORS.grayLight};"></div>
    <!-- Dégradés de transition pour fond enchaîné -->
    <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
    <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

    <div class="container relative mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-12">{m.linkedin_actualities_title()}</h2>
        
        <div class="flex justify-center items-center min-h-[300px] bg-white rounded-xl shadow-sm p-4 w-full md:w-3/4 mx-auto border border-gray-100">
            <div class="sk-ww-linkedin-page-post w-full" data-embed-id="25650626"></div>
        </div>
        
        <div class="mt-8">
            <a href="https://linkedin.com/company/oscilla-acoustique" target="_blank" rel="noopener noreferrer" 
               class="text-primary font-semibold hover:underline">
                Voir toutes nos actualités sur LinkedIn →
            </a>
        </div>
    </div>
</section>