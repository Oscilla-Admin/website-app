<script lang="ts">
	import ActivitiesAndProjects from '../components/sections/Activities_and_projects.svelte';
	import PageShell from '../components/PageShell.svelte';
	import * as m from '$paraglide/messages.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>{m.activities_title()} | Oscilla</title>
	<meta name="description" content={m.home_meta_description()} />
</svelte:head>

<PageShell title={m.activities_title()}>
	<ActivitiesAndProjects activities={data.activities} showTitle={false} />
</PageShell>
