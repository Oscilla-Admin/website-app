<script lang="ts">
	import { COLORS } from "$lib/utils/colors";
    let { onClick, label = '', href }: { onClick?: () => void, label: string, href?: string } = $props();
</script>

{#if href}
<a
    {href}
    class="text-black px-3 py-2 md:min-w-40 rounded-md hover:cursor-pointer transition-colors hover:text-[var(--hover-color)] whitespace-nowrap"
    style="--hover-color: {COLORS.primary}"
>
    {label}
</a>
{:else}
<button
    onclick={onClick}
    class="text-black px-3 py-2 md:min-w-40 rounded-md hover:cursor-pointer transition-colors hover:text-[var(--hover-color)] whitespace-nowrap"
    style="--hover-color: {COLORS.primary}"
>
    {label}
</button>
{/if}