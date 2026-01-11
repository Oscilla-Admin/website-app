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
		iconName: 'Gauge' // Lucide: Gauge
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
		iconName: 'Speaker' // Lucide: Speaker
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
		iconName: 'Hammer' // Lucide: Hammer
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
		iconName: 'Monitor' // Lucide: Monitor
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
			ca: 'Visualització en temps real de les fonts sonores i fuites acústiques.'
		},
		iconName: 'Camera' // Lucide: Camera
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
		iconName: 'Activity' // Lucide: Activity
	}
];