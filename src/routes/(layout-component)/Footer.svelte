<script lang="ts">
	import LinkIcon from "$lib/components/LinkIcon.svelte";
	import Linkedin from "lucide-svelte/icons/linkedin";
    import Github from "lucide-svelte/icons/github";
    import * as m from '$paraglide/messages.js';
	import { getLocale } from '$paraglide/runtime.js';

	const locale = getLocale();
	const legalNoticesHref = `/${locale}/mentions-legales`;
</script>

<footer class="bg-gray-100 py-2 md:py-4">
	<div class="container mx-auto px-6 flex flex-col items-start justify-center gap-2">
	    <div class="flex flex-row items-center justify-start md:justify-center text-left md:text-center gap-4 md:gap-8 w-full">
	            <p class="text-left text-gray-500 text-[10px] md:text-sm font-roboto normal-case">{m.footer_rights()}</p>
	            <LinkIcon href="https://linkedin.com/company/oscilla-acoustique" icon={Linkedin} size={16} />
	        </div>
            <div class="flex w-full items-start justify-start md:justify-center">
                <a href={legalNoticesHref} class="text-left text-gray-500 text-[10px] md:text-sm font-roboto normal-case" style={`--border-color: rgba(130, 159, 125, 0.22);`}>
                    {m.footer_legal_notices()}
                </a>
		</div>

    </div>
</footer>
