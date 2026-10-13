// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // toto sem přidám v rámci implementace RSS feedu - odkazuje mi na defaulní URL mého webu, aby se vygeneroval správný odkaz na můj web v RSS feedu
  site: "https://example.com",

  integrations: [preact()]
});