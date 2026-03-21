# Oscilla - Expertise Acoustique

Site vitrine professionnel pour **Oscilla**, bureau d'études en acoustique et isolation phonique.

## 🚀 Technologies

- **Framework** : [SvelteKit 5](https://svelte.dev/) (Runes)
- **Styles** : [Tailwind CSS 4](https://tailwindcss.com/)
- **Backend / CMS** : [PocketBase](https://pocketbase.io/) (données dynamiques : actualités, projets, activités)
- **Internationalisation** : [Paraglide-JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) (Français, Anglais, Catalan)
- **Icônes** : [Lucide Svelte](https://lucide.dev/)
- **Déploiement** : [Infomaniak](https://www.infomaniak.com/)

## 🎨 Fonctionnalités Clés

- **Design Premium** : Typographie soignée (Inter) avec style "majuscules calibrées" pour un rendu technique et élégant.
- **Animations Interactives** :
  - Ondes sonores 3D réactives à la vélocité du scroll.
  - Système de "Reveal on Scroll" pour une apparition fluide des sections.
  - Transitions de pages personnalisées avec loader d'ondes sonores.
- **Navigation Intelligente** :
  - Menu burger optimisé pour mobile.
  - Détection automatique de la section active dans la barre de navigation.
  - Système de retour intelligent depuis les pages projets vers les popups d'activités.
- **Flux d'Actualités** : Section actualités alimentée en temps réel depuis PocketBase (remplacement de l'ancien widget SociableKit).
- **Sécurité** : Protection des adresses email via une API interne SvelteKit pour éviter le spam.

## 🛠️ Installation et Développement

1. **Installation des dépendances** :

   ```bash
   npm install
   ```

2. **Lancement du serveur de développement** :

   ```bash
   npm run dev
   ```

3. **Build pour la production** :
   ```bash
   npm run build
   ```

## 📁 Structure du Projet

```
src/
├── lib/
│   ├── components/        Composants réutilisables (Carousel, Popup, Ondes 3D, Boutons…)
│   ├── data/              Données statiques (activités, projets, outils techniques)
│   └── utils/             Utilitaires globaux (moteur d'ondes, sécurité contact, reveal, PocketBase)
├── routes/
│   ├── (app)/
│   │   ├── [[lang]]/      Route principale avec gestion multilingue
│   │   │   ├── components/sections/   Sections de la page d'accueil
│   │   │   │   ├── Hero.svelte
│   │   │   │   ├── About.svelte
│   │   │   │   ├── Activities_and_projects.svelte
│   │   │   │   ├── Technicals_tools.svelte
│   │   │   │   ├── Actuality.svelte          Section actualités (conteneur)
│   │   │   │   ├── Actuality_news.svelte     Carte individuelle d'une actualité
│   │   │   │   └── Contacts.svelte
│   │   │   └── project/[id]/         Pages détail projet
│   │   └── (layout-component)/       Header & Footer
│   └── api/               Endpoints internes (news, projets, activités, contact, fichiers PB…)
messages/                  Fichiers de traduction JSON (fr, en, ca)
```

## 🌐 Internationalisation

Les langues supportées sont configurées dans `messages/` et gérées par Paraglide-JS. La route `[[lang]]` permet une URL optionnelle de langue (ex : `/en`, `/ca`). Sans préfixe, le français est utilisé par défaut.

## 📧 Contact

Pour toute question technique sur le projet, contactez le développeur : **Timothée Beraudy-Nicolet**.
