<script lang="ts">
	import { COLORS } from "$lib/utils/colors";
	import { onMount } from "svelte";
	import { getContactEmail } from "../function";

	let contactEmail = $state('');
	let isLoading = $state(true);

	onMount(async () => {
        contactEmail = await getContactEmail();
        isLoading = false;
	});

	function openMailto() {
		if (contactEmail) {
			window.location.href = `mailto:${contactEmail}?subject=Contact depuis le site Oscilla`;
		}
	}
</script>

<section id="contact" class="flex flex-col items-center justify-center w-full py-16 px-8 gap-6 container mx-auto scroll-mt-24">
	<h2 class="text-4xl font-bold mb-8">Nous contacter</h2>
	<p class="text-lg text-center max-w-2xl">
		Vous avez un projet acoustique ? Une question ? N'hésitez pas à nous contacter.
	</p>

	<button
		onclick={openMailto}
		disabled={isLoading || !contactEmail}
		class="p-4 px-8 rounded-md text-white font-medium transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
		style="background-color: {COLORS.primary};"
	>
		{#if isLoading}
			Chargement...
		{:else}
			Nous envoyer un email
		{/if}
	</button>
</section>

<!--
=====================================================
CODE INDENTÉ - À RÉACTIVER AVEC UN SERVICE D'ENVOI D'EMAIL
(Resend, SendGrid, Nodemailer, etc.)
Date: Janvier 2026
=====================================================

<script lang="ts">
	import { COLORS } from "$lib/utils/colors";

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let status = $state<'idle' | 'loading' | 'success' | 'error'>('idle');
	let errorMessage = $state('');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		status = 'loading';
		errorMessage = '';

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name, email, message })
			});

			const data = await response.json();

			if (data.success) {
				status = 'success';
				name = '';
				email = '';
				message = '';
			} else {
				status = 'error';
				errorMessage = data.error || 'Une erreur est survenue';
			}
		} catch (error) {
			status = 'error';
			errorMessage = 'Impossible de contacter le serveur';
		}
	}
</script>

<section id="contact" class="flex flex-col items-center justify-center w-full p-8 gap-6 container mx-auto">
	<h2 class="text-4xl font-bold">Nous contacter</h2>
	<p class="text-lg text-center max-w-2xl">
		Vous avez un projet acoustique ? Une question ? N'hésitez pas à nous contacter.
	</p>

	<form
		onsubmit={handleSubmit}
		class="flex flex-col gap-4 w-full max-w-lg"
	>
		<div class="flex flex-col gap-2">
			<label for="name" class="font-medium">Nom</label>
			<input
				type="text"
				id="name"
				bind:value={name}
				required
				class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
				style="--ring-color: {COLORS.primary}; focus:ring-[var(--ring-color)]"
				placeholder="Votre nom"
			/>
		</div>

		<div class="flex flex-col gap-2">
			<label for="email" class="font-medium">Email</label>
			<input
				type="email"
				id="email"
				bind:value={email}
				required
				class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
				placeholder="votre@email.com"
			/>
		</div>

		<div class="flex flex-col gap-2">
			<label for="message" class="font-medium">Message</label>
			<textarea
				id="message"
				bind:value={message}
				required
				rows="5"
				class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 resize-none"
				placeholder="Décrivez votre projet ou votre question..."
			></textarea>
		</div>

		<button
			type="submit"
			disabled={status === 'loading'}
			class="p-3 rounded-md text-white font-medium transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
			style="background-color: {COLORS.primary};"
		>
			{#if status === 'loading'}
				Envoi en cours...
			{:else}
				Envoyer
			{/if}
		</button>

		{#if status === 'success'}
			<p class="text-green-600 text-center font-medium">
				Merci ! Votre message a bien été envoyé.
			</p>
		{/if}

		{#if status === 'error'}
			<p class="text-red-600 text-center font-medium">
				{errorMessage}
			</p>
		{/if}
	</form>
</section>
-->
