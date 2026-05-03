# Gaia Retreat Apartment — Copilot Instructions

## Project Overview

A static, no-framework vacation rental website for Gaia Retreat Apartment in Riomaggiore, Cinque Terre. Pure HTML/CSS/JS — no build step, no package manager.

## Local Development

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

Then open `http://localhost:8000`.

## Architecture

Four source files:

| File | Role |
|------|------|
| `index.html` | All markup; single-page layout |
| `styles.css` | All styling; CSS custom properties in `:root` |
| `script.js` | All JS behaviour + canonical translation strings |
| `translations.js` | Alternative translation export (`window.translations`) — **`script.js` overwrites this at runtime** |

> `script.js` both declares `const translations` internally and assigns `window.translations = translations` at the bottom, so its version is always authoritative. `translations.js` is a secondary export and may diverge; keep both in sync when editing strings.

## i18n System

### Text content
Translatable elements carry a `data-i18n` attribute whose value is a flat dot-notation key:

```html
<h2 data-i18n="about.title">Benvenuto a Gaia Retreat</h2>
```

`updateLanguage(lang)` in `script.js` walks all `[data-i18n]` elements and replaces `textContent` with the matching key from `window.translations[lang]`.

### Language-specific links
Links whose `href` must change per language use `data-lang-link`:

```html
<a data-lang-link="airbnb-booking" href="...">Book</a>
```

The `linkMap` object inside `updateLanguageLinks()` in `script.js` maps `{ lang → { key → url } }`. Add new language-sensitive links here.

### Adding a language
1. Add a new key block to `translations` in **both** `script.js` and `translations.js`.
2. Add a new entry to `linkMap` in `updateLanguageLinks()`.
3. Add a `<button class="lang-btn" data-lang="xx">XX</button>` in the navbar.

Language preference is stored in `localStorage` under `preferredLanguage`; defaults to `'en'`.

## CSS Conventions

All design tokens live in `:root` in `styles.css`:

```css
:root {
    --color-primary: #1a6374;
    --color-accent:  #d4a574;
    --color-light:   #f5f5f0;
    /* spacing: --spacing-xs/sm/md/lg/xl */
    /* fonts: --font-sans, --font-serif */
    --border-radius: 8px;
    --transition: all 0.3s ease;
}
```

Use these variables for any new styles; avoid hardcoding colour or spacing values.

## Scroll Animations

`script.js` uses an `IntersectionObserver` to fade in `.gallery-item`, `.link-card`, `.restaurant-item`, `.tip-card`, and `.feature-card` on scroll. New card-type components should use one of these classes (or be added to the observer query selector) to inherit the animation automatically.
