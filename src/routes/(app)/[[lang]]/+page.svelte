<script>

	import About from "./components/sections/About.svelte";
	import ActivitiesAndProjects from "./components/sections/Activities_and_projects.svelte";
	import Contacts from "./components/sections/Contacts.svelte";
	import Hero from "./components/sections/Hero.svelte";
	import LinkedinActuality from "./components/sections/LinkedinActuality.svelte";
	import TechnicalsTools from "./components/sections/Technicals_tools.svelte";
	import SoundWave3D from "$lib/components/SoundWave3D.svelte";

	let { data } = $props();
</script>

<div class="flex flex-col items-center justify-center">
	<Hero />
	<SoundWave3D />
	<About />
	<LinkedinActuality />
	<SoundWave3D />
	<ActivitiesAndProjects activities={data.activities} />
	<TechnicalsTools technicalTools={data.technicalTools} />
	<SoundWave3D />
	<Contacts />
</div>

