<script>
	import About from "./components/sections/About.svelte";
	import ActivitiesAndProjects from "./components/sections/Activities_and_projects.svelte";
	import Contacts from "./components/sections/Contacts.svelte";
	import Hero from "./components/sections/Hero.svelte";
	import Actuality from "./components/sections/Actuality.svelte";
	import TechnicalsTools from "./components/sections/Technicals_tools.svelte";
	import SoundWave3D from "$lib/components/SoundWave3D.svelte";
	import * as m from '$paraglide/messages.js';
	import { reveal } from "$lib/utils/reveal";

	let { data } = $props();
</script>

<svelte:head>
	<title>Oscilla | Bureau d'études acoustique - Perpignan (66)</title>
	<meta name="description" content="Oscilla, bureau d'études acoustique indépendant à Perpignan. Études réglementaires, modélisation, mesures. Intervention dans les Pyrénées-Orientales (66) et Occitanie." />
	<!-- OpenGraph -->
	<meta property="og:title" content="Oscilla | Bureau d'études acoustique - Perpignan (66)" />
	<meta property="og:description" content="Oscilla, bureau d'études acoustique indépendant à Perpignan. Études réglementaires, modélisation, mesures. Intervention dans les Pyrénées-Orientales (66) et Occitanie." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/tempLogo.png" />
	<link rel="canonical" href="https://oscilla.fr/" />
</svelte:head>

<div class="flex flex-col items-center justify-center">
	<Hero siteContent={data.siteContent} />
	<SoundWave3D />
	<div use:reveal class="reveal w-full flex justify-center">
		<About siteContent={data.siteContent} />
	</div>
	<SoundWave3D />
	<div use:reveal class="reveal w-full flex justify-center">
		<Actuality news={data.news} />
	</div>
	<SoundWave3D />
	<div use:reveal class="reveal w-full flex justify-center">
		<ActivitiesAndProjects activities={data.activities} projects={data.projects} />
	</div>
	<div use:reveal class="reveal w-full flex justify-center">
		<TechnicalsTools technicalTools={data.technicalTools} />
	</div>
	<SoundWave3D />
	<div use:reveal class="reveal w-full flex justify-center">
		<Contacts siteContent={data.siteContent} />
	</div>
</div>
