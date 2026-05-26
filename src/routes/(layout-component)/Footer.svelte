<script lang="ts">
	import LinkIcon from '$lib/components/LinkIcon.svelte';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import * as m from '$paraglide/messages.js';
	import { getLocale } from '$paraglide/runtime.js';

	const locale = getLocale();
	const legalNoticesHref = `/${locale}/mentions-legales`;
</script>

<footer class="bg-gray-100 py-2 md:py-4">
	<div class="container mx-auto flex flex-col items-center justify-center gap-2 px-6">
		<div class="flex w-full flex-row items-center justify-center gap-4 text-center md:gap-8">
			<p class="font-roboto text-[10px] text-gray-500 normal-case md:text-sm">
				{m.footer_rights()}
			</p>
			<LinkIcon href="https://linkedin.com/company/oscilla-acoustique" icon={Linkedin} size={16} />
		</div>
		<div class="flex w-full items-center justify-center">
			<a
				href={legalNoticesHref}
				class="font-roboto text-[10px] text-gray-500 normal-case md:text-sm"
				style="--border-color: rgba(130, 159, 125, 0.22);"
			>
				{m.footer_legal_notices()}
			</a>
		</div>
	</div>
</footer>
