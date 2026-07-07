<script lang="ts">
	import PageShell from '../components/PageShell.svelte';
	import Actuality from '../components/sections/Actuality.svelte';
	import * as m from '$paraglide/messages.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>{m.linkedin_actualities_title()} | Oscilla</title>
	<meta name="description" content={m.home_meta_description()} />
</svelte:head>

<PageShell title={m.linkedin_actualities_title()}>
	<Actuality news={data.news} />
</PageShell>
