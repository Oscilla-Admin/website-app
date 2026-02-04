const fs = require('fs');
const path = require('path');

// Chemin vers ton dossier pb_data (ajuste si besoin)
const pbDataPath = 'D:/pocketbase/pb_data/data.db';

console.log("--- DIAGNOSTIC POCKETBASE ---");
if (fs.existsSync(pbDataPath)) {
    console.log("Fichier de données trouvé à :", pbDataPath);
} else {
    console.log("ERREUR : Fichier de données NON TROUVÉ à :", pbDataPath);
    console.log("Vérifie le chemin vers ton dossier pocketbase.");
}
