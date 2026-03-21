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

<article class="bg-white overflow-hidden flex flex-col shrink-0 pb-4 md:pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">

    {#if item.images[0]}
        <div class="w-full h-40 md:h-48 overflow-hidden shrink-0">
            <img
                src={item.images[0]}
                alt={item.title ?? 'Actualité'}
                class="w-full h-full object-cover object-center"
            />
        </div>
    {/if}

    <div class="p-3 md:p-5 flex flex-col gap-2">
        <span class="text-xs text-gray-400 font-medium">{formatDate(item.created)}</span>

        {#if item.title}
            <h3 class="text-base md:text-lg font-bold text-gray-900">{item.title}</h3>
        {/if}

        <p class="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-wrap font-roboto">{item.content}</p>

        {#if item.images.length > 1}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                {#each item.images.slice(1) as img, i}
                    <div class="rounded-lg overflow-hidden bg-gray-100 aspect-video">
                        <img
                            src={img}
                            alt={`${item.title ?? 'Actualité'} - ${i + 2}`}
                            class="w-full h-full object-cover object-center"
                        />
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</article>
