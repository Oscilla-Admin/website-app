<script lang="ts">
	import TechnicalsTools from '../components/sections/Technicals_tools.svelte';
	import PageShell from '../components/PageShell.svelte';
	import * as m from '$paraglide/messages.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>{m.technical_title()} | Oscilla</title>
	<meta name="description" content={m.home_meta_description()} />
</svelte:head>

<PageShell title={m.technical_title()}>
	<TechnicalsTools technicalTools={data.technicalTools} showTitle={false} />
</PageShell>
