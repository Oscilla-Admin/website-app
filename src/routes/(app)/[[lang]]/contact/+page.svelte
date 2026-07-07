<script lang="ts">
	import Contacts from '../components/sections/Contacts.svelte';
	import PageShell from '../components/PageShell.svelte';
	import * as m from '$paraglide/messages.js';
	import { getLocale } from '$paraglide/runtime.js';

	let { data } = $props();
	const locale = getLocale();
	const title = $derived(data.siteContent.contact_title?.[locale] || m.contact_title());
</script>

<svelte:head>
	<title>{title} | Oscilla</title>
	<meta name="description" content={data.siteContent.contact_description?.[locale] || m.contact_description()} />
</svelte:head>

<PageShell {title}>
	<Contacts siteContent={data.siteContent} showTitle={false} />
</PageShell>
