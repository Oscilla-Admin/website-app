<script lang="ts">
	interface NewsItem {
		id: string;
		title: string | null;
		content: string;
		images: string[];
		created: string;
	}

	let { item, formatDate }: { item: NewsItem; formatDate: (d: string) => string } = $props();
</script>

<article
	data-id={item.id}
	class="flex shrink-0 flex-col overflow-hidden border-b border-gray-200 bg-white pb-4 last:border-b-0 last:pb-0 md:pb-6"
>
	{#if item.images[0]}
		<div class="h-40 w-full shrink-0 overflow-hidden md:h-48">
			<img
				src={item.images[0]}
				alt={item.title ?? 'Actualité'}
				class="h-full w-full object-cover object-center"
			/>
		</div>
	{/if}

	<div class="flex flex-col gap-2 p-3 md:p-5">
		<span class="text-xs font-medium text-gray-400">{formatDate(item.created)}</span>

		{#if item.title}
			<h3 class="text-base font-bold text-gray-900 md:text-lg">{item.title}</h3>
		{/if}

		<p class="font-roboto text-sm leading-relaxed whitespace-pre-wrap text-gray-600 md:text-base">
			{item.content}
		</p>

		{#if item.images.length > 1}
			<div class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2">
				{#each item.images.slice(1) as img, i}
					<div class="aspect-video overflow-hidden rounded-lg bg-gray-100">
						<img
							src={img}
							alt={`${item.title ?? 'Actualité'} - ${i + 2}`}
							class="h-full w-full object-cover object-center"
						/>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</article>
