/**
 * Indigo icon set.
 *
 * Crisp line icons on a 24×24 grid in the Linear manner: a single 1.5-weight
 * stroke in `currentColor`, minimal geometry, nothing decorative. Rendered
 * small (16px in the pill), so every glyph is drawn bold-for-its-size and
 * optically centred. Registered over the Scaffold family so every
 * `<media-icon family="scaffold">` in the skin markup renders the Indigo
 * versions. Play/pause/restart are filled shapes (they must read at 16px);
 * everything else is outline.
 */

const line = (body: string): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24">${body}</svg>`;

const filled = (body: string): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">${body}</svg>`;

/** Filled triangle, optically shifted right of geometric centre. */
export const playIcon = filled(
  `<path d="M8.6 5.8c0-.9 1-1.47 1.78-1L18.6 11c.74.45.74 1.55 0 2l-8.22 6.2c-.79.47-1.78-.1-1.78-1V5.8z"/>`,
);

/** Two filled bars. */
export const pauseIcon = filled(
  `<rect x="6.2" y="5" width="3.9" height="14" rx="1.4"/><rect x="13.9" y="5" width="3.9" height="14" rx="1.4"/>`,
);

/** Circular arrow, clockwise, arrowhead at the top. */
export const restartIcon = line(
  `<path d="M19.6 12a7.6 7.6 0 1 1-2.24-5.38"/><path d="M21.5 2.8v4.1h-4.1"/>`,
);

/** Same circular arrow for the ±10s seek buttons (the label carries the 10). */
export const seekIcon = line(
  `<path d="M19.6 12a7.6 7.6 0 1 1-2.24-5.38"/><path d="M21.5 2.8v4.1h-4.1"/>`,
);

const speaker = `<path d="M4 9.8v4.4h3.2L11.8 18.4c.55.48 1.5.08 1.5-.65V6.25c0-.73-.95-1.13-1.5-.65L7.2 9.8H4z"/>`;

export const volumeHighIcon = line(
  speaker + `<path d="M16.4 9.4a3.7 3.7 0 0 1 0 5.2"/><path d="M18.6 7a7 7 0 0 1 0 10"/>`,
);

export const volumeLowIcon = line(speaker + `<path d="M16.4 9.4a3.7 3.7 0 0 1 0 5.2"/>`);

export const volumeOffIcon = line(speaker + `<path d="M16.2 9.8l4.6 4.6M20.8 9.8l-4.6 4.6"/>`);

const captionsFrame = `<rect x="3" y="5.2" width="18" height="13.6" rx="3"/>`;
const captionsMarks = `<path d="M10.5 10.3a2.5 2.5 0 1 0 0 3.4M17 10.3a2.5 2.5 0 1 0 0 3.4"/>`;

export const captionsOffIcon = line(captionsFrame + captionsMarks);

/** Filled frame with the CC marks knocked out — state reads by shape. */
export const captionsOnIcon = filled(
  `<path fill-rule="evenodd" d="M6.5 5.2h11A3.5 3.5 0 0 1 21 8.7v6.6a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 15.3V8.7a3.5 3.5 0 0 1 3.5-3.5zm4 5.1a2.5 2.5 0 1 0 0 3.4 2.5 2.5 0 0 0 0-3.4zm6.5 0a2.5 2.5 0 1 0 0 3.4 2.5 2.5 0 0 0 0-3.4z"/>`,
);

export const checkIcon = line(`<path d="M5 12.6l4.6 4.6L19 7"/>`);

export const chevronIcon = line(`<path d="M9.2 4.8L16.4 12l-7.2 7.2"/>`);

export const fullscreenEnterIcon = line(
  `<path d="M4 9.2V6a2 2 0 0 1 2-2h3.2M14.8 4H18a2 2 0 0 1 2 2v3.2M20 14.8V18a2 2 0 0 1-2 2h-3.2M9.2 20H6a2 2 0 0 1-2-2v-3.2"/>`,
);

export const fullscreenExitIcon = line(
  `<path d="M9.2 4v3.2A2 2 0 0 1 7.2 9.2H4M20 9.2h-3.2a2 2 0 0 1-2-2V4M14.8 20v-3.2a2 2 0 0 1 2-2H20M4 14.8h3.2a2 2 0 0 1 2 2V20"/>`,
);

/** Gear: a hub with eight short spokes — reads as settings at 16px. */
export const gearIcon = line(
  `<circle cx="12" cy="12" r="3"/>` +
    `<path d="M12 3v2.4M12 18.6V21M3 12h2.4M18.6 12H21M5.6 5.6l1.7 1.7M16.7 16.7l1.7 1.7M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7"/>`,
);

