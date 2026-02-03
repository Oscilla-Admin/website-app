<script lang="ts">
	import LinkIcon from "$lib/components/LinkIcon.svelte";
	import Linkedin from "lucide-svelte/icons/linkedin";
    import Github from "lucide-svelte/icons/github";
    import * as m from '$paraglide/messages.js';
</script>

<footer class="bg-gray-100 py-2 md:py-4">
	<div class="container mx-auto px-6 flex flex-col items-start justify-center gap-2">
	    <div class="flex flex-row items-center justify-start md:justify-center text-left md:text-center gap-4 md:gap-8 w-full">
            <p class="text-left text-gray-500 text-[10px] md:text-sm">{m.footer_rights()}</p>
            <LinkIcon href="https://linkedin.com/company/oscilla" icon={Linkedin} size={16} />
        </div>
        <div class="flex flex-col md:flex-row items-start md:items-center justify-start gap-2 md:gap-4 w-full">
           <div class="flex flex-row items-center justify-start md:justify-center gap-4 w-full">
               <p class="text-gray-500 text-[10px] md:text-xs text-left">{m.footer_developed_by()}</p> 
               <div class="flex flex-row items-center gap-4 shrink-0 scale-90 md:scale-100 origin-left">
                   <LinkIcon href="https://www.linkedin.com/in/timothée-nicolet-8b04a8329" icon={Linkedin} size={16} />
                   <LinkIcon href="https://github.com/TimBERNIC" icon={Github} size={16} /> 
               </div>
           </div>
        </div>
    </div>
</footer>
