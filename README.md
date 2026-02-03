# Oscilla - Expertise Acoustique

Site vitrine professionnel pour Oscilla, bureau d'études en acoustique et isolation phonique.

## 🚀 Technologies

- **Framework** : [SvelteKit 5](https://svelte.dev/) (Runes)
- **Styles** : [Tailwind CSS 4](https://tailwindcss.com/)
- **Internationalisation** : [Paraglide-JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) (Français, Anglais, Catalan)
- **Icônes** : [Lucide Svelte](https://lucide.dev/)
- **Déploiement** : [Netlify](https://www.netlify.com/)

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

- `src/lib/components/` : Composants réutilisables (Carousel, Popups, Ondes 3D).
- `src/lib/data/` : Données structurées pour les activités, références et outils.
- `src/lib/utils/` : Utilitaires globaux (moteur d'ondes, sécurité contact, reveal).
- `src/routes/` : Système de routage SvelteKit avec gestion multilingue `[[lang]]`.
- `messages/` : Fichiers de traduction JSON.

## 📧 Contact

Pour toute question technique sur le projet, contactez le développeur : **Timothée Beraudy-Nicolet**.
