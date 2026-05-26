<script lang="ts">
	import type { TechnicalTool } from '$lib/data/technicals_tools';
	import Carousel from '$lib/components/carousel/Carousel.svelte';
	import CarouselCard from '$lib/components/carousel/components/CarouselCard.svelte';
	import { getLocale } from '$paraglide/runtime.js';
	import * as m from '$paraglide/messages.js';
	import { COLORS } from '$lib/utils/colors';

	let { technicalTools }: { technicalTools: TechnicalTool[] } = $props();

	const locale = getLocale();
</script>

<section id="outils-techniques" class="w-full scroll-mt-32 overflow-hidden py-24">
	<div class="absolute inset-0 bg-[var(--bg-color)]" style="--bg-color: {COLORS.grayLight};"></div>
	<!-- Dégradés de transition pour fond enchaîné -->
	<div class="absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-white to-transparent"></div>
	<div
		class="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-white to-transparent"
	></div>

	<div
		class="relative container mx-auto flex w-full flex-col items-center justify-center gap-4 px-4 md:px-8"
	>
		<h2 class="mb-6 text-center text-3xl font-bold md:mb-8 md:text-4xl">{m.technical_title()}</h2>
		<Carousel items={technicalTools}>
			{#snippet children(tool)}
				<CarouselCard title={tool.title[locale]} iconName={tool.iconName} image={tool.image} />
			{/snippet}
			{#snippet popupContent(tool)}
				<div class="flex min-h-0 flex-1 flex-col gap-6">
					{#if tool.image}
						<div
							class="flex h-64 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl md:mx-auto md:h-80 md:w-1/2"
						>
							<img
								src={tool.image}
								alt={tool.title[locale]}
								class="h-full w-full object-contain object-center md:object-cover"
							/>
						</div>
					{/if}
					<div class="flex min-h-0 flex-1 flex-col justify-start md:items-center">
						<div class="min-h-0 w-full flex-1 overflow-y-auto">
							<div class="flex min-h-full flex-col justify-center">
								<p
									class="text-center font-roboto leading-relaxed whitespace-pre-wrap text-gray-600 md:text-lg"
								>
									{tool.description[locale]}
								</p>
							</div>
						</div>
					</div>
				</div>
			{/snippet}
		</Carousel>
	</div>
</section>
