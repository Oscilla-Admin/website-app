# Projet Oscilla - Documentation Technique

## 🎯 Contexte
Site vitrine pour Oscilla (acousticien). Front-end SvelteKit 5, API backend (voir si l'PAI Svelte ne suffirait pas?) à venir.

## 🏗️ Architecture
- **Stack** : SvelteKit 5 (Runes), Tailwind CSS 4, Paraglide (i18n: fr, en, ca), Netlify
- **Structure** : One-page avec ancres, carrousel custom, modales natives
- **Routing** : `src/routes/(app)/[[lang]]/` pour le multilingue

## 📁 Organisation des fichiers
- `src/lib/data/` : Données mockées (activities.ts, projects.ts, technicals_tools.ts)
- `src/lib/components/` : Composants réutilisables (Carousel, Popup, CarouselCard, etc.)
- `src/routes/(app)/[[lang]]/components/sections/` : Sections de la page (Hero, About, etc.)
- `src/routes/(app)/[[lang]]/project/[id]` : page par projet (description, image)
- `static/` : Images et assets publics

## 🔗 Relations de données
- **Projects** → liés aux **Activities** via `activityId` (simulation table jointe)
- Les données sont chargées via `+page.server.ts` pour simuler des appels API

## 🎨 Composants clés
- `Carousel.svelte` : Carrousel custom avec CSS Snap Scroll (pas Embla)
- `Popup.svelte` : Modale avec blocage du scroll body
- `CarouselCard.svelte` : Carte générique pour carrousel (image + titre + description)

## ⚠️ Points d'attention
- Les icônes Lucide sont passées par nom (string) dans les données, mappées côté composant
- Le routing i18n utilise `[[lang]]` (paramètre optionnel)
- Les couleurs sont dans `src/lib/utils/colors.ts` (utiliser `style="background-color: {COLORS.primary}"`)

## 📧 Section Contact (Janvier 2026)

**État actuel** : Bouton mailto simple avec email caché via API
- `src/routes/api/contact/+server.ts` : GET retourne l'email depuis `CONTACT_EMAIL` (variable d'environnement privée)
- `src/routes/(app)/[[lang]]/components/sections/Contacts.svelte` : Bouton qui ouvre le client mail

**Code indenté** (à réactiver plus tard) :
- Formulaire complet avec nom, email, message
- Endpoint POST pour envoi d'email
- À connecter à un service d'envoi (Resend, SendGrid, Nodemailer...)
- Le code est commenté dans les deux fichiers ci-dessus

**Variable d'environnement** : `.env` → `CONTACT_EMAIL=contact@oscilla.fr`

## 🚀 Prochaines étapes
- [x] Section Contact (mailto temporaire)
- [ ] Formulaire de contact complet (après choix du service d'envoi avec le client)
- [ ] Section About complète
- [ ] Intégration API réelle (remplacer les mocks)