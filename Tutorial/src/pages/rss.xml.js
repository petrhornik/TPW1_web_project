import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Tutorial Web s Astro.build',
    description: 'Úvod do Astro - testování',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>cs-cz</language>`,
  });
}