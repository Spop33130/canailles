// Site 100 % statique. Le seul JavaScript embarqué tient dans le layout :
// repli de la bannière au défilement et indicateur « ouvert maintenant ».
// `site` sert aux URL absolues (canonical, Open Graph, sitemap JSON-LD) —
// à remplacer le jour où un vrai nom de domaine est branché sur Vercel.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lescanailles-begles.vercel.app',
  trailingSlash: 'never',
  build: { format: 'file' },
});
