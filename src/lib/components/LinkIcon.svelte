<script lang="ts">
    let { href = '', label = '', icon: Icon = null, size = 24}: { href: string, label?: string, icon?: any, size?: number } = $props();
</script>

<a href={href} class="flex items-center gap-2 w-10 h-10 justify-center" >
    {#if Icon}
            <Icon size={size} />   
    {/if}
    {#if label}
        <span class="text-sm">{label}</span>
    {/if}
</a>