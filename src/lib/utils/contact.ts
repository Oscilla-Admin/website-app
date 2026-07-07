export async function getContactEmail() {
	try {
		const response = await fetch('/api/contact');
		const data = await response.json();
		return data.email;
	} catch (error) {
		console.error("Erreur lors de la récupération de l'email:", error);
		return null;
	}
}

export async function getContactPhone() {
	try {
		const response = await fetch('/api/contact');
		const data = await response.json();
		return data.phone;
	} catch (error) {
		console.error('Erreur lors de la récupération du téléphone:', error);
		return null;
	}
}
