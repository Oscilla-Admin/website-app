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
			minute: '2-digit'
		});
	}
</script>

<section id="actualites" class="relative w-full scroll-mt-32 overflow-x-hidden py-24">
	<div class="absolute inset-0 bg-[var(--bg-color)]" style="--bg-color: {COLORS.grayLight};"></div>
	<div
		class="pointer-events-none absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-white to-transparent"
	></div>
	<div
		class="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-white to-transparent"
	></div>

	<div class="relative container mx-auto flex flex-col items-center gap-8 px-4 md:px-8">
		<h2 class="text-center text-3xl font-bold md:text-4xl">{m.linkedin_actualities_title()}</h2>

		{#if news.length === 0}
			<div class="flex h-48 items-center justify-center text-lg text-gray-400">
				Aucune actualité pour le moment.
			</div>
		{:else}
			<div
				class="news-scroll flex max-h-[60vh] w-full flex-col gap-6 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm md:w-3/4 md:p-4"
			>
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
