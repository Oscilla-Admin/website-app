<script lang="ts">
	import { COLORS } from "$lib/utils/colors";
    let { href = '', label = '', icon: Icon = null, size = 24}: { href: string, label?: string, icon?: any, size?: number } = $props();
</script>

<a href={href} class="flex items-center gap-2 w-10 h-10 rounded-full justify-center" style="background-color: {COLORS.gray};">
    {#if Icon}
            <Icon size={size} />   
    {/if}
    {#if label}
        <span class="text-sm">{label}</span>
    {/if}
</a>