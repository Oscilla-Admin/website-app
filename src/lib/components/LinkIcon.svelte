<script lang="ts">
	import { COLORS } from '$lib/utils/colors';
	let {
		href = '',
		label = '',
		icon: Icon = null,
		size = 24,
		onclick = null,
		isTransparent = false
	}: {
		href?: string;
		label?: string;
		icon?: any;
		size?: number;
		onclick?: (() => void) | null;
		isTransparent?: boolean;
	} = $props();
</script>

{#if href}
	<a
		{href}
		class="flex h-12 w-12 items-center justify-center gap-2 rounded-full transition-colors hover:bg-black/5"
		style="color: {isTransparent ? COLORS.white : COLORS.black};"
	>
		{#if Icon}
			<Icon {size} />
		{/if}
		{#if label}
			<span class="text-sm font-bold">{label}</span>
		{/if}
	</a>
{:else}
	<button
		{onclick}
		class="flex h-12 w-12 cursor-pointer items-center justify-center gap-2 rounded-full transition-colors hover:bg-black/5"
		style="color: {isTransparent ? COLORS.white : COLORS.black};"
	>
		{#if Icon}
			<Icon {size} />
		{/if}
		{#if label}
			<span class="text-sm font-bold">{label}</span>
		{/if}
	</button>
{/if}
