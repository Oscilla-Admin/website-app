<script>
	import About from "./components/sections/About.svelte";
	import ActivitiesAndProjects from "./components/sections/Activities_and_projects.svelte";
	import Contacts from "./components/sections/Contacts.svelte";
	import Hero from "./components/sections/Hero.svelte";
	import LinkedinActuality from "./components/sections/LinkedinActuality.svelte";
	import TechnicalsTools from "./components/sections/Technicals_tools.svelte";
	import SoundWave3D from "$lib/components/SoundWave3D.svelte";
	import * as m from '$paraglide/messages.js';
	import { reveal } from "$lib/utils/reveal";

	let { data } = $props();
</script>

<svelte:head>
	<title>{m.nav_home()} | Oscilla</title>
	<meta name="description" content={m.hero_tagline()} />
	<!-- OpenGraph -->
	<meta property="og:title" content="Oscilla | Expertise Acoustique" />
	<meta property="og:description" content={m.hero_tagline()} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/tempLogo.png" />
</svelte:head>

<div class="flex flex-col items-center justify-center">
	<Hero />
	<SoundWave3D />
	<div use:reveal class="reveal w-full flex justify-center">
		<About />
	</div>
	<div use:reveal class="reveal w-full flex justify-center">
		<LinkedinActuality />
	</div>
	<SoundWave3D />
	<div use:reveal class="reveal w-full flex justify-center">
		<ActivitiesAndProjects activities={data.activities} />
	</div>
	<div use:reveal class="reveal w-full flex justify-center">
		<TechnicalsTools technicalTools={data.technicalTools} />
	</div>
	<SoundWave3D />
	<div use:reveal class="reveal w-full flex justify-center">
		<Contacts />
	</div>
</div>
