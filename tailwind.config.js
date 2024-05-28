/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-0": "var(--primary-0)",
        "primary-10": "var(--primary-10)",
        "primary-20": "var(--primary-20)",
        "primary-30": "var(--primary-30)",
        "primary-40": "var(--primary-40)",
        "primary-60": "var(--primary-60)",
        "primary-70": "var(--primary-70)",
        "primary-80": "var(--primary-80)",
        "primary-90": "var(--primary-90)",
        "primary-95": "var(--primary-95)",
        "primary-99": "var(--primary-99)",
        "primary-100": "var(--primary-100)",

        primary: "var(--primary)",
        "on-primary": "var(--on-primary)",
        "primary-container": "var(--primary-container)",
        "on-primary-container": "var(--on-primary-container)",
        "primary-fixed": "var(--primary-fixed)",
        "on-primary-fixed": "var(--on-primary-fixed)",
        "primary-fixed-dim": "var(--primary-fixed-dim)",
        "on-primary-fixed-variant": "var(--on-primary-fixed-variant)",

        secondary: "var(--secondary)",
        "on-secondary": "var(--on-secondary)",
        "secondary-container": "var(--secondary-container)",
        "on-secondary-container": "var(--on-secondary-container)",

        error: "var(--error)",
        "on-error": "var(--on-error)",
        "error-container": "var(--error-container)",
        "on-error-container": "var(--on-error-container)",

        tertiary: "var(--tertiary)",
        "on-tertiary": "var(--on-tertiary)",
        "tertiary-container": "var(--tertiary-container)",
        "on-tertiary-container": "var(--on-tertiary-container)",

        surface: "var(--surface)",
        "on-surface": "var(--on-surface)",
        "surface-container": "var(--surface-container)",
        "on-surface-variant": "var(--on-surface-variant)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
