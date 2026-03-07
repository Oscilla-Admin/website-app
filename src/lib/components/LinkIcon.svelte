<script lang="ts">
    import { COLORS } from "$lib/utils/colors";
    let { href = '', label = '', icon: Icon = null, size = 24, onclick = null, isTransparent = false }: { href?: string, label?: string, icon?: any, size?: number, onclick?: (() => void) | null, isTransparent?: boolean } = $props();
</script>

{#if href}
    <a {href} class="flex items-center gap-2 w-12 h-12 justify-center hover:bg-black/5 rounded-full transition-colors" style="color: {isTransparent ? COLORS.white : COLORS.black};">
        {#if Icon}
                <Icon size={size} />   
        {/if}
        {#if label}
            <span class="text-sm font-bold">{label}</span>
        {/if}
    </a>
{:else}
    <button onclick={onclick} class="flex items-center gap-2 w-12 h-12 justify-center cursor-pointer hover:bg-black/5 rounded-full transition-colors" style="color: {isTransparent ? COLORS.white : COLORS.black};">
        {#if Icon}
                <Icon size={size} />   
        {/if}
        {#if label}
            <span class="text-sm font-bold">{label}</span>
        {/if}
    </button>
{/if}