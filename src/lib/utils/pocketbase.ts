import PocketBase from 'pocketbase';
import { PB_URL } from '$env/static/private';

export const pb = new PocketBase(PB_URL);

// Force la déconnexion au démarrage pour nettoyer tout vieux token admin/user
pb.authStore.clear();

// Désactive l'auto-annulation pour éviter les bugs avec SvelteKit SSR
pb.autoCancellation(false);
