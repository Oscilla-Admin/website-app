<script lang="ts">
	import { COLORS } from '$lib/utils/colors';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import { getLocale } from '$paraglide/runtime.js';
	import * as m from '$paraglide/messages.js';
	import { onMount } from 'svelte';
	import { getContactEmail } from '$lib/utils/contact';
	import { fade } from 'svelte/transition';
	import PageLoader from '$lib/components/PageLoader.svelte';

	let { data } = $props();

	const locale = getLocale();

	let contactEmail = $state('');
	let isLoading = $state(true);

	onMount(async () => {
		// On s'assure que le scroll remonte en haut de page
		window.scrollTo(0, 0);

		contactEmail = await getContactEmail();

		// On laisse le loader visible au moins 1.2s pour l'onde sonore
		setTimeout(() => {
			isLoading = false;
		}, 400);
	});

	function openMailto() {
		if (contactEmail) {
			window.location.href = `mailto:${contactEmail}?subject=Contact depuis le site Oscilla - Projet ${data.project.name[locale]}`;
		}
	}
</script>

<svelte:head>
	<title>{data.project.name[locale]} | Oscilla</title>
	<meta name="description" content={data.project.description[locale]} />
	<!-- OpenGraph -->
	<meta property="og:title" content="{data.project.name[locale]} | Oscilla" />
	<meta property="og:description" content={data.project.description[locale]} />
	<meta property="og:image" content={data.project.image} />
	<meta property="og:type" content="article" />
</svelte:head>

<PageLoader active={isLoading} />

<div class="mt-24 min-h-screen" in:fade={{ duration: 800, delay: 200 }}>
	<!-- Header avec image -->
	<div class="relative h-80 w-full overflow-hidden md:h-96">
		<img
			src={data.project.image}
			alt={data.project.name[locale]}
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-black/40"></div>

		<!-- Bouton retour -->
		<a
			href="/?activity={data.project.activityId}#activites-references"
			class="absolute top-6 left-6 flex items-center gap-2 rounded-md bg-black/30 px-4 py-2 text-white transition-colors hover:bg-black/50"
		>
			<ArrowLeft size={20} />
			{m.project_back()}
		</a>
	</div>

	<!-- Contenu -->
	<div class="container mx-auto max-w-4xl px-6 py-12">
		<!-- Titre -->
		<h1 class="mb-6 text-4xl font-bold md:text-5xl">
			{data.project.name[locale]}
		</h1>

		<!-- Badge activité -->
		{#if data.activity}
			<span
				class="mb-8 inline-block rounded-full px-4 py-2 text-sm font-medium text-white"
				style="background-color: {COLORS.primary};"
			>
				{data.activity.title[locale]}
			</span>
		{/if}

		<!-- Description -->
		<div class="prose prose-lg max-w-none">
			<p class="text-xl leading-relaxed whitespace-pre-wrap text-gray-700">
				{data.project.description[locale]}
			</p>
		</div>

		<!-- Image complète -->
		<div class="mt-10">
			<img
				src={data.project.image}
				alt={data.project.name[locale]}
				class="h-auto w-full rounded-lg shadow-lg"
			/>
		</div>

		<!-- Section détails (placeholder pour plus tard) -->
		<div class="mt-12 border-t border-gray-200 pt-8">
			<h2 class="mb-6 text-2xl font-bold">{m.project_details_title()}</h2>
			<p class="text-gray-600">
				{m.project_details_coming()}
			</p>
		</div>

		<!-- CTA Contact -->
		<div class="mt-12 rounded-lg p-8 text-center" style="background-color: {COLORS.gray};">
			<h3 class="mb-4 text-2xl font-bold">{m.project_similar_title()}</h3>
			<p class="mb-6 text-gray-700">
				{m.project_similar_description()}
			</p>
			<button
				onclick={openMailto}
				disabled={isLoading || !contactEmail}
				class="inline-block rounded-md px-8 py-3 font-medium text-white transition-opacity hover:cursor-pointer hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
				style="background-color: {COLORS.primary};"
			>
				{#if isLoading}
					{m.contact_loading()}
				{:else}
					{m.contact_send_email()}
				{/if}
			</button>
		</div>
	</div>
</div>
