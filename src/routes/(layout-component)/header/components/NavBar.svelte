<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import LinkIcon from "$lib/components/LinkIcon.svelte";	
	import { Mail, Linkedin } from 'lucide-svelte';
	
</script>

<div class="flex flex-row items-center w-full gap-4">
	<nav class="flex flex-row items-center justify-end flex-7 md:gap-20 ml-14">
		<Button href="#accueil" label="Accueil" />
		<Button href="#a-propos" label="A propos de nous" />
		<Button href="#activites-projets" label="Activités et Projets" />
		<Button href="#moyens-techniques" label="Moyens techniques" />
		<Button href="#contact" label="Contact" />
	</nav>
	<div class="flex flex-row items-center justify-end gap-2 flex-1">
		<LinkIcon href="" icon={Mail} />
		<LinkIcon href="" icon={Linkedin} />
	</div>
</div>

