# Learnova — Responsive Product Landing Page

A responsive landing page for **Learnova**, a fictional online learning platform for students, early-career professionals, and curious lifelong learners.

## Project files

- `index.html` — page structure and content
- `style.css` — colors, typography, layout, components, and responsive breakpoints
- `script.js` — mobile navigation, demo signup feedback, and dynamic footer year
- `README.md` — project overview and usage instructions

## Run locally

1. Download or extract the project folder.
2. Open `index.html` in a modern browser.
3. For a local development server, open the folder in VS Code and use the Live Server extension.

No build step or package installation is required. Google Fonts are loaded from the internet; system fallback fonts are used if they are unavailable.

## Intended audience

Learnova is designed for students, beginners, and early-career learners who want to explore design, technology, and business skills in a friendly, low-pressure environment.

## Design choices

- **Visual direction:** friendly, modern, and optimistic, with generous whitespace and rounded cards.
- **Color palette:** deep ink `#22212B`, purple `#7556E8`, pale lilac `#EEE9FF`, warm yellow `#FFD96B`, mint `#DFF4E9`, and warm off-white `#FBFAF8`.
- **Typography:** Manrope for headings and branding; DM Sans for body copy and interface text.
- **Layout:** CSS Grid for major sections and course cards; Flexbox for navigation, buttons, metadata, and footer groups.
- **Responsive behavior:** desktop two-column hero; tablet adjustments; single-column mobile hero and course cards; collapsible mobile navigation.
- **Accessibility:** semantic landmarks, descriptive labels, keyboard-friendly links/buttons, visible form status, and reduced-motion support.

## Components

Reusable UI patterns include:
1. **Header/navigation** — brand, links, CTA, and mobile menu.
2. **Button styles** — primary, compact, and dark variants.
3. **Course cards** — consistent card structure with category, lesson count, description, and link.
4. **Feature rows** — icon, title, description, and number.
5. **Signup form** — email input, CTA, and accessible feedback message.
6. **Footer** — brand, social links, legal links, and dynamic year.

## Interaction notes

- The mobile menu opens and closes with the menu button, and closes when a navigation link is selected.
- The email form validates the address and displays a demo confirmation.
- **The form is frontend-only.** It does not save emails or send them to a server. Connect `script.js` to a mailing-list service or backend before using it in production.
- Course links and social links are sample anchors and can be replaced with real destinations.

## Suggested Figma design tokens

| Token | Value |
|---|---|
| Color / Ink | `#22212B` |
| Color / Purple | `#7556E8` |
| Color / Lilac | `#EEE9FF` |
| Color / Yellow | `#FFD96B` |
| Color / Mint | `#DFF4E9` |
| Color / Background | `#FBFAF8` |
| Heading font | Manrope, 700–800 |
| Body font | DM Sans, 400–700 |
| Large radius | 28px |
| Card radius | 18px |
| Button radius | 13px |
| Content max width | 1120px |

## Customization

- Edit the text and section order in `index.html`.
- Update design tokens near the top of `style.css`.
- Adjust breakpoints in the media queries at the bottom of `style.css`.
- Replace the demo signup handler in `script.js` with your production integration.
