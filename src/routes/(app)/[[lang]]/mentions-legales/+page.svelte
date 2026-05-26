<script lang="ts">
	import LinkIcon from '$lib/components/LinkIcon.svelte';
	import { COLORS } from '$lib/utils/colors';
	import { getContactEmail } from '$lib/utils/contact';
	import { Github, Linkedin } from 'lucide-svelte';
	import * as m from '$paraglide/messages.js';
	import { onMount } from 'svelte';

	let contactEmail = $state('');

	onMount(async () => {
		contactEmail = (await getContactEmail()) || '';
	});

	async function openContactMailto() {
		const email = contactEmail || (await getContactEmail()) || '';
		if (!email) return;
		contactEmail = email;
		window.location.href = `mailto:${email}`;
	}
</script>

<svelte:head>
	<title>{m.legal_meta_title()}</title>
	<meta name="description" content={m.legal_meta_description()} />
</svelte:head>

<section
	class="mt-24 w-full px-4 pt-25 pb-25 md:px-8"
	style={`background-color: ${COLORS.grayLight};`}
>
	<div class="container mx-auto max-w-5xl">
		<div class="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm">
			<div
				class="border-b border-black/5 px-6 py-10 md:px-12 md:py-14"
				style={`background-color: ${COLORS.white};`}
			>
				<p
					class="mb-3 text-left text-sm tracking-[0.2em] text-gray-500"
					style="font-family: var(--font-roboto); text-transform: none;"
				>
					{m.legal_brand()}
				</p>
				<h1 class="text-left text-3xl font-semibold md:text-5xl">{m.legal_title()}</h1>
				<p
					class="mt-4 text-left leading-relaxed text-gray-600 normal-case"
					style="font-family: var(--font-roboto); text-transform: none;"
				>
					{m.legal_intro()}
				</p>
			</div>

			<div class="legal-content space-y-10 px-6 py-10 md:px-12 md:py-12">
				<section class="space-y-4">
					<h2 class="text-left text-2xl md:text-3xl">{m.legal_section_site_publishing()}</h2>
					<div
						class="space-y-4 text-left leading-relaxed text-gray-700 normal-case"
						style="font-family: var(--font-roboto); text-transform: none;"
					>
						<p>
							{m.legal_site_intro_before_link()}
							<a
								class="underline underline-offset-4"
								href="https://oscilla.fr"
								target="_blank"
								rel="noreferrer">https://oscilla.fr</a
							>,
							{m.legal_site_intro_after_link()}
						</p>
						<p>
							{m.legal_site_editor_text()}
						</p>
						<ul
							class="list-disc space-y-3 pl-5 marker:text-[color:var(--marker-color)]"
							style={`--marker-color: ${COLORS.primary};`}
						>
							<li>{m.legal_vat_number()}</li>
							<li>
								{m.legal_contact_label()}
								<button
									type="button"
									class="cursor-pointer font-roboto text-[color:var(--link-color)] normal-case underline underline-offset-4 hover:opacity-80"
									style={`--link-color: ${COLORS.primary};`}
									onclick={openContactMailto}
								>
									{m.legal_contact_cta()}
								</button>
							</li>
							<li>{m.legal_publisher_director()}</li>
						</ul>
					</div>
				</section>

				<section class="space-y-4">
					<h2 class="text-left text-2xl md:text-3xl">{m.legal_section_hosting()}</h2>
					<div
						class="space-y-4 text-left leading-relaxed text-gray-700 normal-case"
						style="font-family: var(--font-roboto); text-transform: none;"
					>
						<p>
							{m.legal_hosting_text()}
						</p>
						<p>
							{m.legal_hosting_contact_before_link()}
							<a
								class="underline underline-offset-4"
								href="https://www.infomaniak.com"
								target="_blank"
								rel="noreferrer">www.infomaniak.com</a
							>.
						</p>
					</div>
				</section>

				<section class="space-y-4">
					<h2 class="text-left text-2xl md:text-3xl">{m.legal_section_ip()}</h2>
					<div
						class="space-y-4 text-left leading-relaxed text-gray-700 normal-case"
						style="font-family: var(--font-roboto); text-transform: none;"
					>
						<p>
							{m.legal_ip_text_1()}
						</p>
						<p>
							{m.legal_ip_text_2()}
						</p>
					</div>
				</section>

				<section class="space-y-4">
					<h2 class="text-left text-2xl md:text-3xl">{m.legal_section_personal_data()}</h2>
					<div
						class="space-y-4 text-left leading-relaxed text-gray-700 normal-case"
						style="font-family: var(--font-roboto); text-transform: none;"
					>
						<p>
							{m.legal_personal_data_text_1()}
						</p>
						<p>
							{m.legal_personal_data_text_before_cta()}
							<button
								type="button"
								class="cursor-pointer font-roboto text-[color:var(--link-color)] normal-case underline underline-offset-4 hover:opacity-80"
								style={`--link-color: ${COLORS.primary};`}
								onclick={openContactMailto}
							>
								{m.legal_personal_data_cta()}
							</button>
							.
						</p>
					</div>
				</section>

				<section class="space-y-4">
					<h2 class="text-left text-2xl md:text-3xl">{m.legal_section_applicable_law()}</h2>
					<p
						class="text-left leading-relaxed text-gray-700 normal-case"
						style="font-family: var(--font-roboto); text-transform: none;"
					>
						{m.legal_applicable_law_text()}
					</p>
				</section>

				<div
					class="flex w-full flex-col items-start justify-start gap-2 border-t border-black/5 pt-4 md:flex-row md:items-center md:gap-4"
				>
					<div class="flex w-full flex-row items-center justify-start gap-4 md:justify-center">
						<p class="text-left font-roboto text-[10px] text-gray-500 normal-case md:text-sm">
							{m.footer_developed_by()}
						</p>
						<div
							class="flex shrink-0 origin-left scale-90 flex-row items-center gap-4 md:scale-100"
						>
							<LinkIcon
								href="https://www.linkedin.com/in/timothée-nicolet-8b04a8329"
								icon={Linkedin}
								size={16}
							/>
							<LinkIcon href="https://github.com/TimBERNIC" icon={Github} size={16} />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.legal-content :global(p),
	.legal-content :global(li),
	.legal-content :global(a),
	.legal-content :global(button),
	.legal-content :global(span),
	.legal-content :global(ul) {
		font-family: var(--font-roboto);
		text-transform: none !important;
	}

	.legal-content :global(h2) {
		font-family: var(--font-sans);
	}

	.legal-content :global(button) {
		letter-spacing: normal;
	}
</style>
