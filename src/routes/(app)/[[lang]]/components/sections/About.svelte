<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import * as m from '$paraglide/messages.js';
	import { slide } from 'svelte/transition';
	import { getLocale } from '$paraglide/runtime.js';

	let { siteContent = {} } = $props();
	const locale = getLocale();

	let isOpen = $state(false);
</script>

<div
	id="a-propos"
	class="container mx-auto flex w-full scroll-mt-32 flex-col items-center justify-center gap-4 overflow-hidden px-4 py-12 md:px-8 md:py-16"
>
	<h2 class="mb-6 w-full text-center text-3xl font-bold md:mb-8 md:text-4xl">
		{m.about_title()}
	</h2>
	<div class="w-full max-w-3xl">
		<p class="mb-4 text-center font-roboto text-base md:text-lg">
			{siteContent.about_description?.[locale] || m.about_description()}
		</p>
		<p class="mb-4 text-center font-roboto text-base md:text-lg">
			{siteContent.about_description_2?.[locale] || m.about_description()}
		</p>
	</div>

	<div class="flex w-full flex-col items-center justify-center gap-4">
		{#if isOpen}
			<div
				class="mb-8 flex w-full flex-col items-center justify-center gap-8"
				transition:slide={{ duration: 600 }}
			>
				<div class="flex w-full flex-col items-center justify-center md:w-3/4">
					<h3 class="w-full pb-4 text-center text-xl font-bold md:text-2xl">
						{m.about_anchor_title()}
					</h3>
					<p class="text-center font-roboto text-base md:text-lg">
						{siteContent.about_anchor_description?.[locale]}
					</p>
				</div>
				<div class="flex w-full flex-col items-center justify-center md:w-3/4">
					<h3 class="w-full pb-4 text-center text-xl font-bold md:text-2xl">
						{m.about_independance_title()}
					</h3>
					<p class="text-center font-roboto text-base md:text-lg">
						{siteContent.about_independance_description?.[locale]}
					</p>
				</div>
			</div>
		{/if}

		<Button
			onClick={() => {
				isOpen = !isOpen;
			}}
			label={isOpen ? 'Voir moins -' : m.about_see_more()}
		/>
	</div>
</div>
