<!-- src/lib/components/Logo.svelte -->
<script lang="ts">
    let { src = '/tempLogo.png', alt, size = 'w-30 h-20'}: { src: string, alt: string, size?: string } = $props();
</script>

<div class={size}>
    <img {src} {alt} class="w-full h-full object-contain" />
</div>