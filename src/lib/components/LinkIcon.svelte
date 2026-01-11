<script lang="ts">
	import { COLORS } from "$lib/utils/colors";
    let { href = '', label = '', icon: Icon = null }: { href: string, label?: string, icon?: any } = $props();
</script>

<a href={href} class="flex items-center gap-2 w-10 h-10 rounded-full justify-center" style="background-color: {COLORS.gray};">
    {#if Icon}
        <div class="w-6 h-6">
            <Icon size={24} />
        </div>
    {/if}
    {#if label}
        <span class="text-sm">{label}</span>
    {/if}
</a>