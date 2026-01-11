<script lang="ts">
	import type { Activity } from "$lib/data/activities";
	import emblaCarouselSvelte from "embla-carousel-svelte";
	import type { EmblaOptionsType } from "embla-carousel";
	import Carousel from "$lib/components/carousel/Carousel.svelte";
	import CarouselCard from "$lib/components/carousel/components/CarouselCard.svelte";

    let { activities }: { activities: Activity[] } = $props();
        // Options du carrousel
    let options: EmblaOptionsType = { 
        loop: true, 
        align: 'start', 
        slidesToScroll: 1 
    };
</script>

<div class="flex flex-col items-center justify-center w-full p-8 gap-4 container mx-auto">
    <h2 class="text-4xl font-bold">Activités et Projets</h2>
    <Carousel items={activities}>
        {#snippet children(activity)}
            <CarouselCard title={activity.title.fr} iconName={activity.iconName} />
        {/snippet}
    </Carousel>
</div>  