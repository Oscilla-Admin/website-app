import { pb } from './pocketbase';

export async function checkDBConnection() {
    try {
        // Test direct avec fetch pour bypasser le SDK PocketBase et voir le message brut
        const res = await fetch(`${pb.baseUrl}/api/collections/activities/records`);
        const data = await res.json();
        
        console.log("[DB] Test Direct Fetch:", res.status, data);
        
        if (res.status === 200) {
            return {
                status: 'connected',
                data: data.items
            };
        }

        return {
            status: 'error',
            code: res.status,
            message: data.message,
            url: pb.baseUrl
        };
    } catch (e: any) {
        console.error("[DB] Erreur fatale checkDBConnection:", e.message);
        return {
            status: 'fatal_error',
            error: e.message
        };
    }
}
