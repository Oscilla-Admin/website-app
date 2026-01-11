<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import LinkIcon from "$lib/components/LinkIcon.svelte";	
	import { Mail, Linkedin } from 'lucide-svelte';
	
</script>

<div class="flex flex-row items-center justify-end gap-2 w-full">
	<nav class="flex flex-row items-center justify-around gap-2 w-full">
		<Button onClick={() => {}} label="Accueil" />
		<Button onClick={() => {}} label="A propos de nous" />
		<Button onClick={() => {}} label="Activités et Projets" />
		<Button onClick={() => {}} label="Moyens techniques" />
		<Button onClick={() => {}} label="Contact" />
	</nav>
	<div class="flex flex-row items-center justify-around gap-2 w-40 ">
	   <LinkIcon href="" icon={Mail} />
	   <LinkIcon href="" icon={Linkedin} />
	</div>
</div>

