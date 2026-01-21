<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import LinkIcon from "$lib/components/LinkIcon.svelte";
	import LanguageSelector from "./LanguageSelector.svelte";
	import { Mail, Linkedin } from 'lucide-svelte';
	import * as m from '$paraglide/messages.js';
</script>

<div class="flex flex-row items-center w-full gap-4">
	<nav class="flex flex-row items-center justify-end flex-7 md:gap-20 ml-14">
		<Button href="#accueil" label={m.nav_home()} />
		<Button href="#a-propos" label={m.nav_about()} />
		<Button href="#activites-projets" label={m.nav_activities()} />
		<Button href="#moyens-techniques" label={m.nav_technical()} />
		<Button href="#contact" label={m.nav_contact()} />
	</nav>
	<div class="flex flex-row items-center justify-end gap-2 flex-1">
		<LanguageSelector />
		<LinkIcon href="" icon={Mail} />
		<LinkIcon href="" icon={Linkedin} />
	</div>
</div>

