<script lang="ts">
	import type { TechnicalTool } from "$lib/data/technicals_tools";
	import Carousel from "$lib/components/carousel/Carousel.svelte";
	import CarouselCard from "$lib/components/carousel/components/CarouselCard.svelte";
	import { getLocale } from '$paraglide/runtime.js';
	import * as m from '$paraglide/messages.js';
    import { COLORS } from '$lib/utils/colors';

	let { technicalTools }: { technicalTools: TechnicalTool[] } = $props();

	const locale = getLocale();
</script>

<section id="outils-techniques" class="relative py-24 w-full scroll-mt-32 overflow-hidden">
    <!-- Dégradés de transition pour fond enchaîné -->
    <div class="absolute inset-0 bg-[var(--bg-color)]" style="--bg-color: {COLORS.grayLight};"></div>
    <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
    <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

    <div class="relative flex flex-col items-center justify-center w-full px-4 md:px-8 gap-4 container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">{m.technical_title()}</h2>
        <Carousel items={technicalTools}>
            {#snippet children(tool)}
                <CarouselCard title={tool.title[locale]} iconName={tool.iconName} image={tool.image} />
            {/snippet}
            {#snippet popupContent(tool)}
                <div class="space-y-6">
                    {#if tool.image}
                        <div class="w-full h-64 overflow-hidden rounded-xl">
                            <img src={tool.image} alt={tool.title[locale]} class="w-full h-full object-cover" />
                        </div>
                    {/if}
                    <div>
                        <h3 class="text-2xl font-bold mb-3">{tool.title[locale]}</h3>
                        <p class="text-gray-600">{tool.description[locale]}</p>
                    </div>
                </div>
            {/snippet}
        </Carousel>
    </div>
</section>