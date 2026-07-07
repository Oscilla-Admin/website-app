<script>
	import About from './components/sections/About.svelte';
	import Hero from './components/sections/Hero.svelte';
	import PageShell from './components/PageShell.svelte';
	import * as m from '$paraglide/messages.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>{m.home_meta_title()}</title>
	<meta name="description" content={m.home_meta_description()} />
	<!-- OpenGraph -->
	<meta property="og:title" content={m.home_meta_title()} />
	<meta property="og:description" content={m.home_meta_description()} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/tempLogo.png" />
	<link rel="canonical" href="https://oscilla.fr/" />
</svelte:head>

<div class="flex flex-col items-center justify-center">
	<Hero siteContent={data.siteContent} />
	<PageShell title={m.about_title()} afterHero>
		<About siteContent={data.siteContent} showTitle={false} />
	</PageShell>
</div>
