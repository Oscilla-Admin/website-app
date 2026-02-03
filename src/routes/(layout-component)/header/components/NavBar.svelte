<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import LinkIcon from "$lib/components/LinkIcon.svelte";
	import LanguageSelector from "./LanguageSelector.svelte";
	import Mail from 'lucide-svelte/icons/mail';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';
	import * as m from '$paraglide/messages.js';
    import { fade, fly } from 'svelte/transition';
    import { startPageLoader } from '$lib/utils/loader';
    import { onMount } from "svelte";
    import { getContactEmail } from "$lib/utils/contact";
    import { page } from '$app/state';
    import { COLORS } from '$lib/utils/colors';

    let isMenuOpen = $state(false);
    let contactEmail = $state('');
    let activeSection = $state('accueil');

    onMount(() => {
        let observer: IntersectionObserver;

        const init = async () => {
            contactEmail = await getContactEmail();
            
            const observerOptions = {
                root: null,
                rootMargin: '-25% 0px -25% 0px', // Zone de détection plus large (50% du centre)
                threshold: [0, 0.1, 0.5]
            };

            const observerCallback = (entries: IntersectionObserverEntry[]) => {
                // On filtre pour ne garder que les éléments qui entrent dans la zone
                const visibleEntries = entries.filter(e => e.isIntersecting);
                
                if (visibleEntries.length > 0) {
                    // On trie par ratio de visibilité pour prendre le plus présent
                    const bestEntry = visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                    const id = bestEntry.target.id;
                    
                    const navIds = ['accueil', 'a-propos', 'activites-references', 'outils-techniques', 'contact'];
                    if (navIds.includes(id)) {
                        activeSection = id;
                    } else if (id === 'actualites') {
                        activeSection = 'a-propos';
                    }
                }

                // Sécurités basées sur la position absolue du scroll
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;
                const bodyHeight = document.documentElement.scrollHeight;

                if (scrollY < 100) {
                    activeSection = 'accueil';
                } else if (scrollY + windowHeight > bodyHeight - 100) {
                    activeSection = 'contact';
                }
            };

            observer = new IntersectionObserver(observerCallback, observerOptions);
            
            const sections = ['accueil', 'a-propos', 'actualites', 'activites-references', 'outils-techniques', 'contact'];
            
            const refreshObserver = () => {
                sections.forEach(id => {
                    const el = document.getElementById(id);
                    if (el) {
                        observer.unobserve(el);
                        observer.observe(el);
                    }
                });
            };

            // On rafraîchit l'observation au montage et après chaque navigation
            refreshObserver();
            
            // On utilise un intervalle court au début pour être sûr de capter le rendu Svelte
            const interval = setInterval(refreshObserver, 1000);
            return () => clearInterval(interval);
        };

        const cleanupInit = init();

        return () => {
            if (observer) observer.disconnect();
            cleanupInit.then(cleanup => cleanup && cleanup());
        };
    });

    function openMailto() {
        if (contactEmail) {
            window.location.href = `mailto:${contactEmail}?subject=Contact depuis le site Oscilla`;
        }
    }

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        isMenuOpen = false;
    }

    function handleNavClick() {
        closeMenu();
    }
</script>

<div class="flex flex-row items-center justify-end w-full gap-4">
    <!-- Desktop Navigation -->
	<nav class="hidden lg:flex flex-row items-center justify-end gap-8 xl:gap-12 mr-8">
		<Button href="/#accueil" label={m.nav_home()} onClick={handleNavClick} active={activeSection === 'accueil'} />
		<Button href="/#a-propos" label={m.nav_about()} onClick={handleNavClick} active={activeSection === 'a-propos'} />
		<Button href="/#activites-references" label={m.nav_activities()} onClick={handleNavClick} active={activeSection === 'activites-references'} />
		<Button href="/#outils-techniques" label={m.nav_technical()} onClick={handleNavClick} active={activeSection === 'outils-techniques'} />
		<Button href="/#contact" label={m.nav_contact()} onClick={handleNavClick} active={activeSection === 'contact'} />
	</nav>

    <!-- Desktop Actions -->
	<div class="hidden lg:flex flex-row items-center justify-end gap-2">
		<LanguageSelector />
		<LinkIcon onclick={openMailto} icon={Mail} />
		<LinkIcon href="https://linkedin.com/company/oscilla" icon={Linkedin} />
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
        transition:fly={{ x: 256, duration: 300 }}
    >
        <nav class="flex flex-col gap-6 items-start">
            <a href="/#accueil" onclick={handleNavClick} class="text-lg font-medium hover:text-primary transition-colors w-full text-left flex justify-start" style="text-align: left; text-justify: none; color: {activeSection === 'accueil' ? COLORS.primary : ''}">{m.nav_home()}</a>
            <a href="/#a-propos" onclick={handleNavClick} class="text-lg font-medium hover:text-primary transition-colors w-full text-left flex justify-start" style="text-align: left; text-justify: none; color: {activeSection === 'a-propos' ? COLORS.primary : ''}">{m.nav_about()}</a>
            <a href="/#activites-references" onclick={handleNavClick} class="text-lg font-medium hover:text-primary transition-colors w-full text-left flex justify-start" style="text-align: left; text-justify: none; color: {activeSection === 'activites-references' ? COLORS.primary : ''}">{m.nav_activities()}</a>
            <a href="/#outils-techniques" onclick={handleNavClick} class="text-lg font-medium hover:text-primary transition-colors w-full text-left flex justify-start" style="text-align: left; text-justify: none; color: {activeSection === 'outils-techniques' ? COLORS.primary : ''}">{m.nav_technical()}</a>
            <a href="/#contact" onclick={handleNavClick} class="text-lg font-medium hover:text-primary transition-colors w-full text-left flex justify-start" style="text-align: left; text-justify: none; color: {activeSection === 'contact' ? COLORS.primary : ''}">{m.nav_contact()}</a>
        </nav>
        
        <div class="mt-auto flex flex-row items-center gap-4 border-t pt-6">
            <LinkIcon onclick={openMailto} icon={Mail} />
            <LinkIcon href="https://linkedin.com/company/oscilla" icon={Linkedin} />
        </div>
    </div>
{/if}
