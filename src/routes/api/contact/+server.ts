import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { CONTACT_EMAIL } from '$env/static/private';

/**
 * GET: Retourne l'email de contact (pour le mailto)
 * L'email est stocké côté serveur pour éviter le scraping par les bots
 */
export const GET: RequestHandler = async () => {
	return json({ email: CONTACT_EMAIL });
};

/**
 * =====================================================
 * CODE INDENTÉ - À RÉACTIVER AVEC UN SERVICE D'ENVOI D'EMAIL
 * (Resend, SendGrid, Nodemailer, etc.)
 * Date: Janvier 2026
 * =====================================================
 *
 * export const POST: RequestHandler = async ({ request }) => {
 * 	try {
 * 		const { name, email, message } = await request.json();
 *
 * 		// Validation basique
 * 		if (!name || !email || !message) {
 * 			return json({ success: false, error: 'Tous les champs sont requis' }, { status: 400 });
 * 		}
 *
 * 		if (!email.includes('@')) {
 * 			return json({ success: false, error: 'Email invalide' }, { status: 400 });
 * 		}
 *
 * 		// TODO: Intégrer un service d'envoi d'email (Resend, SendGrid, Nodemailer, etc.)
 * 		console.log('=== Nouveau message de contact ===');
 * 		console.log('Destinataire:', CONTACT_EMAIL);
 * 		console.log('De:', name, `<${email}>`);
 * 		console.log('Message:', message);
 * 		console.log('================================');
 *
 * 		return json({ success: true, message: 'Message envoyé avec succès' });
 * 	} catch (error) {
 * 		console.error('Erreur lors du traitement du formulaire:', error);
 * 		return json({ success: false, error: 'Erreur serveur' }, { status: 500 });
 * 	}
 * };
 */
