<!-- src/lib/components/Logo.svelte -->
<script lang="ts">
    let { src = '/tempLogo.png', alt, size = 'w-30 h-20', href, classOverride }: { src: string, alt: string, size?: string, href?: string, classOverride?: string } = $props();
</script>

{#if href}
<a {href} class={`${size} ${classOverride}`}>
    <img {src} {alt} class="w-full h-full object-contain" />
</a>
{:else}
<div class={`${size} ${classOverride}`} >
    <img {src} {alt} class="w-full h-full object-contain" />
</div>
{/if}