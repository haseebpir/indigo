# Indigo — a Linear-style floating pill skin for Video.js v10

**Indigo** re-skins the Video.js v10 player as a single floating obsidian
pill, in the manner of the Linear release player: one slim capsule detached
from the bottom edge, holding everything in a single row — play, volume,
the seek track itself, a monospace timecode, and the utility buttons. There
is no second row and no control bar bolted to the frame. Linear indigo
`#5E6AD2` is spent exactly once: on the played portion of the seek track,
which glows.

It is painted onto the standard v10 components, so every control, menu,
hotkey and announcement keeps working exactly as the framework intends.

Built for the **Video.js Skins Design Challenge** (Contra × Mux).
Design file: [Video.js v10 Skin explorations (Figma)](https://www.figma.com/design/sNC6EfwTYauoRLs92zVwbi) — see the "Variation 6 — Indigo" page.

## Run it locally

```sh
npm install
npm run dev        # workbench: test sizes, aspect ratios, colour schemes, RTL, languages
npm run typecheck  # tsc --noEmit
npm run build      # production build
```

The workbench plays real video — a 90-second 1080p clip from Blender's
*Big Buck Bunny*, hosted on Mux — no placeholder media. Change the preview
media in `apps/preview/src/frame/player`.

## The design system

- **One floating pill** — the whole control bar is a single capsule,
  88% of the player width capped at 760px, floating 20px above the bottom
  edge, 48px tall with a full 999px radius. Its border is drawn with
  box-shadow, the way Linear draws it: a lit top edge
  (`inset 0 1px 0 rgb(255 255 255 / 0.12)`), a dark outer ring
  (`0 0 0 1px rgb(0 0 0 / 0.6)`) and a soft drop shadow.
- **Obsidian glass** — `rgb(18 19 22 / 0.82)` with
  `backdrop-filter: blur(20px) saturate(160%)`. Menus, tooltips and the
  volume popover use the same surface a touch stronger (94%) at a 12px
  radius, so they read as the pill's companions, not foreign panels.
- **The seek is inline** — the track is a flex item *inside* the pill,
  between the volume button and the timecode: a 3px line
  (`rgb(255 255 255 / 0.10)` unfilled, `0.22` buffered) that swells to
  6px on hover, focus or drag. The played fill is solid `#5E6AD2` with a
  12px indigo glow (`box-shadow: 0 0 12px rgb(94 106 210 / 0.65)`) — the
  skin's single glow. The thumb stays hidden until the user reaches for
  the slider (it is always visible on touch devices).
- **Type:** *Inter* for UI text; *JetBrains Mono* for the timecode —
  12px, weight 500, tabular, −0.02em letter-spacing — with the current
  time in `#EDEDEF` and the duration dimmed to `#6B7280`.
- **Buttons:** 36px circles on 44px hit areas (a transparent 4px border
  clips the hover wash to the padding box), 16px icons that rest at
  `#9CA3AF` and brighten to `#F9FAFB` on hover, 4px gaps throughout.
- **Icons:** 24 glyphs on a 24×24 grid drawn with a crisp 1.5-weight
  stroke in `src/video/icons.ts`; play/pause are filled so they read at
  16px, and the buffering spinner is a single indigo arc.
- **Light scheme** — the pill turns pale (`rgb(255 255 255 / 0.85)`)
  with ink text; the indigo is untouched. Over-footage elements (title,
  top actions, centre play) keep their dark-glass treatment in both
  schemes, because the footage — not the scheme — is what sits behind
  them.

## Signature moments

- **The luminous line** — mid-video, the pill is a quiet dark capsule
  with one glowing indigo thread running through it; the position of the
  playhead is legible from across the room without a single number.
- **Everything in one row** — scrubbing, volume, captions and settings
  all live in the same 48px strip; nothing stacks, nothing docks to the
  frame edges.
- **Restraint at the centre** — the centre play is a small obsidian disc
  (56px), not a billboard; the top bar is a plain title and two ghost
  circles.
- **Mono timecode** — the tabular JetBrains Mono readout
  (`0:25 / 1:30`, duration dimmed) gives the pill its engineering-diary
  character.

## Accessibility

- Touch targets are **44×44px** even though the visible buttons are
  36px; the indigo focus ring is never removed, and the pill stays
  visible while anything inside it has keyboard focus.
- Works in **light and dark colour schemes** — the skin syncs to the
  host page's `color-scheme` (and to the OS preference).
- `prefers-reduced-transparency` / `prefers-contrast: more` retire the
  blur and take the surfaces nearly opaque.
- `prefers-reduced-motion` removes transitions and press scaling.
- **Forced-colors** fallbacks: the glow retires, fills become the system
  Highlight colour and the buffer goes hatched, so every control stays
  legible.
- The scaffold's hotkeys (`Space`, `M`, `F`, arrow keys), status
  announcer and error dialog are all kept, and the skin layer changes
  no behaviour — layout is achieved with flex ordering on the existing
  markup.

## One of six directions

Indigo is one of six fully built skins explored for this challenge —
alongside a retro pixel-arcade skin, a frosted-glass skin, an editorial
cinema skin, an Apple-style capsule and a Video.js "Frosted" tribute.
Each direction was built to the same standard (working controls, both
schemes, keyboard and forced-colors passes) so the final entry could be
chosen on design, not on completeness.

## Project structure

```
src/video/skin.html   – component markup (unchanged from the Scaffold skin)
src/video/skin.ts     – registers the Indigo icon set + colour-scheme sync
src/video/skin.css    – the Indigo layer: tokens, the pill, inline seek, states, responsive & a11y blocks
src/video/icons.ts    – the 24-icon crisp stroke set (24×24 grid, 1.5 weight)
src/skin.css          – font imports (Inter + JetBrains Mono)
apps/preview/         – the Video.js workbench used for testing and the live demo
```

The skin is a paint layer over fully working controls — no behaviour is
forked, which is what keeps every menu, gesture and keyboard path intact.

## How it was built

Designed first in Figma (tokens, desktop and mobile players), then
implemented with an AI coding agent against the version-matched Video.js
v10.3.0 docs: scaffold project, custom icon set, CSS layer, then a
fidelity pass comparing the running preview against the Figma frames —
followed by checks at desktop and mobile widths, both colour schemes,
keyboard-only navigation, reduced motion and forced colours.

## License

Submitted under the challenge terms: Apache License 2.0.

## Credits

Designed & built by **Haseeb P.** — CEO, The Hitek Agency (Houston, USA).
