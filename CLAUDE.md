# Les Canailles — site du bistrot

Contexte, stack et arborescence : [`README.md`](README.md).

## Les pièges

**Les horaires viennent de la fiche Google, pas de la bio Instagram.** Les
deux se contredisent (Instagram annonce le samedi jusqu’à 1 h et le lundi–mercredi
jusqu’à 19 h). Le client a tranché pour Google en septembre 2026. Si les
horaires changent, c’est `src/data/maison.ts` et rien d’autre : le tableau,
la pastille « Ouvert » et le JSON-LD en dépendent. Une fermeture après
minuit s’écrit au-delà de 24:00 (`'25:00'` pour 1 h).

**La carte est recopiée de l’ardoise papier.** Aucun plat ni prix inventé.
Le plat du jour est à 11 € sur la carte mais 12 € sur l’ardoise de la
vitrine : à faire confirmer avant de toucher.

**Aucun avis ni chiffre inventé.** La citation vient d’un avis client
publié par les Canailles ; la note Google (4,8 / 147 avis) est datée de
septembre 2026 dans `Avis.astro` et doit être rafraîchie à la main.

**La loi Évin s’applique** : la mention « L’abus d’alcool… » doit rester
dans le pied de page tant que le site parle de vins et de spiritueux.

**Photos : 1 000 px de large maximum** (ce qu’on a reçu). Astro ne les
agrandit pas. Si des originaux plus grands arrivent, garder les noms de
fichiers `NN-description.jpg`.

**Couleurs et polices uniquement via `tokens.css`.** Aucune valeur en dur
dans les composants.

**Grilles :** `minmax(0, 1fr)`, jamais `1fr` seul.
