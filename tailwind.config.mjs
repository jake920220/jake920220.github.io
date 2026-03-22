/** @type {import('tailwindcss').Config} */
export default {
  // We control dark mode via the .dark class (see Base.astro inline script).
  // Using 'media' causes dark: variants to apply when OS is in dark mode,
  // even if the site toggle is set to light.
  darkMode: 'class',
};
