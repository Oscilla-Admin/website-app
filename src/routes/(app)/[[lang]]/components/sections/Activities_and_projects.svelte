<script lang="ts">
	import type { Activity } from "$lib/data/activities";
	import Carousel from "$lib/components/carousel/Carousel.svelte";
	import CarouselCard from "$lib/components/carousel/components/CarouselCard.svelte";
	import type { Project } from "$lib/data/projects";
	import { getLocale } from '$paraglide/runtime.js';
	import * as m from '$paraglide/messages.js';
    import { startPageLoader } from '$lib/utils/loader';
    import { page } from '$app/state';

    let { activities, projects }: { activities: Activity[], projects: Project[] } = $props();
    const initialActivityId = $derived(page.url.searchParams.get('activity'));

    const locale = getLocale();

    // Fonction helper pour récupérer les projets d'une activité
    const getProjectsByActivity = (activityId: string): Project[] => {
        return projects.filter((project) => project.activityId === activityId);
    }

</script>

<div id="activites-references" class="flex flex-col items-center justify-center w-full py-12 md:py-16 px-4 md:px-8 gap-4 container mx-auto scroll-mt-32">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">{m.activities_title()}</h2>
    <Carousel items={activities} initialItemId={initialActivityId}>
        {#snippet children(activity)}
            <CarouselCard title={activity.title[locale]} iconName={activity.iconName} image={activity.image} />
        {/snippet}
        {#snippet popupContent(activity)}
            <div class="space-y-6 md:space-y-8 flex flex-col md:flex-row gap-6 md:gap-12 w-full h-full">
                {#if activity.image}
                    <div class="w-full md:w-1/2 h-64 md:h-[500px] overflow-hidden rounded-xl flex-shrink-0 bg-transparent flex items-center justify-center">
                        <img src={activity.image} alt={activity.title[locale]} class="w-full h-full object-contain object-center" />
                    </div>
                {/if}
                <div class="w-full md:w-1/2 flex flex-col justify-start">
                    {#if activity.subtitle?.[locale]}
                        <h3 class="text-xl md:text-2xl font-bold mb-4">{activity.subtitle[locale]}</h3>
                    {/if}
                    <p class="text-gray-600 text-base md:text-lg leading-relaxed whitespace-pre-wrap font-roboto">{activity.description[locale]}</p>
                </div>

                <!-- {#if getProjectsByActivity(activity.id).length > 0}
                    <div>
                        <h4 class="text-xl font-semibold mb-4">{m.activities_related_projects()}</h4>
                        <Carousel items={getProjectsByActivity(activity.id)}>
                            {#snippet children(project)}
                                <CarouselCard
                                    title={project.name[locale]}
                                    description={project.description[locale]}
                                    image={project.image}
                                    href={`/project/${project.id}`}
                                    onclick={() => startPageLoader()}
                                />
                            {/snippet}
                        </Carousel>
                    </div>
                {/if} -->
            </div>
        {/snippet}
    </Carousel>
</div>  
