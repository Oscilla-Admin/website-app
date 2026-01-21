<script>
	import Button from "$lib/components/Button.svelte";
	import * as m from '$paraglide/messages.js';

let isOpen = $state(false);

</script>

<div id="a-propos" class="flex flex-col items-center justify-center w-full py-16 px-8 gap-4 container mx-auto scroll-mt-24">
    <h2 class="text-4xl font-bold mb-8">{m.about_title()}</h2>
    <p class="text-lg">{m.about_description()}</p>
    <div class="flex flex-col items-center justify-center w-full gap-4">
        <Button onClick={() => { isOpen = !isOpen }} label={m.about_see_more()} />
        {#if isOpen}
        <div class="flex flex-col items-center justify-center w-full gap-4">
            <div class="flex flex-col items-center justify-center w-3/4">
                <h3 class="text-2xl font-bold text-center pb-4">{m.about_history_title()}</h3>
                <p class="text-lg">{m.about_history_description()}</p>
            </div>
            <div class="flex flex-col items-center justify-center w-3/4">
                <h3 class="text-2xl font-bold text-center pb-4">{m.about_mission_title()}</h3>
                <p class="text-lg">{m.about_mission_description()}</p>
            </div>
        </div>
        {/if}
    </div>
</div>