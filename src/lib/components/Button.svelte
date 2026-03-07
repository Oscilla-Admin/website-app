<script lang="ts">
	import { COLORS } from "$lib/utils/colors";
    let { onClick, label = '', href, classOverride, active = false, isTransparent = false }: { onClick?: () => void, label: string, href?: string, classOverride?: string, active?: boolean, isTransparent?: boolean } = $props();
</script>

{#if href}
<a
    {href}
    class="font-bold px-3 py-2 md:min-w-40 rounded-md hover:cursor-pointer transition-colors whitespace-nowrap flex items-center justify-center {classOverride}"
    style="--hover-color: {COLORS.primary}; color: {active ? COLORS.primary : (isTransparent ? COLORS.white : COLORS.black)}"
>
    {label}
</a>
{:else}
<button
    onclick={onClick}
    class="text-xl font-bold px-3 py-2 md:min-w-40 hover:cursor-pointer transition-colors whitespace-nowrap flex items-center justify-center {classOverride}"
    style="--hover-color: {COLORS.primary}; color: {active ? COLORS.primary : (isTransparent ? COLORS.white : COLORS.black)}"
>
    {label}
</button>
{/if}
