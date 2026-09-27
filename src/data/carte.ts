// La carte, recopiée de l'ardoise « Menu Les Canailles » transmise par le
// client en septembre 2026. Les prix sont en euros, service compris.
// Quand la carte papier change, c'est ce fichier et lui seul qu'on retouche.

export type Plat = { nom: string; precision?: string; prix: number };

export const menuDuJour = {
  prix: 15,
  quand: 'En semaine, le midi',
  entrees: ['Œufs mayonnaise', 'Rillettes d’oie', 'Filet de hareng'],
  desserts: ['Flan pâtissier', 'Riz au lait', 'Panna cotta'],
};

export const entrees: Plat[] = [
  { nom: 'Œufs mayonnaise', prix: 4 },
  { nom: 'Rémoulade au saumon fumé', prix: 5 },
  { nom: 'Caviar d’aubergine', prix: 5 },
  { nom: 'Filet de hareng', prix: 4 },
  { nom: 'Graton bordelais', prix: 6 },
  { nom: 'Rillettes d’oie', prix: 4 },
  { nom: 'Samoussas veggie', precision: 'par quatre', prix: 6 },
];

export const plats: Plat[] = [
  { nom: 'Plat du jour', prix: 11 },
  { nom: 'Entrecôte', precision: '430 g', prix: 26 },
  { nom: 'Brochettes de saumon', prix: 19 },
  { nom: 'Côte de veau', precision: '350 g', prix: 21 },
  { nom: 'Magret de canard', precision: 'plus de 400 g', prix: 24 },
  { nom: 'Dorade entière', prix: 21 },
  { nom: 'Salade du moment', prix: 14 },
  { nom: 'Brochettes de crevettes', prix: 20 },
];

// Les spécialités de la cheffe. Tajine et couscous se déclinent selon la
// garniture ; l'épaule de porcelet n'a qu'un prix, donc pas de variantes.
export type Specialite =
  | { nom: string; precision?: string; prix: number }
  | { nom: string; precision?: string; variantes: Plat[] };

export const specialites: Specialite[] = [
  { nom: 'Épaule de porcelet', precision: '450 g', prix: 20 },
  {
    nom: 'Tajine',
    variantes: [
      { nom: 'Végétarien', prix: 13 },
      { nom: 'Poulet', prix: 18 },
      { nom: 'Morue', prix: 19 },
      { nom: 'Agneau', prix: 22 },
    ],
  },
  {
    nom: 'Couscous',
    variantes: [
      { nom: 'Végétarien', prix: 14 },
      { nom: 'Poulet', prix: 18 },
      { nom: 'Agneau', prix: 22 },
      { nom: 'Trois viandes', prix: 25 },
    ],
  },
];

export const desserts: Plat[] = [
  { nom: 'Flan pâtissier', prix: 4 },
  { nom: 'Riz au lait', prix: 4 },
  { nom: 'Tarte fine à la pomme', prix: 4 },
  { nom: 'Mousse au chocolat', prix: 5 },
  { nom: 'Panna cotta', prix: 5 },
  { nom: 'Assiette de fromages', prix: 6 },
];

export const boules = {
  prix: 2.5,
  sorbets: ['fraise', 'citron', 'poire', 'mangue'],
  glaces: ['rhum raisin', 'chocolat', 'vanille', 'caramel beurre salé'],
};

export const cafesArroses = {
  prix: 9,
  noms: ['Colonel', 'Williamine', 'Irish coffee', 'French coffee', 'Jamaican coffee'],
};

// 4 → « 4 », 2.5 → « 2,50 » : les centimes n'apparaissent que s'il y en a.
export function prixLisible(prix: number): string {
  return Number.isInteger(prix)
    ? String(prix)
    : prix.toLocaleString('fr-FR', { minimumFractionDigits: 2 });
}
