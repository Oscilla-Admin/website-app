<!-- src/lib/components/Logo.svelte -->
<script lang="ts">
	let {
		src = '/tempLogo.png',
		alt,
		size = 'w-30 h-20',
		href,
		classOverride,
		imageClass = ''
	}: {
		src: string;
		alt: string;
		size?: string;
		href?: string;
		classOverride?: string;
		imageClass?: string;
	} = $props();
</script>

{#if href}
	<a {href} class={`${size} ${classOverride}`}>
		<img {src} {alt} class={`h-full w-full object-contain ${imageClass}`} fetchpriority="high" />
	</a>
{:else}
	<div class={`${size} ${classOverride}`}>
		<img {src} {alt} class={`h-full w-full object-contain ${imageClass}`} fetchpriority="high" />
	</div>
{/if}
