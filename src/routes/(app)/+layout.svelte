<script lang="ts">
	import Footer from '../(layout-component)/Footer.svelte';
    import Header from '../(layout-component)/header/Header.svelte';
	import './layout.css'; 
    import GlobalPopup from '$lib/components/popup/GlobalPopup.svelte';

    let { children } = $props();
</script>

<GlobalPopup />

<Header />

<main>
    {@render children()}
</main>

<Footer />

<style>
    main {
        min-height: 100vh;
    }
</style>
