<script lang="ts">
	import { COLORS } from "$lib/utils/colors";
	import { ArrowLeft } from "lucide-svelte";
	import { getLocale } from '$paraglide/runtime.js';
	import * as m from '$paraglide/messages.js';
	import { onMount } from "svelte";
	import { getContactEmail } from "$lib/utils/contact";
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

<div class="min-h-screen mt-24" in:fade={{ duration: 800, delay: 200 }}>
	<!-- Header avec image -->
	<div class="relative h-80 md:h-96 w-full overflow-hidden">
		<img
			src={data.project.image}
			alt={data.project.name[locale]}
			class="w-full h-full object-cover"
		/>
		<div class="absolute inset-0 bg-black/40"></div>

		<!-- Bouton retour -->
		<a
			href="/?activity={data.project.activityId}#activites-references"
			class="absolute top-6 left-6 flex items-center gap-2 text-white bg-black/30 hover:bg-black/50 px-4 py-2 rounded-md transition-colors"
		>
			<ArrowLeft size={20} />
			{m.project_back()}
		</a>
	</div>

	<!-- Contenu -->
	<div class="container mx-auto px-6 py-12 max-w-4xl">
		<!-- Titre -->
		<h1 class="text-4xl md:text-5xl font-bold mb-6">
			{data.project.name[locale]}
		</h1>

		<!-- Badge activité -->
		{#if data.activity}
			<span
				class="inline-block px-4 py-2 rounded-full text-white text-sm font-medium mb-8"
				style="background-color: {COLORS.primary};"
			>
				{data.activity.title[locale]}
			</span>
		{/if}

		<!-- Description -->
		<div class="prose prose-lg max-w-none">
			<p class="text-xl text-gray-700 leading-relaxed">
				{data.project.description[locale]}
			</p>
		</div>

		<!-- Image complète -->
		<div class="mt-10">
			<img
				src={data.project.image}
				alt={data.project.name[locale]}
				class="w-full h-auto rounded-lg shadow-lg"
			/>
		</div>

		<!-- Section détails (placeholder pour plus tard) -->
		<div class="mt-12 pt-8 border-t border-gray-200">
			<h2 class="text-2xl font-bold mb-6">{m.project_details_title()}</h2>
			<p class="text-gray-600">
				{m.project_details_coming()}
			</p>
		</div>

		<!-- CTA Contact -->
		<div class="mt-12 p-8 rounded-lg text-center" style="background-color: {COLORS.gray};">
			<h3 class="text-2xl font-bold mb-4">{m.project_similar_title()}</h3>
			<p class="text-gray-700 mb-6">
				{m.project_similar_description()}
			</p>
			<button
				onclick={openMailto}
				disabled={isLoading || !contactEmail}
				class="inline-block px-8 py-3 rounded-md text-white font-medium transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
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
