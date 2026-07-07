<script lang="ts">
	import { COLORS } from '$lib/utils/colors';
	import { getContactEmail, getContactPhone } from '$lib/utils/contact';
	import Copy from 'lucide-svelte/icons/copy';
	import * as m from '$paraglide/messages.js';
	import { getLocale } from '$paraglide/runtime.js';

	let { siteContent = {}, showTitle = true } = $props();
	const locale = getLocale();

	let contactEmail = $state('');
	let contactPhone = $state('');
	let isEmailLoading = $state(false);
	let isPhoneLoading = $state(false);

	async function revealEmail() {
		if (contactEmail || isEmailLoading) return;
		isEmailLoading = true;
		contactEmail = await getContactEmail();
		isEmailLoading = false;
	}

	async function revealPhone() {
		if (contactPhone || isPhoneLoading) return;
		isPhoneLoading = true;
		contactPhone = await getContactPhone();
		isPhoneLoading = false;
	}

	function openMailto() {
		if (contactEmail) {
			window.location.href = `mailto:${contactEmail}?subject=Contact depuis le site Oscilla`;
		}
	}

	function callPhone() {
		if (contactPhone && window.matchMedia('(max-width: 767px)').matches) {
			window.location.href = `tel:${contactPhone}`;
		}
	}

	async function copyToClipboard(value: string) {
		if (!value) return;
		await navigator.clipboard.writeText(value);
	}
</script>

<section
	id="contact"
	class="container mx-auto flex w-full scroll-mt-32 flex-col items-center justify-center gap-5 px-6 py-12 md:gap-6 md:px-8 md:py-16"
>
	{#if showTitle}
		<h2 class="mb-6 text-center text-3xl font-bold md:mb-8 md:text-4xl">
			{siteContent.contact_title?.[locale] || m.contact_title()}
		</h2>
	{/if}
	<p class="w-full max-w-2xl text-center text-sm leading-relaxed break-words md:text-lg">
		{siteContent.contact_description?.[locale] || m.contact_description()}
	</p>

	<div class="flex w-full max-w-xl flex-col gap-6 md:gap-4">
		<div
			class="flex flex-col items-center gap-2 px-4 py-1 text-center md:flex-row md:justify-between md:gap-3 md:py-2 md:text-left"
		>
			<div class="flex flex-col items-center gap-1 md:items-start">
				<button
					onclick={revealEmail}
					disabled={!!contactEmail || isEmailLoading}
					class="w-fit font-roboto text-sm normal-case transition-opacity hover:cursor-pointer hover:opacity-80 disabled:cursor-default disabled:opacity-100 md:text-sm"
					style="color: {COLORS.primary};"
				>
					{m.contact_email_label()}
				</button>
			</div>
			{#if !contactEmail}
				<button
					onclick={revealEmail}
					disabled={isEmailLoading}
					class="flex min-h-10 w-full max-w-xs items-center justify-center rounded-md px-4 text-center text-sm font-medium transition-opacity hover:cursor-pointer hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 md:h-12 md:w-72 md:max-w-none md:text-sm"
					style="color: {COLORS.primary};"
				>
					{isEmailLoading ? m.contact_loading() : m.contact_reveal_email()}
				</button>
			{:else}
				<div
					class="flex w-full max-w-xs flex-col items-center justify-center gap-2 md:w-72 md:max-w-none md:flex-row"
				>
					<button
						onclick={openMailto}
						class="flex min-h-10 flex-1 items-center justify-center rounded-md px-4 text-center text-sm font-medium text-white transition-opacity hover:cursor-pointer hover:opacity-90 md:h-12"
						style="background-color: {COLORS.primary};"
					>
						{contactEmail}
					</button>
					<button
						onclick={() => copyToClipboard(contactEmail)}
						aria-label="Copier l'email"
						title="Copier l'email"
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-opacity hover:cursor-pointer hover:opacity-80 md:h-12 md:w-12"
						style="color: {COLORS.primary};"
					>
						<Copy size={18} strokeWidth={1.8} />
					</button>
				</div>
			{/if}
		</div>

		<div
			class="flex flex-col items-center gap-2 px-4 py-1 text-center md:flex-row md:justify-between md:gap-3 md:py-2 md:text-left"
		>
			<div class="flex flex-col items-center gap-1 md:items-start">
				<button
					onclick={revealPhone}
					disabled={!!contactPhone || isPhoneLoading}
					class="w-fit font-roboto text-sm normal-case transition-opacity hover:cursor-pointer hover:opacity-80 disabled:cursor-default disabled:opacity-100 md:text-sm"
					style="color: {COLORS.primary};"
				>
					{m.contact_phone_label()}
				</button>
			</div>
			{#if !contactPhone}
				<button
					onclick={revealPhone}
					disabled={isPhoneLoading}
					class="flex min-h-10 w-full max-w-xs items-center justify-center rounded-md px-4 text-center text-sm font-medium transition-opacity hover:cursor-pointer hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 md:h-12 md:w-72 md:max-w-none md:text-sm"
					style="color: {COLORS.primary};"
				>
					{isPhoneLoading ? m.contact_loading() : m.contact_reveal_phone()}
				</button>
			{:else}
				<div
					class="flex w-full max-w-xs flex-col items-center justify-center gap-2 md:w-72 md:max-w-none md:flex-row"
				>
					<button
						onclick={callPhone}
						class="flex min-h-10 flex-1 items-center justify-center rounded-md px-4 text-center text-sm font-medium transition-opacity hover:opacity-80 md:h-12 md:cursor-default"
						style="color: {COLORS.primary};"
					>
						{contactPhone}
					</button>
					<button
						onclick={() => copyToClipboard(contactPhone)}
						aria-label="Copier le téléphone"
						title="Copier le téléphone"
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-opacity hover:cursor-pointer hover:opacity-80 md:h-12 md:w-12"
						style="color: {COLORS.primary};"
					>
						<Copy size={18} strokeWidth={1.8} />
					</button>
				</div>
			{/if}
		</div>
	</div>
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
