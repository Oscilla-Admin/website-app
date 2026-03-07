import { pb } from './pocketbase';

export async function getActivities() {
    try {
        const records = await pb.collection('activities').getFullList({
            sort: 'order', // On trie par ordre croissant défini dans pocketbase (1 en premier)
        });

        console.log(`[DB] ${records.length} activités trouvées dans PocketBase`);

        return records.map(record => ({
            id: record.id,
            title: {
                fr: record.title_fr || '',
                en: record.title_en || '',
                ca: record.title_ca || ''
            },
            subtitle: {
                fr: record.subtitle_fr || '',
                en: record.subtitle_en || '',
                ca: record.subtitle_ca || ''
            },
            description: {
                fr: record.description_fr || '',
                en: record.description_en || '',
                ca: record.description_ca || ''
            },
            image: record.image ? pb.files.getURL(record, record.image) : '',
            iconName: record.iconName || 'Waves'
        }));
    } catch (e) {
        console.error("[DB] Erreur getActivities:", e);
        return [];
    }
}

export async function getProjects() {
    const records = await pb.collection('projects').getFullList({
        sort: 'order',
        expand: 'activity'
    });

    return records.map(record => ({
        id: record.id,
        name: {
            fr: record.name_fr,
            en: record.name_en,
            ca: record.name_ca
        },
        description: {
            fr: record.description_fr,
            en: record.description_en,
            ca: record.description_ca
        },
        image: pb.files.getURL(record, record.image),
        activityId: record.activity
    }));
}

export async function getTechnicalTools() {
    try {
        const records = await pb.collection('technical_tools').getFullList({
            sort: 'order',
        });

        return records.map(record => ({
            id: record.id,
            title: {
                fr: record.title_fr || '',
                en: record.title_en || '',
                ca: record.title_ca || ''
            },
            description: {
                fr: record.description_fr || '',
                en: record.description_en || '',
                ca: record.description_ca || ''
            },
            image: record.image ? pb.files.getURL(record, record.image) : '',
            iconName: record.iconName || 'Hammer'
        }));
    } catch (e) {
        console.error("[DB] Erreur getTechnicalTools:", e);
        return [];
    }
}

export async function getProjectById(id: string) {
    const record = await pb.collection('projects').getOne(id, {
        expand: 'activity'
    });

    return {
        id: record.id,
        name: {
            fr: record.name_fr,
            en: record.name_en,
            ca: record.name_ca
        },
        description: {
            fr: record.description_fr,
            en: record.description_en,
            ca: record.description_ca
        },
        image: pb.files.getURL(record, record.image),
        activityId: record.activity,
        activity: record.expand?.activity ? {
            id: record.expand.activity.id,
            title: {
                fr: record.expand.activity.title_fr,
                en: record.expand.activity.title_en,
                ca: record.expand.activity.title_ca
            }
        } : null
    };
}

export async function getSiteContent() {
    const records = await pb.collection('site_content').getFullList();
    
    const content: Record<string, any> = {};
    records.forEach(record => {
        const key = record.key ? record.key.trim() : '';
        if (key) {
            content[key] = {
                fr: record.content_fr,
                en: record.content_en,
                ca: record.content_ca
            };
        }
    });
    
    return content;
}
