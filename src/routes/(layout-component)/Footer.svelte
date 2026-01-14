<script lang="ts">
	import LinkIcon from "$lib/components/LinkIcon.svelte";
	import { Linkedin } from "lucide-svelte";
    import { Github } from "lucide-svelte";

</script>

<footer class="bg-gray-100 py-4">
    <div class="container mx-auto px-4">
        <div class="flex flex-row items-center justify-center gap-8">
            <p class="text-center text-gray-500">© 2024 Oscilla. Tous droits réservés.</p>
            <LinkIcon href="" icon={Linkedin} size={16} />
        </div>
        <div class="flex flex-row items-center justify-center gap-4 ">
           <p class="text-gray-500">Site développé par Timothée Beraudy-Nicolet</p> 
           <LinkIcon href="https://www.linkedin.com/in/timothée-nicolet-8b04a8329" icon={Linkedin} size={16} />
            <LinkIcon href="https://github.com/TimBERNIC" icon={Github} size={16} /> 
        </div>
    </div>
</footer>