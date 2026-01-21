<script lang="ts">
	import type { Snippet } from "svelte";

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
        class="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        onclick={onClose}
        role="button"
        tabindex="0"
        onkeydown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') onClose();
        }}
    >
        <div 
            class="bg-white p-8 rounded-2xl shadow-2xl max-w-[80%] w-full relative animate-in fade-in zoom-in-95 duration-200 cursor-default"
            onclick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            tabindex="-1"
            onkeydown={(e) => e.stopPropagation()} 
        >
            <div class="flex justify-between items-start mb-6">
                <h2 class="text-2xl font-bold text-gray-900">{title}</h2>
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