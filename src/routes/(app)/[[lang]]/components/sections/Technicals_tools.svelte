<script lang="ts">
	import type { TechnicalTool } from "$lib/data/technicals_tools";
	import Carousel from "$lib/components/carousel/Carousel.svelte";
	import CarouselCard from "$lib/components/carousel/components/CarouselCard.svelte";

	let { technicalTools }: { technicalTools: TechnicalTool[] } = $props();
</script>

<div class="flex flex-col items-center justify-center w-full p-8 gap-4 container mx-auto">
    <h2 class="text-4xl font-bold">Outils Techniques</h2>
    <Carousel items={technicalTools}>
        {#snippet children(tool)}
            <CarouselCard title={tool.title.fr} iconName={tool.iconName} />
        {/snippet}
        {#snippet popupContent(tool)}
            <div>
                <img src={tool.image} alt={tool.title.fr} />
                <p>{tool.description.fr}</p>
                                               
            </div>
        {/snippet}
    </Carousel>
</div>