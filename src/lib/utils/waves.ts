import { COLORS } from './colors';

export interface WaveOptions {
	lines: number;
	points: number;
	lineWidth: number;
	baseAlpha: number;
	baseAmplitude: number;
	amplitudeMultiplier: number;
	baseFrequency: number;
	frequencyMultiplier: number;
	baseSpeed: number;
	speedMultiplier: number;
}

export function drawSoundWave(
	ctx: CanvasRenderingContext2D,
	w: number,
	h: number,
	time: number,
	intensity: number,
	options: WaveOptions
) {
	ctx.clearRect(0, 0, w, h);

	const spacing = w / options.points;

	for (let i = 0; i < options.lines; i++) {
		ctx.beginPath();
		ctx.strokeStyle = COLORS.primary;
		ctx.lineWidth = options.lineWidth;
		ctx.globalAlpha = ((options.lines - i) / options.lines) * (options.baseAlpha + intensity * 0.2);

		for (let j = 0; j <= options.points; j++) {
			const x = j * spacing;
			const frequency = options.baseFrequency + intensity * options.frequencyMultiplier;
			const angle = (j / options.points) * frequency;

			const wave = Math.sin(angle + time + i * 0.5);
			const perspective = Math.cos(time * 0.3 + i * 0.2);

			const amplitude = options.baseAmplitude + intensity * options.amplitudeMultiplier;
			const y = h / 2 + wave * amplitude * perspective + Math.sin(time * 0.5 + i) * (options.baseAmplitude / 4);

			if (j === 0) ctx.moveTo(x, y);
			else ctx.lineTo(x, y);
		}
		ctx.stroke();
	}
}
