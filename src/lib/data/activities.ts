import { HandMetal, Waves, Briefcase, Factory, Music, Activity as ActivityIcon, FileCheck } from 'lucide-svelte';

export interface Activity {
	id: string;
	title: {
		fr: string;
		en: string;
		ca: string;
	};
	subtitle?: {
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
		image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop'
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
		image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=800&auto=format&fit=crop'
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
		image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop'
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
		image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop'
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
		image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop'
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
		image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
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
		image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop'
	}
];