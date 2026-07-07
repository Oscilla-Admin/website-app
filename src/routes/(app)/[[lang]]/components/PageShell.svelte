<script lang="ts">
	import type { Snippet } from 'svelte';
	import SoundWave3D from '$lib/components/SoundWave3D.svelte';

	let { title, children }: { title: string; children: Snippet } = $props();
</script>

<div class="flex min-h-screen w-full flex-col items-center pt-28 md:pt-32 xl:pt-36">
	<header class="container mx-auto flex w-full flex-col items-center px-4 md:px-8">
		<h1 class="max-w-5xl text-center text-4xl leading-tight font-bold md:text-6xl">
			{title}
		</h1>
	</header>

	<SoundWave3D />

	<div class="flex w-full justify-center">
		{@render children()}
	</div>
</div>
