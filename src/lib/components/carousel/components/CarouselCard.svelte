<script lang="ts">
	import { COLORS } from '$lib/utils/colors';
	import Waves from 'lucide-svelte/icons/waves';
	import HandMetal from 'lucide-svelte/icons/hand-metal';
	import Briefcase from 'lucide-svelte/icons/briefcase';
	import Factory from 'lucide-svelte/icons/factory';
	import Music from 'lucide-svelte/icons/music';
	import Activity from 'lucide-svelte/icons/activity';
	import FileCheck from 'lucide-svelte/icons/file-check';
	import Gauge from 'lucide-svelte/icons/gauge';
	import Speaker from 'lucide-svelte/icons/speaker';
	import Hammer from 'lucide-svelte/icons/hammer';
	import Monitor from 'lucide-svelte/icons/monitor';
	import Camera from 'lucide-svelte/icons/camera';

	const icons = {
		Waves,
		HandMetal,
		Briefcase,
		Factory,
		Music,
		Activity,
		FileCheck,
		Gauge,
		Speaker,
		Hammer,
		Monitor,
		Camera
	};

	let {
		title = '',
		description = '',
		image = '',
		iconName = '',
		href = '',
		onclick = null
	} = $props();

	let IconComponent = $derived(iconName ? icons[iconName as keyof typeof icons] : null);

	const cardClass =
		'group relative flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300';
</script>

{#snippet cardContent()}
	<!-- Zone Image ou Icône (hauteur fixe) -->
	<div class="flex h-48 items-center justify-center overflow-hidden bg-gray-50">
		{#if image}
			<img
				src={image}
				alt={title}
				class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			/>
		{:else if IconComponent}
			<div class="text-blue-600 transition-transform duration-300 group-hover:scale-110">
				<IconComponent size={64} strokeWidth={1} />
			</div>
		{:else}
			<!-- Placeholder si rien -->
			<div class="h-16 w-16 rounded-full bg-gray-200"></div>
		{/if}
	</div>

	<!-- Zone Contenu -->
	<div class="flex flex-1 flex-col items-start p-4 md:p-6">
		<h3
			class="mb-2 text-left text-lg font-bold text-gray-900 transition-colors group-hover:text-[var(--hover-color)] md:text-xl"
			style="--hover-color: {COLORS.primary}"
		>
			{title}
		</h3>

		{#if description}
			<p
				class="line-clamp-3 text-left font-roboto text-xs whitespace-pre-wrap text-gray-600 md:text-sm"
			>
				{description}
			</p>
		{/if}
	</div>
{/snippet}

{#if href}
	<a {href} {onclick} class="{cardClass} cursor-pointer no-underline">
		{@render cardContent()}
	</a>
{:else if onclick}
	<button type="button" {onclick} class="{cardClass} w-full text-left">
		{@render cardContent()}
	</button>
{:else}
	<div class={cardClass}>
		{@render cardContent()}
	</div>
{/if}
