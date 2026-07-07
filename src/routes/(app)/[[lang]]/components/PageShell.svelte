<script lang="ts">
	import type { Snippet } from 'svelte';
	import PageWaveBoundary from '$lib/components/PageWaveBoundary.svelte';

	let {
		title,
		children,
		afterHero = false
	}: { title: string; children: Snippet; afterHero?: boolean } = $props();
</script>

<div class="flex min-h-screen w-full flex-col items-center">
	<section
		class="relative flex w-full flex-col items-center overflow-hidden pb-20 md:pb-24 {afterHero
			? 'pt-12 md:pt-16 xl:pt-20'
			: 'pt-28 md:pt-32 xl:pt-36'}"
	>
		<div
			class="absolute inset-x-0 top-0 bottom-32 bg-gradient-to-b from-transparent from-0% via-[#f7f8f7] via-16% to-[#f7f8f7] md:bottom-40"
		></div>
		<header class="relative z-10 container mx-auto flex w-full flex-col items-center px-4 md:px-8">
			<h1 class="mb-8 max-w-5xl text-center text-4xl leading-tight font-bold md:mb-16 md:text-6xl">
				{title}
			</h1>
		</header>

		<div class="pointer-events-none absolute inset-x-0 bottom-0">
			<PageWaveBoundary fillColor="#f7f8f7" />
		</div>
	</section>

	<div class="flex w-full justify-center pt-2 md:pt-4">
		{@render children()}
	</div>
</div>
