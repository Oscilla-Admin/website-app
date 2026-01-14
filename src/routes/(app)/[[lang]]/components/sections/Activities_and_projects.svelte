<script lang="ts">
	import type { Activity } from "$lib/data/activities";
	import Carousel from "$lib/components/carousel/Carousel.svelte";
	import CarouselCard from "$lib/components/carousel/components/CarouselCard.svelte";
	import { projects, type Project } from "$lib/data/projects";

    let { activities }: { activities: Activity[] } = $props();
   
    // Fonction helper pour récupérer les projets d'une activité
    const getProjectsByActivity = (activityId: string): Project[] => {
        return projects.filter((project) => project.activityId === activityId);
    }

</script>

<div class="flex flex-col items-center justify-center w-full p-8 gap-4 container mx-auto">
    <h2 class="text-4xl font-bold">Activités et Projets</h2>
    <Carousel items={activities}>
        {#snippet children(activity)}
            <CarouselCard title={activity.title.fr} iconName={activity.iconName}  />
        {/snippet}
        {#snippet popupContent(activity)}
            <div class="space-y-6">
                <div>
                    <h3 class="text-2xl font-bold mb-3">{activity.title.fr}</h3>
                    <p class="text-gray-600">{activity.description.fr}</p>
                </div>
                
                {#if getProjectsByActivity(activity.id).length > 0}
                    <div>
                        <h4 class="text-xl font-semibold mb-4">Projets associés</h4>
                        <Carousel items={getProjectsByActivity(activity.id)}>
                            {#snippet children(project)}
                                <CarouselCard 
                                    title={project.name.fr} 
                                    description={project.description.fr}
                                    image={project.image}
                                />
                            {/snippet}
                        </Carousel>
                    </div>
                {/if}
            </div>
        {/snippet}
    </Carousel>
</div>  