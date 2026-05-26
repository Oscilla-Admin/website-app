<script lang="ts">
	import { COLORS } from '$lib/utils/colors';
	let {
		onClick,
		label = '',
		href,
		classOverride,
		active = false,
		isTransparent = false
	}: {
		onClick?: () => void;
		label: string;
		href?: string;
		classOverride?: string;
		active?: boolean;
		isTransparent?: boolean;
	} = $props();
</script>

{#if href}
	<a
		{href}
		class="flex items-center justify-center rounded-md px-3 py-2 font-bold whitespace-nowrap transition-colors hover:cursor-pointer md:min-w-40 {classOverride}"
		style="--hover-color: {COLORS.primary}; color: {active
			? COLORS.primary
			: isTransparent
				? COLORS.white
				: COLORS.black}"
	>
		{label}
	</a>
{:else}
	<button
		onclick={onClick}
		class="flex items-center justify-center px-3 py-2 text-xl font-bold whitespace-nowrap transition-colors hover:cursor-pointer md:min-w-40 {classOverride}"
		style="--hover-color: {COLORS.primary}; color: {active
			? COLORS.primary
			: isTransparent
				? COLORS.white
				: COLORS.black}"
	>
		{label}
	</button>
{/if}
