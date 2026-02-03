<script lang="ts">
	import LinkIcon from "$lib/components/LinkIcon.svelte";
	import { Linkedin } from "lucide-svelte";
    import { Github } from "lucide-svelte";

</script>

<footer class="bg-gray-100 py-2 md:py-4">
    <div class="container mx-auto px-6 flex flex-col items-start justify-center gap-2">
        <div class="flex flex-row items-center justify-start gap-4 md:gap-8 w-full">
            <p class="text-left text-gray-500 text-[8px] md:text-sm">© 2026 Oscilla. Tous droits réservés.</p>
            <LinkIcon href="" icon={Linkedin} size={16} />
        </div>
        <div class="flex flex-col md:flex-row items-start md:items-center justify-start gap-2 md:gap-4 w-full">
           <div class="flex flex-row items-center justify-start gap-4 w-full">
               <p class="text-gray-500 text-[8px] md:text-xs text-left">Site développé par Timothée Beraudy-Nicolet</p> 
               <div class="flex flex-row items-center gap-4 shrink-0 scale-90 md:scale-100 origin-left">
                   <LinkIcon href="https://www.linkedin.com/in/timothée-nicolet-8b04a8329" icon={Linkedin} size={16} />
                   <LinkIcon href="https://github.com/TimBERNIC" icon={Github} size={16} /> 
               </div>
           </div>
        </div>
    </div>
</footer>