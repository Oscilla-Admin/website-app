export interface Project {
	id: string;
	name: {
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
	activityId: string; // Référence à l'ID d'une activité (simulation table jointe)
}

export const projects: Project[] = [
	{
		id: '1',
		name: {
			fr: 'Studio d\'enregistrement Alpha',
			en: 'Alpha Recording Studio',
			ca: 'Estudi de gravació Alpha'
		},
		description: {
			fr: 'Réalisation complète d\'un studio d\'enregistrement professionnel avec isolation phonique renforcée et correction acoustique de la salle de mixage.',
			en: 'Complete realization of a professional recording studio with reinforced sound insulation and acoustic correction of the mixing room.',
			ca: 'Realització completa d\'un estudi de gravació professional amb aïllament acústic reforçat i correcció acústica de la sala de mescla.'
		},
		image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
		activityId: '2' // Isolation Phonique
	},
	{
		id: '2',
		name: {
			fr: 'Auditorium Municipal de Lyon',
			en: 'Lyon Municipal Auditorium',
			ca: 'Auditori Municipal de Lió'
		},
		description: {
			fr: 'Étude acoustique et optimisation de la réverbération pour un auditorium de 800 places. Mise en conformité avec les normes NF S 31-130.',
			en: 'Acoustic study and reverberation optimization for an 800-seat auditorium. Compliance with NF S 31-130 standards.',
			ca: 'Estudi acústic i optimització de la reverberació per a un auditori de 800 places. Conformitat amb les normes NF S 31-130.'
		},
		image: 'https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?q=80&w=800&auto=format&fit=crop',
		activityId: '1' // Études Acoustiques
	},
	{
		id: '3',
		name: {
			fr: 'Bureaux Open Space - TechCorp',
			en: 'TechCorp Open Space Offices',
			ca: 'Oficines Open Space TechCorp'
		},
		description: {
			fr: 'Amélioration du confort sonore dans un espace de travail de 2000m². Installation de panneaux absorbants et optimisation de la distribution des espaces.',
			en: 'Improvement of sound comfort in a 2000m² workspace. Installation of absorbent panels and optimization of space distribution.',
			ca: 'Millora del confort sonor en un espai de treball de 2000m². Instal·lació de panells absorbents i optimització de la distribució d\'espais.'
		},
		image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop',
		activityId: '3' // Conseil & Expertise
	},
	{
		id: '4',
		name: {
			fr: 'Usine de Production Automobile',
			en: 'Automotive Production Plant',
			ca: 'Fàbrica de Producció Automobilística'
		},
		description: {
			fr: 'Réduction du bruit industriel dans une chaîne de montage. Protection des opérateurs et conformité aux normes de bruit au poste de travail.',
			en: 'Industrial noise reduction in an assembly line. Operator protection and compliance with workplace noise standards.',
			ca: 'Reducció del soroll industrial en una cadena de muntatge. Protecció dels operadors i conformitat amb les normes de soroll al lloc de treball.'
		},
		image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
		activityId: '4' // Acoustique Industrielle
	},
	{
		id: '5',
		name: {
			fr: 'Musée d\'Art Contemporain - Installation Sonore',
			en: 'Contemporary Art Museum - Sound Installation',
			ca: 'Museu d\'Art Contemporani - Instal·lació Sonora'
		},
		description: {
			fr: 'Création d\'une ambiance sonore immersive pour une exposition permanente. Design acoustique intégrant musique et effets sonores.',
			en: 'Creation of an immersive soundscape for a permanent exhibition. Acoustic design integrating music and sound effects.',
			ca: 'Creació d\'un ambient sonor immersiu per a una exposició permanent. Disseny acústic integrant música i efectes sonors.'
		},
		image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop',
		activityId: '5' // Design Sonore
	},
	{
		id: '6',
		name: {
			fr: 'Tour de Bureau - Diagnostic Vibrations',
			en: 'Office Tower - Vibration Diagnosis',
			ca: 'Torre d\'Oficines - Diagnòstic de Vibracions'
		},
		description: {
			fr: 'Analyse des vibrations structurelles causées par le trafic routier et le métro. Mise en place de solutions d\'amortissement.',
			en: 'Analysis of structural vibrations caused by road traffic and metro. Implementation of damping solutions.',
			ca: 'Anàlisi de vibracions estructurals causades pel trànsit rodat i el metro. Implementació de solucions d\'amortiment.'
		},
		image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
		activityId: '6' // Vibrations & Structures
	},
	{
		id: '7',
		name: {
			fr: 'Complexe Hôtelier - Certification HQE',
			en: 'Hotel Complex - HQE Certification',
			ca: 'Complex Hotelera - Certificació HQE'
		},
		description: {
			fr: 'Accompagnement pour l\'obtention du label HQE avec focus sur le confort acoustique des chambres et espaces communs. Mesures et rapports de conformité.',
			en: 'Support for obtaining HQE label with focus on acoustic comfort of rooms and common areas. Measurements and compliance reports.',
			ca: 'Acompanyament per a l\'obtenció del segell HQE amb focus en el confort acústic de les habitacions i espais comuns. Mesures i informes de conformitat.'
		},
		image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
		activityId: '7' // Certifications & Normes
	},
	{
		id: '8',
		name: {
			fr: 'Salle de Concert Philharmonie',
			en: 'Philharmonic Concert Hall',
			ca: 'Sala de Concerts Filharmònica'
		},
		description: {
			fr: 'Optimisation acoustique d\'une salle de 1200 places pour orchestre symphonique. Réglage fin de la réverbération et de la diffusion sonore.',
			en: 'Acoustic optimization of a 1200-seat hall for symphony orchestra. Fine-tuning of reverberation and sound diffusion.',
			ca: 'Optimització acústica d\'una sala de 1200 places per a orquestra simfònica. Ajust fi de la reverberació i la difusió sonora.'
		},
		image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop',
		activityId: '1' // Études Acoustiques
	},
	{
		id: '9',
		name: {
			fr: 'Résidence Étudiante - Isolation Façades',
			en: 'Student Residence - Facade Insulation',
			ca: 'Residència Estudiantil - Aïllament de Façanes'
		},
		description: {
			fr: 'Isolation phonique des façades d\'une résidence de 150 logements située en bordure d\'autoroute. Réduction de 15 dB du bruit extérieur.',
			en: 'Sound insulation of facades of a 150-unit residence located near a highway. 15 dB reduction in external noise.',
			ca: 'Aïllament acústic de les façanes d\'una residència de 150 habitatges situada a prop d\'una autopista. Reducció de 15 dB del soroll exterior.'
		},
		image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop',
		activityId: '2' // Isolation Phonique
	}
];
