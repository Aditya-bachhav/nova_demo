# Nova Spectral — website concept

A responsive React/Vite redesign concept for [novaspectral.ai](https://novaspectral.ai/). The content is based on the public site as accessed on 2 November 2026. The custom image assets are muted, hand-engraved-style concept illustrations; they are not photographs of actual Nova Spectral products and do not represent measured sensor output.

## Local setup

Requirements: Node.js 22 or later and npm.

```bash
npm install
npm run setup:reactdrops
npm run dev
```

Then open the local Vite URL printed in the terminal.

`npm run setup:reactdrops` runs the six supplied ReactDrops registry commands sequentially:

- Shape Physics
- Fan Gallery
- Refracted Text
- Showcase Pointer
- Chromatic Button
- Bubble UI (`soap-bubble`)

The ReactDrops source is installed by the CLI into `src/components`. The registry was not reachable from the authoring environment, so the ZIP includes the install script and the website integration—not copied ReactDrops source files. Run the setup command on a machine with registry access before starting or building the site. Keep the license notices embedded in the installed component files. ReactDrops permits use in personal and commercial websites and client projects, but its license does not permit redistributing the components themselves as a library, UI kit, reusable starter or code bundle without separate written permission.

### Showcase Pointer

The Showcase Pointer registry component is installed by the setup script, but it is deliberately not mounted or scripted yet. Before adding cursor scripts, decide the cursor's intended actions and the exact selectors/elements it should target. Scripted presses should only update local preview state and must not trigger real navigation, form submission or production actions.

## Project structure

```text
src/
  App.tsx              Page sections and component integrations
  index.css            Typography, layout, responsive behavior and motion rules
  main.tsx             React entry point
  lib/utils.ts         shadcn utility helper
public/assets/
  sensor-engraving.webp
  gallery/             Five cropped research concept illustrations
scripts/
  install-reactdrops.mjs
```

## Typography

- Display: Cabinet Grotesk (Fontshare)
- Body: Switzer (Fontshare)
- Technical labels: IBM Plex Mono
- Local fallback: IBM Plex Sans / system sans-serif

The Fontshare families load from Fontshare's stylesheet endpoint. IBM Plex fonts are included as npm dependencies for fallbacks.

## Notes before production

- The process stack illustration is conceptual and marked as not to scale.
- Roadmap dates, applications, team biographies and contact addresses reflect the public Nova Spectral site at the time of research; confirm them with the company before publishing changes.
- Team LinkedIn links point to the profiles linked from the public site.
- Review all copy, legal statements, product claims and contact routes with Nova Spectral before deploying.
- This is a front-end site concept; it does not include a CMS, analytics, backend, contact form processing or deployment configuration.
