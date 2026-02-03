<script lang="ts">
	import { onMount } from 'svelte';
	import { drawSoundWave, type WaveOptions } from '$lib/utils/waves';

	let canvas: HTMLCanvasElement;
	let scrollY = $state(0);
	let currentIntensity = $state(0);

	const options: WaveOptions = {
		lines: 5,
		points: 120,
		lineWidth: 1.5,
		baseAlpha: 0.3,
		baseAmplitude: 20,
		amplitudeMultiplier: 35,
		baseFrequency: Math.PI * 3.5,
		frequencyMultiplier: 3.5,
		baseSpeed: 0.012,
		speedMultiplier: 0.025
	};

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animationFrame: number;
		let time = 0;
		let lastScrollY = 0;
		let scrollVelocity = 0;

		const resize = () => {
			canvas.width = canvas.offsetWidth * window.devicePixelRatio;
			canvas.height = canvas.offsetHeight * window.devicePixelRatio;
			ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
		};

		window.addEventListener('resize', resize);
		resize();

		const draw = () => {
			const w = canvas.width / window.devicePixelRatio;
			const h = canvas.height / window.devicePixelRatio;

			const diff = Math.abs(scrollY - lastScrollY);
			scrollVelocity = Math.max(scrollVelocity * 0.96, diff * 0.04);
			lastScrollY = scrollY;

			const targetIntensity = Math.min(scrollVelocity * 1.5, 1.5);
			currentIntensity += (targetIntensity - currentIntensity) * 0.08;

			drawSoundWave(ctx, w, h, time, currentIntensity, options);

			time += options.baseSpeed + currentIntensity * options.speedMultiplier;
			animationFrame = requestAnimationFrame(draw);
		};

		draw();

		return () => {
			window.removeEventListener('resize', resize);
			cancelAnimationFrame(animationFrame);
		};
	});
</script>

<svelte:window bind:scrollY />

<div class="w-full h-48 flex items-center justify-center overflow-hidden opacity-70 transition-opacity duration-500">
	<canvas bind:this={canvas} class="w-full h-full"></canvas>
</div>
