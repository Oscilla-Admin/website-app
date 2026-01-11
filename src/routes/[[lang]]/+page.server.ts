import { activities } from '$lib/data/activities';
import { technicalTools } from '$lib/data/technicals_tools';

export const load = async () => {
    // SIMULATION API : On fait semblant d'attendre une réponse
    // Plus tard : const res = await fetch('https://api.oscilla.fr/activities');
    
    return {
        activities,
        technicalTools
    };
};