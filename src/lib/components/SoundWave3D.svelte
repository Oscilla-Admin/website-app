<script lang="ts">
	import { COLORS } from '$lib/utils/colors';
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let scrollY = $state(0);
	let currentIntensity = $state(0); // Intensité lissée

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

			ctx.clearRect(0, 0, w, h);

			// Calcul de la vélocité du scroll (différence entre positions)
			const diff = Math.abs(scrollY - lastScrollY);
			// On accumule la vélocité avec un amortissement légèrement réduit (0.96) pour plus de réactivité
			// et on augmente l'impact du scroll immédiat (0.04 au lieu de 0.02)
			scrollVelocity = Math.max(scrollVelocity * 0.96, diff * 0.04);
			lastScrollY = scrollY;

			// On lisse l'intensité un peu plus vite (0.08 au lieu de 0.05) pour plus de "punch"
			const targetIntensity = Math.min(scrollVelocity * 1.5, 1.5);
			currentIntensity += (targetIntensity - currentIntensity) * 0.08;

			const lines = 5;
			const points = 120;
			const spacing = w / points;

			for (let i = 0; i < lines; i++) {
				ctx.beginPath();
				ctx.strokeStyle = COLORS.primary;
				ctx.lineWidth = 1.5;
				ctx.globalAlpha = (lines - i) / lines * (0.3 + currentIntensity * 0.15);

				for (let j = 0; j <= points; j++) {
					const x = j * spacing;
					
					// Compression : un peu plus marquée
					const frequency = (Math.PI * 3.5) + (currentIntensity * 3.5);
					const angle = (j / points) * frequency;
					
					const wave = Math.sin(angle + time + i * 0.5);
					const perspective = Math.cos(time * 0.3 + i * 0.2);
					
					// Amplitude : mouvement de base plus présent (20 au lieu de 12)
					const amplitude = 20 + (currentIntensity * 35);
					const y = h / 2 + wave * amplitude * perspective + Math.sin(time * 0.5 + i) * 6;

					if (j === 0) ctx.moveTo(x, y);
					else ctx.lineTo(x, y);
				}
				ctx.stroke();
			}

			// La vitesse de l'animation de base est plus présente
			time += 0.012 + (currentIntensity * 0.025);
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
