<script lang="ts">
	import type { Activity } from '$lib/data/activities';
	import Carousel from '$lib/components/carousel/Carousel.svelte';
	import CarouselCard from '$lib/components/carousel/components/CarouselCard.svelte';
	import { getLocale } from '$paraglide/runtime.js';
	import * as m from '$paraglide/messages.js';
	import { page } from '$app/state';

	let { activities }: { activities: Activity[] } = $props();
	const initialActivityId = $derived(page.url.searchParams.get('activity'));

	const locale = getLocale();
</script>

<div
	id="activites-references"
	class="container mx-auto flex w-full scroll-mt-32 flex-col items-center justify-center gap-4 px-4 py-12 md:px-8 md:py-16"
>
	<h2 class="mb-6 text-center text-3xl font-bold md:mb-8 md:text-4xl">{m.activities_title()}</h2>
	<Carousel items={activities} initialItemId={initialActivityId}>
		{#snippet children(activity)}
			<CarouselCard
				title={activity.title[locale]}
				iconName={activity.iconName}
				image={activity.image}
			/>
		{/snippet}
		{#snippet popupContent(activity)}
			<div class="flex min-h-0 flex-1 flex-col gap-6">
				{#if activity.image}
					<div
						class="flex h-64 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl md:mx-auto md:h-80 md:w-1/2"
					>
						<img
							src={activity.image}
							alt={activity.title[locale]}
							class="h-full w-full object-contain object-center md:object-cover"
						/>
					</div>
				{/if}
				<div class="flex min-h-0 flex-1 flex-col justify-start md:items-center">
					{#if activity.subtitle?.[locale]}
						<h3 class="mb-4 shrink-0 text-xl font-bold md:text-2xl">{activity.subtitle[locale]}</h3>
					{/if}
					<div class="min-h-0 w-full flex-1 overflow-y-auto">
						<p
							class="font-roboto text-base leading-relaxed whitespace-pre-wrap text-gray-600 md:text-lg"
						>
							{activity.description[locale]}
						</p>
					</div>
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
