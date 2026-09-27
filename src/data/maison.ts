// Tout ce qui décrit le restaurant lui-même : identité, contact, horaires.
// Une seule source pour la page, les mentions légales, le JSON-LD et le
// petit script « ouvert maintenant » — changer une heure ici suffit.

export const maison = {
  nom: 'Les Canailles',
  devise: 'Repère de canailles',
  ville: 'Bègles',
  adresse: {
    rue: '246 boulevard Jean-Jacques Bosc',
    codePostal: '33130',
    ville: 'Bègles',
  },
  reperes: 'Près du pont Simone-Veil et de l’Arkéa Arena',
  telephone: {
    affiche: '06 58 03 01 82',
    lien: 'tel:+33658030182',
    international: '+33 6 58 03 01 82',
  },
  instagram: {
    compte: '@lescanaillesdebegles',
    url: 'https://www.instagram.com/lescanaillesdebegles/',
  },
  itineraire:
    'https://www.google.com/maps/search/?api=1&query=Les%20Canailles%20246%20boulevard%20Jean-Jacques%20Bosc%2033130%20B%C3%A8gles',
  gaultMillau: 'https://fr.gaultmillau.com/fr/restaurants/les-canailles-33130',
} as const;

// Société exploitante, telle qu'inscrite au registre national des entreprises.
export const societe = {
  raisonSociale: 'LA SOURCE (LES CANAILLES)',
  forme: 'SARL',
  siren: '533 748 646',
  siret: '533 748 646 00031',
  naf: '56.10A — Restauration traditionnelle',
  gerante: 'Khadija Bounif',
  siege: '246 boulevard Jean-Jacques Bosc, 33130 Bègles',
} as const;

// Horaires de la fiche Google (retenus par le client en septembre 2026).
// `ferme` peut dépasser 24:00 : le jeudi se termine à 1 h du matin, soit 25:00.
export type Creneau = { ouvre: string; ferme: string } | null;

export const horaires: { jour: string; code: string; creneau: Creneau }[] = [
  { jour: 'Lundi', code: 'Monday', creneau: { ouvre: '08:00', ferme: '20:00' } },
  { jour: 'Mardi', code: 'Tuesday', creneau: { ouvre: '08:00', ferme: '20:00' } },
  { jour: 'Mercredi', code: 'Wednesday', creneau: { ouvre: '08:00', ferme: '20:00' } },
  { jour: 'Jeudi', code: 'Thursday', creneau: { ouvre: '08:00', ferme: '25:00' } },
  { jour: 'Vendredi', code: 'Friday', creneau: { ouvre: '08:00', ferme: '20:00' } },
  { jour: 'Samedi', code: 'Saturday', creneau: { ouvre: '10:00', ferme: '20:00' } },
  { jour: 'Dimanche', code: 'Sunday', creneau: null },
];

// « 08:00 » → « 8 h », « 25:00 » → « 1 h », « 19:30 » → « 19 h 30 ».
// Espaces insécables : « 1 » et « h » ne doivent jamais se retrouver sur
// deux lignes différentes.
export function heureLisible(hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number);
  const heure = h % 24;
  return m ? `${heure}\u00a0h\u00a0${String(m).padStart(2, '0')}` : `${heure}\u00a0h`;
}
