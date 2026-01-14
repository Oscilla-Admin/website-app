<script lang="ts">
	import { COLORS } from '$lib/utils/colors';

    // Si tu as besoin d'un script externe (souvent le cas pour les widgets)
    import { onMount } from 'svelte';

    onMount(() => {
        // Ici on pourrait charger le script LinkedIn dynamiquement si besoin
    });
</script>

<section class="py-16 bg-[var(--bg-color)] w-full" style="--bg-color: {COLORS.grayLight};">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-12">Actualités</h2>
        
        <div class="flex justify-center items-center min-h-[300px] bg-white rounded-xl shadow-sm p-4 w-3/4 mx-auto border border-gray-100">
            <!-- PLACEHOLDER POUR LE WIDGET -->
            <div class="text-gray-400">
                <p class="mb-2 font-medium">Flux LinkedIn</p>
                <p class="text-sm">Le widget sera intégré ici.</p>
                <!-- 
                    Colle ici le code <iframe> ou <script> fourni par LinkedIn 
                    Exemple :
                    <iframe src="https://www.linkedin.com/embed/feed/..." ...></iframe>
                -->
            </div>
        </div>
        
        <div class="mt-8">
            <a href="https://linkedin.com/company/oscilla" target="_blank" rel="noopener noreferrer" 
               class="text-primary font-semibold hover:underline">
                Voir toutes nos actualités sur LinkedIn →
            </a>
        </div>
    </div>
</section>