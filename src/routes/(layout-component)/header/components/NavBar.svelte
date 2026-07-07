<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import LinkIcon from '$lib/components/LinkIcon.svelte';
	import LanguageSelector from './LanguageSelector.svelte';
	import Mail from 'lucide-svelte/icons/mail';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';
	import * as m from '$paraglide/messages.js';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { getContactEmail } from '$lib/utils/contact';
	import { COLORS } from '$lib/utils/colors';
	import { page } from '$app/state';
	import { getLocale } from '$paraglide/runtime.js';

	let { isTransparent = false }: { isTransparent?: boolean } = $props();
	const locale = getLocale();
	const legalNoticesHref = `/${locale}/mentions-legales`;

	let isMenuOpen = $state(false);
	let contactEmail = $state('');
	const navItems = $derived([
		{ href: '/a-propos', id: 'a-propos', label: m.nav_about() },
		{ href: '/activites-references', id: 'activites-references', label: m.nav_activities() },
		{ href: '/outils-techniques', id: 'outils-techniques', label: m.nav_technical() },
		{ href: '/contact', id: 'contact', label: m.nav_contact() }
	]);
	const activeRoute = $derived(
		page.url.pathname.replace(/^\/(fr|en|ca)(?=\/|$)/, '') || '/a-propos'
	);

	onMount(() => {
		const init = async () => {
			contactEmail = await getContactEmail();
		};

		init();
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

<div class="flex w-full flex-row items-center justify-end gap-2 xl:gap-4">
	<!-- Desktop Navigation -->
	<nav
		class="absolute top-1/2 left-1/2 hidden h-8 -translate-x-1/2 -translate-y-1/2 flex-row items-center justify-center gap-2 lg:flex xl:gap-5"
	>
		{#each navItems as item}
			<Button
				href={item.href}
				label={item.label}
				onClick={handleNavClick}
				active={activeRoute === item.href || (activeRoute === '/' && item.id === 'a-propos')}
				{isTransparent}
				classOverride="!text-xs xl:!text-sm !font-black !min-w-fit xl:!min-w-[96px] !px-1.5 xl:!px-2 !py-1"
			/>
		{/each}
	</nav>

	<!-- Desktop Actions -->
	<div
		class="hidden shrink-0 flex-row items-center justify-end gap-1.5 lg:flex"
		style="color: {isTransparent ? COLORS.white : COLORS.black};"
	>
		<LanguageSelector {isTransparent} />
		<LinkIcon onclick={openMailto} icon={Mail} {isTransparent} size={20} />
		<LinkIcon
			href="https://linkedin.com/company/oscilla-acoustique"
			icon={Linkedin}
			{isTransparent}
			size={20}
		/>
	</div>

	<!-- Mobile Menu Button -->
	<div class="flex items-center gap-4 lg:hidden">
		<LanguageSelector {isTransparent} />
		<button
			onclick={toggleMenu}
			class="z-50 cursor-pointer p-2 transition-colors"
			style="color: {isTransparent ? COLORS.white : COLORS.black};"
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
		class="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
		onclick={closeMenu}
		transition:fade={{ duration: 200 }}
	></div>

	<div
		class="fixed top-0 right-0 z-50 flex h-full w-64 flex-col gap-6 bg-white p-8 pt-24 shadow-2xl lg:hidden"
		transition:fly={{ x: 256, duration: 300 }}
	>
		<nav class="flex flex-col items-start gap-6">
			{#each navItems as item}
				<a
					href={item.href}
					onclick={handleNavClick}
					class="hover:text-primary flex w-full justify-start text-left text-lg font-medium transition-colors"
					style="text-align: left; text-justify: none; color: {activeRoute === item.href ||
					(activeRoute === '/' && item.id === 'a-propos')
						? COLORS.primary
						: ''}">{item.label}</a
				>
			{/each}
		</nav>

		<div class="mt-auto flex flex-col items-start gap-3">
			<a
				href={legalNoticesHref}
				onclick={handleNavClick}
				class="font-roboto text-xs text-gray-500 normal-case transition-colors hover:text-gray-900"
			>
				{m.footer_legal_notices()}
			</a>
			<div class="flex w-full flex-row items-center gap-4 border-t pt-6">
				<LinkIcon onclick={openMailto} icon={Mail} />
				<LinkIcon href="https://linkedin.com/company/oscilla-acoustique" icon={Linkedin} />
			</div>
		</div>
	</div>
{/if}
