<script lang="ts">
	import { COLORS } from "$lib/utils/colors";
	import { ArrowLeft } from "lucide-svelte";

	let { data } = $props();

	// TODO: Gérer la langue dynamiquement avec Paraglide
	const lang = 'fr';
</script>

<svelte:head>
	<title>{data.project.name[lang]} | Oscilla</title>
	<meta name="description" content={data.project.description[lang]} />
</svelte:head>

<div class="min-h-screen mt-24">
	<!-- Header avec image -->
	<div class="relative h-80 md:h-96 w-full overflow-hidden">
		<img
			src={data.project.image}
			alt={data.project.name[lang]}
			class="w-full h-full object-cover"
		/>
		<div class="absolute inset-0 bg-black/40"></div>

		<!-- Bouton retour -->
		<a
			href="/#projects"
			class="absolute top-6 left-6 flex items-center gap-2 text-white bg-black/30 hover:bg-black/50 px-4 py-2 rounded-md transition-colors"
		>
			<ArrowLeft size={20} />
			Retour
		</a>
	</div>

	<!-- Contenu -->
	<div class="container mx-auto px-6 py-12 max-w-4xl">
		<!-- Titre -->
		<h1 class="text-4xl md:text-5xl font-bold mb-6">
			{data.project.name[lang]}
		</h1>

		<!-- Badge activité -->
		{#if data.activity}
			<span
				class="inline-block px-4 py-2 rounded-full text-white text-sm font-medium mb-8"
				style="background-color: {COLORS.primary};"
			>
				{data.activity.title[lang]}
			</span>
		{/if}

		<!-- Description -->
		<div class="prose prose-lg max-w-none">
			<p class="text-xl text-gray-700 leading-relaxed">
				{data.project.description[lang]}
			</p>
		</div>

		<!-- Image complète -->
		<div class="mt-10">
			<img
				src={data.project.image}
				alt={data.project.name[lang]}
				class="w-full h-auto rounded-lg shadow-lg"
			/>
		</div>

		<!-- Section détails (placeholder pour plus tard) -->
		<div class="mt-12 pt-8 border-t border-gray-200">
			<h2 class="text-2xl font-bold mb-6">Détails du projet</h2>
			<p class="text-gray-600">
				Plus d'informations à venir...
			</p>
		</div>

		<!-- CTA Contact -->
		<div class="mt-12 p-8 rounded-lg text-center" style="background-color: {COLORS.gray};">
			<h3 class="text-2xl font-bold mb-4">Un projet similaire ?</h3>
			<p class="text-gray-700 mb-6">
				Contactez-nous pour discuter de vos besoins en acoustique.
			</p>
			<a
				href="/#contact"
				class="inline-block px-8 py-3 rounded-md text-white font-medium transition-opacity hover:opacity-90"
				style="background-color: {COLORS.primary};"
			>
				Nous contacter
			</a>
		</div>
	</div>
</div>
