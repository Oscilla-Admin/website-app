<script lang="ts">
	import { COLORS } from "$lib/utils/colors";
    let { onClick = () => {}, label = '' }: { onClick: () => void, label: string } = $props();
</script>

<button 
    onclick={onClick} 
    class="text-black p-2 w-full rounded-md hover:cursor-pointer transition-colors hover:bg-[var(--hover-color)]"
    style="--hover-color: {COLORS.gray};"
>
    {label}
</button>