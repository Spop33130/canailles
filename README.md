# Les Canailles — site du bistrot

Le site des Canailles, bistrot à la française tenu par Khadija et son fils
Sabri, 246 boulevard Jean-Jacques Bosc à Bègles. Une page d’accueil (photos,
la maison, la carte complète, avis, horaires et accès) et les mentions
légales.

## Faire tourner le projet

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # vérification des types (astro check) puis build dans dist/
```

## Choix techniques

- **Astro, sortie 100 % statique.** Le seul JavaScript envoyé : le repli de
  la bannière « Menu du jour » au défilement, la pastille « Ouvert / Fermé »
  calculée à l’heure de Paris, et le surlignage du jour dans les horaires.
  Sans JavaScript, la page reste complète.
- **La carte est du texte, pas une image.** Lisible sur téléphone, trouvable
  par Google, et un prix se change dans `src/data/carte.ts` sans retoucher de
  visuel.
- **Réservation par téléphone uniquement.** Barre fixe « Appeler ·
  Itinéraire » sur mobile. Aucun formulaire, aucun cookie, donc pas de
  bandeau de consentement.
- **Identité reprise du logo et de la carte papier** : crème et bordeaux du
  logo, bleu des dessins de la carte, Anton (proche du C du logo) pour les
  titres, Newsreader pour le texte. Polices auto-hébergées via `@fontsource`.
- **Le logo est un masque d’une seule couleur** (`src/assets/brand/`) : il
  prend la couleur du texte, bordeaux dans l’en-tête, crème dans le pied de
  page.
- **Vercel** en hébergement statique ; en-têtes de sécurité et cache dans
  `vercel.json`.

## Où sont les choses

| Chemin | Contenu |
|---|---|
| `src/data/carte.ts` | La carte : menu du jour, entrées, plats, spécialités, desserts, glaces, cafés |
| `src/data/maison.ts` | Adresse, téléphone, Instagram, horaires, société exploitante |
| `src/assets/photos/` | Les cinq photos, numérotées dans l’ordre d’apparition |
| `src/assets/brand/logo-canailles.png` | Logo détouré (masque alpha) |
| `public/` | Favicon, icône Apple, image de partage (`og-canailles.jpg`) |
| `src/styles/tokens.css` | Couleurs, polices, espacements : la seule source des réglages visuels |
| `src/components/` | Une section de la page par fichier |
