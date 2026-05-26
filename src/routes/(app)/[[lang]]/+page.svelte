<script>
	import About from './components/sections/About.svelte';
	import ActivitiesAndProjects from './components/sections/Activities_and_projects.svelte';
	import Contacts from './components/sections/Contacts.svelte';
	import Hero from './components/sections/Hero.svelte';
	import Actuality from './components/sections/Actuality.svelte';
	import TechnicalsTools from './components/sections/Technicals_tools.svelte';
	import SoundWave3D from '$lib/components/SoundWave3D.svelte';
	import * as m from '$paraglide/messages.js';
	import { reveal } from '$lib/utils/reveal';

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
	<SoundWave3D />
	<div use:reveal class="reveal flex w-full justify-center">
		<About siteContent={data.siteContent} />
	</div>
	<SoundWave3D />
	<div use:reveal class="reveal flex w-full justify-center">
		<Actuality news={data.news} />
	</div>
	<SoundWave3D />
	<div use:reveal class="reveal flex w-full justify-center">
		<ActivitiesAndProjects activities={data.activities} />
	</div>
	<div use:reveal class="reveal flex w-full justify-center">
		<TechnicalsTools technicalTools={data.technicalTools} />
	</div>
	<SoundWave3D />
	<div use:reveal class="reveal flex w-full justify-center">
		<Contacts siteContent={data.siteContent} />
	</div>
</div>
