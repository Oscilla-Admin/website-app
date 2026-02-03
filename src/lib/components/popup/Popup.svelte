<script lang="ts">
	import type { Snippet } from "svelte";
    import { fade, scale } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';

    let { 
        title = '', 
        children, 
        isOpen = false,
        onClose
    }: { 
        title: string, 
        children?: Snippet, 
        isOpen: boolean,
        onClose: () => void
    } = $props();

    // Bloque le scroll de la page quand la popup est ouverte
    $effect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    
        return () => {
            document.body.style.overflow = '';
        };
    });
</script>

{#if isOpen}
    <div 
        class="fixed inset-0 z-[100] bg-black/50 backdrop-blur-md flex items-center justify-center p-4"
        onclick={onClose}
        role="button"
        tabindex="0"
        onkeydown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') onClose();
        }}
        transition:fade={{ duration: 600 }}
    >
        <div 
            class="bg-white p-6 md:p-8 rounded-2xl shadow-2xl max-w-[95%] md:max-w-[80%] w-full relative cursor-default"
            onclick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            tabindex="-1"
            onkeydown={(e) => e.stopPropagation()} 
            in:scale={{ duration: 600, start: 0.94, opacity: 0, easing: cubicOut }}
            out:scale={{ duration: 450, start: 0.96, opacity: 0, easing: cubicOut }}
        >
            <div class="flex justify-between items-start mb-4 md:mb-6">
                <h2 class="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
                <button 
                    onclick={onClose} 
                    class="p-2 -mr-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                >
                    ✕
                </button>
            </div>
            
            <div class="overflow-y-auto max-h-[80vh]">
                {#if children}
                    {@render children()}
                {/if}
            </div>
        </div>
    </div>
{/if}