export interface TechnicalTool {
	id: string;
	title: {
		fr: string;
		en: string;
		ca: string;
	};
	description: {
		fr: string;
		en: string;
		ca: string;
	};
	image: string; // URL de l'image
	iconName: string; // Pour mapper avec lucide-svelte
}

export const technicalTools: TechnicalTool[] = [
	{
		id: '1',
		title: {
			fr: 'Sonomètre Classe 1',
			en: 'Class 1 Sound Level Meter',
			ca: 'Sonomètre Classe 1'
		},
		description: {
			fr: 'Mesures de précision pour l\'acoustique environnementale et du bâtiment.',
			en: 'Precision measurements for environmental and building acoustics.',
			ca: 'Mesures de precisió per a l\'acústica ambiental i d\'edificis.'
		},
		image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
		iconName: 'Gauge'
	},
	{
		id: '2',
		title: {
			fr: 'Source Omnidirectionnelle',
			en: 'Omnidirectional Source',
			ca: 'Font Omnidireccional'
		},
		description: {
			fr: 'Dodécaèdre pour la mesure de temps de réverbération et d\'isolement.',
			en: 'Dodecahedron for reverberation time and insulation measurement.',
			ca: 'Dodecaedre per a la mesura de temps de reverberació i d\'aïllament.'
		},
		image: 'https://i.pinimg.com/1200x/6b/95/2f/6b952fb3c03b2e4cf2be1beea0a5b5b1.jpg',
		iconName: 'Speaker'
	},
	{
		id: '3',
		title: {
			fr: 'Machine à Chocs',
			en: 'Tapping Machine',
			ca: 'Màquina de Cops'
		},
		description: {
			fr: 'Générateur de bruits d\'impacts normalisés pour tester les planchers.',
			en: 'Standardized impact noise generator for floor testing.',
			ca: 'Generador de sorolls d\'impactes normalitzats per provar els sòls.'
		},
		image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
		iconName: 'Hammer'
	},
	{
		id: '4',
		title: {
			fr: 'Logiciels de Simulation',
			en: 'Simulation Software',
			ca: 'Programari de Simulació'
		},
		description: {
			fr: 'Modélisation 3D prévisionnelle (CATT-Acoustic, CadnaA).',
			en: 'Predictive 3D modeling (CATT-Acoustic, CadnaA).',
			ca: 'Modelatge 3D previsional (CATT-Acoustic, CadnaA).'
		},
		image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop',
		iconName: 'Monitor'
	},
	{
		id: '5',
		title: {
			fr: 'Caméra Acoustique',
			en: 'Acoustic Camera',
			ca: 'Càmera Acústica'
		},
		description: {
			fr: 'Visualisation en temps réel des sources sonores et fuites acoustiques.',
			en: 'Real-time visualization of sound sources and acoustic leaks.',
			ca: 'Visualització en temps real de les fonts sonores i fuites acoustiques.'
		},
		image: 'https://images.unsplash.com/photo-1516035053911-c4a3b9d777d9?q=80&w=800&auto=format&fit=crop',
		iconName: 'Camera'
	},
	{
		id: '6',
		title: {
			fr: 'Accéléromètres',
			en: 'Accelerometers',
			ca: 'Acceleròmetres'
		},
		description: {
			fr: 'Capteurs pour l\'analyse des vibrations structurelles.',
			en: 'Sensors for structural vibration analysis.',
			ca: 'Sensors per a l\'anàlisi de vibracions estructurals.'
		},
		image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800&auto=format&fit=crop',
		iconName: 'Activity'
	}
];