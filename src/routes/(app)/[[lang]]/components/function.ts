export async function getContactEmail() {
try {
    const response = await fetch('/api/contact');
    const data = await response.json();
    const contactEmail = data.email;    
    return contactEmail;
} catch (error) {
    console.error('Erreur lors de la récupération de l\'email:', error);
    return null;
}}