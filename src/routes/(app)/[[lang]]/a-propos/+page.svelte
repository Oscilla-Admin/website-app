<script lang="ts">
	import About from '../components/sections/About.svelte';
	import PageShell from '../components/PageShell.svelte';
	import * as m from '$paraglide/messages.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>{m.about_title()} | Oscilla</title>
	<meta name="description" content={m.home_meta_description()} />
</svelte:head>

<PageShell title={m.about_title()}>
	<About siteContent={data.siteContent} showTitle={false} />
</PageShell>
