<!-- src/lib/components/Logo.svelte -->
<script lang="ts">
    let { src = '/tempLogo.png', alt, size = 'w-30 h-20', href }: { src: string, alt: string, size?: string, href?: string } = $props();
</script>

{#if href}
<a {href} class={size}>
    <img {src} {alt} class="w-full h-full object-contain" />
</a>
{:else}
<div class={size}>
    <img {src} {alt} class="w-full h-full object-contain" />
</div>
{/if}