<script lang="ts">
	import { COLORS } from '$lib/utils/colors';
	import { fade } from 'svelte/transition';

	let canvas: HTMLCanvasElement;
	let { active = false } = $props();

	$effect(() => {
		if (!active || !canvas) return;
		
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animationFrame: number;
		let time = 0;

		const resize = () => {
			canvas.width = window.innerWidth * window.devicePixelRatio;
			canvas.height = window.innerHeight * window.devicePixelRatio;
			ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
		};

		window.addEventListener('resize', resize);
		resize();

		const draw = () => {
			const w = window.innerWidth;
			const h = window.innerHeight;

			ctx.clearRect(0, 0, w, h);

			const lines = 8;
			const points = 100;
			const spacing = w / points;

			for (let i = 0; i < lines; i++) {
				ctx.beginPath();
				ctx.strokeStyle = COLORS.primary;
				ctx.lineWidth = 2;
				ctx.globalAlpha = (lines - i) / lines * 0.6;

				for (let j = 0; j <= points; j++) {
					const x = j * spacing;
					const angle = (j / points) * Math.PI * 2;
					
					const wave = Math.sin(angle + time * 2 + i * 0.5);
					const perspective = Math.cos(time + i * 0.3);
					
					const y = h / 2 + wave * 100 * perspective + Math.sin(time * 3 + i) * 20;

					if (j === 0) ctx.moveTo(x, y);
					else ctx.lineTo(x, y);
				}
				ctx.stroke();
			}

			time += 0.03;
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
		transition:fade={{ duration: 400 }}
	>
		<canvas bind:this={canvas} class="w-full h-full"></canvas>
		<div class="absolute bottom-20 left-1/2 -translate-x-1/2 text-primary font-medium tracking-widest uppercase text-sm opacity-100">
			Chargement...
		</div>
	</div>
{/if}
