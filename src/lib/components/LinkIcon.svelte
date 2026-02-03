<script lang="ts">
    let { href = '', label = '', icon: Icon = null, size = 24, onclick = null}: { href?: string, label?: string, icon?: any, size?: number, onclick?: (() => void) | null } = $props();
</script>

{#if href}
    <a {href} class="flex items-center gap-2 w-10 h-10 justify-center" >
        {#if Icon}
                <Icon size={size} />   
        {/if}
        {#if label}
            <span class="text-sm">{label}</span>
        {/if}
    </a>
{:else}
    <button onclick={onclick} class="flex items-center gap-2 w-10 h-10 justify-center cursor-pointer" >
        {#if Icon}
                <Icon size={size} />   
        {/if}
        {#if label}
            <span class="text-sm">{label}</span>
        {/if}
    </button>
{/if}