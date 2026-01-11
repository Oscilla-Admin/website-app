<script lang="ts">
    import { Waves, HandMetal, Briefcase } from 'lucide-svelte';

    const icons = { Waves, HandMetal, Briefcase };

    let { 
        title = '', 
        description = '', 
        image = '',     
        iconName = ''    
    } = $props();

    let IconComponent = $derived(iconName ? icons[iconName as keyof typeof icons] : null);

</script>

<div class="group relative flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
    
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
            <!-- Placeholder si rien -->
            <div class="w-16 h-16 bg-gray-200 rounded-full"></div>
        {/if}
    </div>

    <!-- Zone Contenu -->
    <div class="p-6 flex-1 flex flex-col">
        <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
        </h3>
        
        {#if description}
            <p class="text-gray-600 text-sm line-clamp-3">
                {description}
            </p>
        {/if}
    </div>

</div>