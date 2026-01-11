import { HandMetal, Waves, Briefcase } from 'lucide-svelte';

export interface Activity {
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
	iconName: string; // Lucide Icon Component
}

export const activities: Activity[] = [
	{
		id: '1',
		title: {
			fr: 'Études Acoustiques',
			en: 'Acoustic Studies',
			ca: 'Estudis Acústics'
		},
		description: {
			fr: 'Mesures in situ et simulations pour optimiser la qualité sonore de vos espaces.',
			en: 'In situ measurements and simulations to optimize the sound quality of your spaces.',
			ca: 'Mesures in situ i simulacions per optimitzar la qualitat sonora dels vostres espais.'
		},
		iconName: 'Waves'
	},
	{
		id: '2',
		title: {
			fr: 'Isolation Phonique',
			en: 'Sound Insulation',
			ca: 'Aïllament Acústic'
		},
		description: {
			fr: 'Solutions techniques pour limiter la propagation du bruit entre les locaux.',
			en: 'Technical solutions to limit noise propagation between rooms.',
			ca: 'Solucions tècniques per limitar la propagació del soroll entre locals.'
		},
		iconName: 'HandMetal'
	},
	{
		id: '3',
		title: {
			fr: 'Conseil & Expertise',
			en: 'Consulting & Expertise',
			ca: 'Assessorament i Peritatge'
		},
		description: {
			fr: 'Accompagnement sur mesure pour architectes, entreprises et particuliers.',
			en: 'Tailor-made support for architects, companies and individuals.',
			ca: 'Acompanyament a mida per a arquitectes, empreses i particulars.'
		},
		iconName: 'Briefcase'	
	},
	{
		id: '4',
		title: {
			fr: 'Acoustique Industrielle',
			en: 'Industrial Acoustics',
			ca: 'Acústica Industrial'
		},
		description: {
			fr: 'Réduction du bruit des machines et protection des travailleurs.',
			en: 'Machine noise reduction and worker protection.',
			ca: 'Reducció del soroll de màquines i protecció dels treballadors.'
		},
		iconName: 'Factory' // Pense à l'importer dans ton mapping
	},
	{
		id: '5',
		title: {
			fr: 'Design Sonore',
			en: 'Sound Design',
			ca: 'Disseny Sonor'
		},
		description: {
			fr: 'Création d\'ambiances sonores pour espaces commerciaux et musées.',
			en: 'Creation of soundscapes for commercial spaces and museums.',
			ca: 'Creació d\'ambients sonors per a espais comercials i museus.'
		},
		iconName: 'Music' // Pense à l'importer dans ton mapping
	},
	{
		id: '6',
		title: {
			fr: 'Vibrations & Structures',
			en: 'Vibrations & Structures',
			ca: 'Vibracions i Estructures'
		},
		description: {
			fr: 'Diagnostic et traitement des vibrations structurelles des bâtiments.',
			en: 'Diagnosis and treatment of structural vibrations in buildings.',
			ca: 'Diagnòstic i tractament de vibracions estructurals d\'edificis.'
		},
		iconName: 'Activity' // Pense à l'importer dans ton mapping
	},
	{
		id: '7',
		title: {
			fr: 'Certifications & Normes',
			en: 'Certifications & Standards',
			ca: 'Certificacions i Normes'
		},
		description: {
			fr: 'Accompagnement pour l\'obtention de labels (HQE, BREEAM) et conformité.',
			en: 'Support for obtaining labels (HQE, BREEAM) and compliance.',
			ca: 'Acompanyament per a l\'obtenció de segells (HQE, BREEAM) i conformitat.'
		},
		iconName: 'FileCheck' // Pense à l'importer dans ton mapping
	}
];