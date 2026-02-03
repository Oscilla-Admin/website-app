<script lang="ts">
	import { fade } from 'svelte/transition';
	import { drawSoundWave, type WaveOptions } from '$lib/utils/waves';
	import * as m from '$paraglide/messages.js';

	let canvas: HTMLCanvasElement; // Plus de $state ici
	let { active = false } = $props();

	const options: WaveOptions = {
		lines: 6,
		points: 80,
		lineWidth: 2,
		baseAlpha: 0.6,
		baseAmplitude: 80,
		amplitudeMultiplier: 40,
		baseFrequency: Math.PI * 2,
		frequencyMultiplier: 2,
		baseSpeed: 0.03,
		speedMultiplier: 0.02
	};

	$effect(() => {
		if (!active || !canvas) return;
		
		const ctx = canvas.getContext('2d', { alpha: true });
		if (!ctx) return;

		let animationFrame: number;
		let time = 0;

		const resize = () => {
			if (!canvas) return;
			canvas.width = window.innerWidth * window.devicePixelRatio;
			canvas.height = window.innerHeight * window.devicePixelRatio;
			ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
		};

		window.addEventListener('resize', resize);
		resize();

		const draw = () => {
			if (!canvas) return;
			const w = window.innerWidth;
			const h = window.innerHeight;

			drawSoundWave(ctx, w, h, time, 0.5, options);

			time += options.baseSpeed;
			animationFrame = requestAnimationFrame(draw);
		};

		draw();

		return () => {
			window.removeEventListener('resize', resize);
			cancelAnimationFrame(animationFrame);
		};
	});
</script>

{#if active}
	<div 
		class="fixed inset-0 z-[9999] bg-white/60 backdrop-blur-md flex items-center justify-center pointer-events-none opacity-100"
		transition:fade={{ duration: 600 }}
	>
		<canvas bind:this={canvas} class="w-full h-full"></canvas>
		<div class="absolute bottom-20 left-1/2 -translate-x-1/2 text-primary font-medium tracking-widest uppercase text-sm">
			{m.contact_loading()}
		</div>
	</div>
{/if}
