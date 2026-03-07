<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import * as m from '$paraglide/messages.js';
    import { slide } from 'svelte/transition';
    import { getLocale } from '$paraglide/runtime.js';

    let { siteContent = {} } = $props();
    const locale = getLocale();

    let isOpen = $state(false);
</script>

<div id="a-propos" class="flex flex-col items-center justify-center w-full py-12 md:py-16 px-4 md:px-8 gap-4 container mx-auto scroll-mt-32 overflow-hidden">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center w-full">
        {m.about_title()}
    </h2>
    <div class="w-full max-w-3xl">
        <p class="text-base md:text-lg text-center mb-4 font-roboto">
            {siteContent.about_description?.[locale] || m.about_description()}
        </p>
         <p class="text-base md:text-lg text-center mb-4 font-roboto">
            {siteContent.about_description_2?.[locale] || m.about_description()}
        </p>
    </div>
    
    <div class="flex flex-col items-center justify-center w-full gap-4">
        {#if isOpen}
            <div class="flex flex-col items-center justify-center w-full gap-8 mb-8" transition:slide={{ duration: 600 }}>
                <div class="flex flex-col items-center justify-center w-full md:w-3/4">
                    <h3 class="text-xl md:text-2xl font-bold text-center pb-4 w-full">{m.about_anchor_title()}</h3>
                    <p class="text-base md:text-lg text-center font-roboto">{siteContent.about_anchor_description?.[locale]}</p>
                </div>
                <div class="flex flex-col items-center justify-center w-full md:w-3/4">
                    <h3 class="text-xl md:text-2xl font-bold text-center pb-4 w-full">{m.about_independance_title()}</h3>
                    <p class="text-base md:text-lg text-center font-roboto">{siteContent.about_independance_description?.[locale]}</p>
                </div>
            </div>
        {/if}
        
        <Button onClick={() => { isOpen = !isOpen }} label={isOpen ? "Voir moins -" : m.about_see_more()} />
    </div>
</div>
