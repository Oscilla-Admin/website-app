<script lang="ts">
	import { onMount } from 'svelte';
	import { COLORS } from '$lib/utils/colors';

	let {
		class: className = '',
		fillColor = '#f7f8f7'
	}: { class?: string; fillColor?: string } = $props();

	let canvas: HTMLCanvasElement;
	let scrollY = $state(0);

	const points = 96;
	const lines = 4;
	const baseAmplitude = 11;
	const baseFrequency = Math.PI * 3.5;

	const getBoundaryY = (xIndex: number, time: number, w: number, h: number, intensity: number) => {
		const frequency = baseFrequency + intensity * 2.8;
		const angle = (xIndex / points) * frequency;
		const perspective = Math.cos(time * 0.3);
		return h * 0.48 + Math.sin(angle + time) * (baseAmplitude + intensity * 16) * perspective;
	};

	onMount(() => {
		if (!canvas) return;
		const ctx = canvas.getContext('2d', { alpha: true });
		if (!ctx) return;

		let animationFrame: number;
		let time = 0;
		let lastScrollY = 0;
		let scrollVelocity = 0;
		let currentIntensity = 0;

		const resize = () => {
			if (!canvas) return;
			const ratio = window.devicePixelRatio;
			canvas.width = canvas.offsetWidth * ratio;
			canvas.height = canvas.offsetHeight * ratio;
			ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
		};

		window.addEventListener('resize', resize);
		resize();

		const draw = () => {
			if (!canvas) return;
			const w = canvas.width / window.devicePixelRatio;
			const h = canvas.height / window.devicePixelRatio;
			const spacing = w / points;

			const diff = Math.abs(scrollY - lastScrollY);
			scrollVelocity = Math.max(scrollVelocity * 0.96, diff * 0.04);
			lastScrollY = scrollY;

			const targetIntensity = Math.min(scrollVelocity * 1.5, 1.5);
			currentIntensity += (targetIntensity - currentIntensity) * 0.08;

			ctx.clearRect(0, 0, w, h);

			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(w, 0);
			ctx.lineTo(w, getBoundaryY(points, time, w, h, currentIntensity));
			for (let j = points; j >= 0; j--) {
				ctx.lineTo(j * spacing, getBoundaryY(j, time, w, h, currentIntensity));
			}
			ctx.closePath();
			ctx.fillStyle = fillColor;
			ctx.fill();

			for (let i = 0; i < lines; i++) {
				ctx.beginPath();
				ctx.strokeStyle = COLORS.primary;
				ctx.lineWidth = 1.3;
				ctx.globalAlpha = ((lines - i) / lines) * (0.24 + currentIntensity * 0.12);

				for (let j = 0; j <= points; j++) {
					const x = j * spacing;
					const y =
						getBoundaryY(j, time + i * 0.11, w, h, currentIntensity) +
						Math.sin(time * 0.5 + i) * 3 +
						i * 4;

					if (j === 0) ctx.moveTo(x, y);
					else ctx.lineTo(x, y);
				}
				ctx.stroke();
			}

			ctx.globalAlpha = 1;
			time += 0.012 + currentIntensity * 0.025;
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

<canvas bind:this={canvas} class="h-32 w-full md:h-40 {className}"></canvas>
