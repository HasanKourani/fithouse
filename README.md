# Fit House website

Static promo site for Fit House, Housh, Tyre. Seven pages, English and Arabic, no framework.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home: hero, manifesto, links to every page |
| `house.html` | The house: spaces, every corner, photo tour |
| `classes.html` | Muay Thai timetable, kids and adults, women's classes |
| `cafe.html` | Drinks with calories and macros, Fuel by DNA Nutrition |
| `bundles.html` | Memberships, prices and what each includes |
| `visit.html` | Opening hours, map, entrance, contact |
| `book.html` | WhatsApp booking with a live message preview |

## Editing

The `.html` files in the root are generated. Edit these instead, then rebuild:

- `src/layout.html` is the shared head, header, footer and page curtain.
- `src/pages/*.html` holds each page's own content.
- `build.mjs` lists each page's title and description.

```bash
node build.mjs
```

When you change `assets/css/styles.css` or `assets/js/main.js`, bump `VERSION` in `build.mjs` before rebuilding so browsers fetch the new files.

Link previews (WhatsApp, Instagram and so on) use `assets/img/og-image.jpg`, a 1200×630 image. They need full addresses, so `SITE` in `build.mjs` holds the published address. Change it if the site moves.

Arabic text lives in the `AR` table at the top of `assets/js/main.js`, keyed by each element's `data-i18n` attribute.

## Running locally

```bash
python -m http.server 5520
```

Then open http://127.0.0.1:5520/.
