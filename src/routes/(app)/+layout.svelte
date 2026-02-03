<script>
	import Footer from '../(layout-component)/Footer.svelte';
	import Header from '../(layout-component)/header/Header.svelte';
	import './layout.css'; 

    let { children } = $props();
</script>

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