const pipFrame = `<rect x="3" y="5.2" width="18" height="13.6" rx="3"/>`;

export const pipEnterIcon = line(pipFrame + `<rect x="12.4" y="11.8" width="6" height="4.4" rx="1.2"/>`);

export const pipExitIcon = line(pipFrame + `<rect x="5.6" y="7.6" width="6" height="4.4" rx="1.2"/>`);

/** Screen with the AirPlay triangle beneath. */
export const airplayEnterIcon = line(
  `<rect x="3.5" y="4.8" width="17" height="11.4" rx="2.2"/><path d="M12 13l2.7 3.6H9.3L12 13z"/>`,
);

/** Screen with the AirPlay triangle filled (connected state). */
export const airplayExitIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24"><rect x="3.5" y="3.8" width="17" height="11.4" rx="2.2"/><path d="M12 15.6l3 4H9l3-4z" fill="currentColor" stroke="none"/></svg>`;

const castWaves = `<path d="M4.6 16.4a8.2 8.2 0 0 1 6.6 6.6M4.6 13.3a12.2 12.2 0 0 1 9.8 9.8M4.6 19.4a4.4 4.4 0 0 1 3.6 3.6"/>`;

export const castEnterIcon = line(
  `<path d="M4.6 6.6A2.4 2.4 0 0 1 7 4.2h10a2.4 2.4 0 0 1 2.4 2.4v6.8A2.4 2.4 0 0 1 17 15.8h-3.2"/>` + castWaves,
);

export const castExitIcon = line(
  `<path d="M4.6 6.6A2.4 2.4 0 0 1 7 4.2h10a2.4 2.4 0 0 1 2.4 2.4v6.8A2.4 2.4 0 0 1 17 15.8h-3.2"/>` +
    castWaves +
    `<path d="M10.2 7.6h5.6v4.8h-5.6z"/>`,
);

/** Speech bubble with two lines — the audio-track menu glyph. */
export const speechIcon = line(
  `<path d="M5.2 4.8h13.6A1.7 1.7 0 0 1 20.5 6.5v7.3a1.7 1.7 0 0 1-1.7 1.7h-7.6l-4.4 3.8v-3.8H5.2a1.7 1.7 0 0 1-1.7-1.7V6.5a1.7 1.7 0 0 1 1.7-1.7z"/><path d="M7.6 9.2h8.8M7.6 12.2h5.2"/>`,
);

/** Gauge arc with a needle. */
export const speedIcon = line(
  `<path d="M4.8 18.2a8.8 8.8 0 1 1 14.4 0"/><path d="M12 14.2l3.6-5.4"/><circle cx="12" cy="14.2" r="1.3"/>`,
);

/** Three sliders with round knobs — the quality/menu glyph. */
export const switchesIcon = line(
  `<path d="M4 7.4h9.2M17.2 7.4H20M4 16.6h3.2M11.2 16.6H20"/><circle cx="15.2" cy="7.4" r="2"/><circle cx="9.2" cy="16.6" r="2"/>`,
);

/** Indigo spinner: a single arc in Linear indigo, spun by the component's
 * `--media-spinner-animation` variable (the base switches it off under
 * reduced motion and when the indicator hides). */
export const spinnerIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" aria-hidden="true" viewBox="0 0 24 24"><style>@keyframes indigo-spin{to{transform:rotate(360deg)}}</style><path stroke="#5E6AD2" stroke-width="2.4" stroke-linecap="round" d="M12 3.4a8.6 8.6 0 1 1-8.6 8.6" style="transform-box:view-box;transform-origin:center;animation:var(--media-spinner-animation, indigo-spin 0.9s linear infinite)"/></svg>`;

export const indigoIcons: Record<string, string> = {
  'airplay-enter': airplayEnterIcon,
  'airplay-exit': airplayExitIcon,
  'captions-off': captionsOffIcon,
  'captions-on': captionsOnIcon,
  'cast-enter': castEnterIcon,
  'cast-exit': castExitIcon,
  check: checkIcon,
  chevron: chevronIcon,
  'fullscreen-enter': fullscreenEnterIcon,
  'fullscreen-exit': fullscreenExitIcon,
  gear: gearIcon,
  pause: pauseIcon,
  'pip-enter': pipEnterIcon,
  'pip-exit': pipExitIcon,
  play: playIcon,
  restart: restartIcon,
  seek: seekIcon,
  speech: speechIcon,
  speed: speedIcon,
  spinner: spinnerIcon,
  switches: switchesIcon,
  'volume-high': volumeHighIcon,
  'volume-low': volumeLowIcon,
  'volume-off': volumeOffIcon,
};
