<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import LinkIcon from "$lib/components/LinkIcon.svelte";
	import LanguageSelector from "./LanguageSelector.svelte";
	import { Mail, Linkedin, Menu, X } from 'lucide-svelte';
	import * as m from '$paraglide/messages.js';
    import { fade, slide } from 'svelte/transition';

    let isMenuOpen = $state(false);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        isMenuOpen = false;
    }
</script>

<div class="flex flex-row items-center justify-end w-full gap-4">
    <!-- Desktop Navigation -->
	<nav class="hidden lg:flex flex-row items-center justify-end gap-8 xl:gap-12 mr-8">
		<Button href="/#accueil" label={m.nav_home()} />
		<Button href="/#a-propos" label={m.nav_about()} />
		<Button href="/#activites-references" label={m.nav_activities()} />
		<Button href="/#outils-techniques" label={m.nav_technical()} />
		<Button href="/#contact" label={m.nav_contact()} />
	</nav>

    <!-- Desktop Actions -->
	<div class="hidden lg:flex flex-row items-center justify-end gap-2">
		<LanguageSelector />
		<LinkIcon href="" icon={Mail} />
		<LinkIcon href="" icon={Linkedin} />
	</div>

    <!-- Mobile Menu Button -->
    <div class="lg:hidden flex items-center gap-4">
        <LanguageSelector />
        <button 
            onclick={toggleMenu}
            class="p-2 text-gray-600 hover:text-gray-900 transition-colors z-50"
            aria-label="Toggle menu"
        >
            {#if isMenuOpen}
                <X size={28} />
            {:else}
                <Menu size={28} />
            {/if}
        </button>
    </div>
</div>

<!-- Mobile Menu Overlay -->
{#if isMenuOpen}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div 
        class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
        onclick={closeMenu}
        transition:fade={{ duration: 200 }}
    ></div>
    
    <div 
        class="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 lg:hidden flex flex-col p-8 pt-24 gap-6"
        transition:slide={{ axis: 'x', duration: 300 }}
    >
        <nav class="flex flex-col gap-6">
            <a href="/#accueil" onclick={closeMenu} class="text-lg font-medium hover:text-primary transition-colors">{m.nav_home()}</a>
            <a href="/#a-propos" onclick={closeMenu} class="text-lg font-medium hover:text-primary transition-colors">{m.nav_about()}</a>
            <a href="/#activites-references" onclick={closeMenu} class="text-lg font-medium hover:text-primary transition-colors">{m.nav_activities()}</a>
            <a href="/#outils-techniques" onclick={closeMenu} class="text-lg font-medium hover:text-primary transition-colors">{m.nav_technical()}</a>
            <a href="/#contact" onclick={closeMenu} class="text-lg font-medium hover:text-primary transition-colors">{m.nav_contact()}</a>
        </nav>
        
        <div class="mt-auto flex flex-row items-center gap-4 border-t pt-6">
            <LinkIcon href="" icon={Mail} />
            <LinkIcon href="" icon={Linkedin} />
        </div>
    </div>
{/if}

