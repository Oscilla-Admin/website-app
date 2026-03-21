<script lang="ts">
    import { COLORS } from '$lib/utils/colors';
    import * as m from '$paraglide/messages.js';
    import ActualityNews from './Actuality_news.svelte';

    interface NewsItem {
        id: string;
        title: string | null;
        content: string;
        images: string[];
        created: string;
    }

    let { news }: { news: NewsItem[] } = $props();

    function formatDate(dateStr: string): string {
        return new Date(dateStr).toLocaleString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    }
</script>

<section id="actualites" class="py-24 w-full scroll-mt-32 overflow-x-hidden relative">
    <div class="bg-[var(--bg-color)] absolute inset-0" style="--bg-color: {COLORS.grayLight};"></div>
    <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

    <div class="container relative mx-auto px-4 md:px-8 flex flex-col items-center gap-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center">{m.linkedin_actualities_title()}</h2>

        {#if news.length === 0}
            <div class="flex items-center justify-center h-48 text-gray-400 text-lg">
                Aucune actualité pour le moment.
            </div>
        {:else}
            <div class="news-scroll w-full md:w-3/4 max-h-[60vh] flex flex-col gap-6 p-3 md:p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                {#each news as item (item.id)}
                    <ActualityNews {item} {formatDate} />
                {/each}
            </div>
        {/if}
    </div>
</section>

<style>
    .news-scroll {
        overflow-y: scroll;
        scrollbar-width: thin;
        scrollbar-color: transparent transparent;
        transition: scrollbar-color 0.3s ease;
    }
    .news-scroll:hover {
        scrollbar-color: #d1d5db transparent;
    }
    .news-scroll::-webkit-scrollbar {
        width: 6px;
    }
    .news-scroll::-webkit-scrollbar-track {
        background: transparent;
    }
    .news-scroll::-webkit-scrollbar-thumb {
        background: transparent;
        border-radius: 3px;
        transition: background 0.3s ease;
    }
    .news-scroll:hover::-webkit-scrollbar-thumb {
        background: #d1d5db;
    }
</style>
