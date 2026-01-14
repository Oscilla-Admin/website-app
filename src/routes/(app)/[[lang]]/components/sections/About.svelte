<script>
	import Button from "$lib/components/Button.svelte";


let isOpen = $state(false);

</script>

<div class="flex flex-col items-center justify-center w-full p-8 gap-4 container mx-auto">
    <h2 class="text-4xl font-bold">A propos de nous</h2>
    <p class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    <div class="flex flex-col items-center justify-center w-full gap-4">
        <Button onClick={() => { isOpen = !isOpen }} label="Voir plus +" />
        {#if isOpen}
        <div class="flex flex-col items-center justify-center w-full gap-4">    
            <div class="flex flex-col items-center justify-center w-3/4">
                <h3 class="text-2xl font-bold text-center pb-4">Notre histoire</h3>
                <p class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>
            <div class="flex flex-col items-center justify-center w-3/4">
                <h3 class="text-2xl font-bold text-center pb-4">Notre mission</h3>
                <p class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>
        </div>
        {/if}
    </div>
</div>