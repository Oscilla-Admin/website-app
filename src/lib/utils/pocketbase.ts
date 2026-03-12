import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';

export const pb = new PocketBase(env.PB_URL);
const pbPublicBaseUrl = (publicEnv.PUBLIC_PB_URL || env.PB_PUBLIC_URL || env.PB_URL).replace(/\/$/, '');

export function getPocketBaseFileUrl(record: { collectionId: string; id: string }, filename: string) {
    return `${pbPublicBaseUrl}/api/files/${record.collectionId}/${record.id}/${filename}`;
}

// Force la déconnexion au démarrage pour nettoyer tout vieux token admin/user
pb.authStore.clear();

// Désactive l'auto-annulation pour éviter les bugs avec SvelteKit SSR
pb.autoCancellation(false);
