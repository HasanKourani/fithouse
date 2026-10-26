// Builds the static pages: src/layout.html wrapped around each src/pages/<file>.
// Usage: node build.mjs   (no dependencies; writes the .html files next to this script)
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Bump this whenever styles.css or main.js changes, so browsers fetch fresh copies.
const VERSION = '16';

// Where the site is published. Link previews need absolute URLs for the page and its image.
const SITE = 'https://hasankourani.github.io/fithouse/';

const PAGES = [
  {
    id: 'home',
    file: 'index.html',
    title: 'Fit House | Gym, garden and café in Housh, Tyre',
    description: 'A gym with a garden and a café in Housh, Tyre. Open gym, Muay Thai for kids and adults, and ladies-only mornings. Let the outside in.',
  },
  {
    id: 'house',
    file: 'house.html',
    title: 'The house | Fit House, Housh, Tyre',
    description: 'Gym floor, cardio facing the trees, a garden, a café and Fuel, all under one roof in Housh, Tyre.',
  },
  {
    id: 'classes',
    file: 'classes.html',
    title: 'Classes | Fit House, Housh, Tyre',
    description: 'Muay Thai for kids and adults, Monday, Wednesday and Friday evenings, $40 a month.',
  },
  {
    id: 'cafe',
    file: 'cafe.html',
    title: 'Café | Fit House, Housh, Tyre',
    description: 'Coffee, matcha and protein shakes with the calories and macros for every drink, plus DNA Nutrition supplements.',
  },
  {
    id: 'bundles',
    file: 'bundles.html',
    title: 'Bundles | Fit House, Housh, Tyre',
    description: 'Open gym, class and full access memberships for adults, and Muay Thai bundles for kids.',
  },
  {
    id: 'visit',
    file: 'visit.html',
    title: 'Visit | Fit House, Housh, Tyre',
    description: 'Opening hours, ladies-only mornings, the map and how to find the entrance in Housh, Tyre.',
  },
  {
    id: 'book',
    file: 'book.html',
    title: 'Book a class | Fit House, Housh, Tyre',
    description: 'Pick what you are interested in and send Fit House the message on WhatsApp.',
  },
];

const root = dirname(fileURLToPath(import.meta.url));
const layout = readFileSync(join(root, 'src/layout.html'), 'utf8');

for (const page of PAGES) {
  const content = readFileSync(join(root, 'src/pages', page.file), 'utf8').trimEnd();
  const html = layout
    // A function replacement keeps "$" in the page (prices) from being read as a pattern.
    .replace('{{content}}', () => content)
    .replaceAll('{{title}}', page.title)
    .replaceAll('{{description}}', page.description)
    .replaceAll('{{page}}', page.id)
    .replaceAll('{{url}}', page.file === 'index.html' ? SITE : SITE + page.file)
    .replaceAll('{{site}}', SITE)
    .replaceAll('{{v}}', VERSION)
    .replace(/\{\{current:(\w+)\}\}/g, (_, id) => (id === page.id ? ' aria-current="page"' : ''));
  writeFileSync(join(root, page.file), html);
  console.log(`built ${page.file}`);
}
