<script lang="ts">
	import { COLORS } from '$lib/utils/colors';
    import { Waves, HandMetal, Briefcase, Factory, Music, Activity, FileCheck, Gauge, Speaker, Hammer, Monitor, Camera } from 'lucide-svelte';

    const icons = { Waves, HandMetal, Briefcase, Factory, Music, Activity, FileCheck, Gauge, Speaker, Hammer, Monitor, Camera };

    let {
        title = '',
        description = '',
        image = '',
        iconName = '',
        href = ''
    } = $props();

    let IconComponent = $derived(iconName ? icons[iconName as keyof typeof icons] : null);

    const cardClass = "group relative flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300";
</script>

{#snippet cardContent()}
    <!-- Zone Image ou Icône (hauteur fixe) -->
    <div class="h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
        {#if image}
            <img
                src={image}
                alt={title}
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
        {:else if IconComponent}
            <div class="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <IconComponent size={64} strokeWidth={1} />
            </div>
        {:else}
            <!-- Placeholder si rien -->
            <div class="w-16 h-16 bg-gray-200 rounded-full"></div>
        {/if}
    </div>

    <!-- Zone Contenu -->
    <div class="p-6 flex-1 flex flex-col">
        <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--hover-color)] transition-colors" style="--hover-color: {COLORS.primary}">
            {title}
        </h3>

        {#if description}
            <p class="text-gray-600 text-sm line-clamp-3">
                {description}
            </p>
        {/if}
    </div>
{/snippet}

{#if href}
    <a {href} class="{cardClass} cursor-pointer no-underline">
        {@render cardContent()}
    </a>
{:else}
    <div class={cardClass}>
        {@render cardContent()}
    </div>
{/if}
