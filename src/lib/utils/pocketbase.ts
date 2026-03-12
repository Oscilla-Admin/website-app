import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/private';

export const pb = new PocketBase(env.PB_URL);

// Force la déconnexion au démarrage pour nettoyer tout vieux token admin/user
pb.authStore.clear();

// Désactive l'auto-annulation pour éviter les bugs avec SvelteKit SSR
pb.autoCancellation(false);
