<script lang="ts">
	import type { TechnicalTool } from "$lib/data/technicals_tools";
	import Carousel from "$lib/components/carousel/Carousel.svelte";
	import CarouselCard from "$lib/components/carousel/components/CarouselCard.svelte";
	import { getLocale } from '$paraglide/runtime.js';
	import * as m from '$paraglide/messages.js';

	let { technicalTools }: { technicalTools: TechnicalTool[] } = $props();

	const locale = getLocale();
</script>

<div id="moyens-techniques" class="flex flex-col items-center justify-center w-full py-16 px-8 gap-4 container mx-auto scroll-mt-24">
    <h2 class="text-4xl font-bold mb-8">{m.technical_title()}</h2>
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