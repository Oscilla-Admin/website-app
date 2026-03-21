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

<section id="outils-techniques" class="py-24 w-full scroll-mt-32 overflow-hidden">
    <div class="bg-[var(--bg-color)] absolute inset-0" style="--bg-color: {COLORS.grayLight};"></div>
    <!-- Dégradés de transition pour fond enchaîné -->
    <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
    <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

    <div class="relative flex flex-col items-center justify-center w-full px-4 md:px-8 gap-4 container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">{m.technical_title()}</h2>
        <Carousel items={technicalTools}>
            {#snippet children(tool)}
                <CarouselCard title={tool.title[locale]} iconName={tool.iconName} image={tool.image} />
            {/snippet}
            {#snippet popupContent(tool)}
                <div class="flex-1 min-h-0 flex flex-col gap-6">
                    {#if tool.image}
                        <div class="shrink-0 w-full h-64 md:w-1/2 md:h-80 md:mx-auto overflow-hidden rounded-xl flex items-center justify-center">
                            <img src={tool.image} alt={tool.title[locale]} class="w-full h-full object-contain md:object-cover object-center" />
                        </div>
                    {/if}
                    <div class="flex-1 min-h-0 flex flex-col justify-start md:items-center">
                        <div class="flex-1 min-h-0 overflow-y-auto w-full">
                            <div class="min-h-full flex flex-col justify-center">
                                <p class="text-gray-600 text-center md:text-lg leading-relaxed whitespace-pre-wrap font-roboto">{tool.description[locale]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            {/snippet}
        </Carousel>
    </div>
</section>
